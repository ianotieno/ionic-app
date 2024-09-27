import { IonButton, IonButtons, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, IonHeader, IonContent, IonAvatar, IonImg, IonChip, useIonAlert, useIonToast, IonRefresher, IonRefresherContent, IonSkeletonText, IonModal, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import "../pages/List.css";

const Tab4: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const [showAlert] = useIonAlert();
    const [showToast] = useIonToast();
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const model = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const [activeSegement, setActiveSegment] = useState<any>('details');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
            setLoading(false);
        };

        fetchUsers();
    });

    const getUsers = async () => {
        const response = await fetch('https://restcountries.com/v3.1/region/africa');
        const data = await response.json();
        return data;
    };

    const clearList = () => {
        showAlert({
            header: 'Confirm!',
            message: 'Are you sure you want to clear the list of trainers',
            buttons: [
                { text: 'Cancel', role: 'cancel' },
                {
                    text: 'Clear',
                    handler: () => {
                        setUsers([]);
                        showToast({
                            message: 'All trainers are cleared',
                            duration: 2000,
                            color: 'danger',
                        });
                    },
                },
            ],
        });
    };

    const doRefresh = async (event: any) => {
        const data = await getUsers();
        setUsers(data);
        event.detail.complete();
    };

    const filterUsers = (users: any[], searchTerm: string) => {
        return users.filter((user) => {
            const name = user.name.common.toLowerCase();
            return name.includes(searchTerm.toLowerCase());
        });
    };

    const filteredUsers = filterUsers(users, searchTerm);

    return (
        <IonPage ref={page}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Countries We Operate In</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar
                        value={searchTerm}
                        onIonInput={(e: any) => setSearchTerm(e.target.value)}
                        placeholder="Search by name"
                    />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
                    <IonRefresherContent />
                </IonRefresher>
                {loading && (
                    [...Array(10)].map((_, index) => (
                        <IonCard key={index}>
                            <IonCardContent className="ion-no-padding">
                                <IonItem lines="none">
                                    <IonAvatar slot="start">
                                        <IonSkeletonText />
                                    </IonAvatar>
                                    <IonLabel>
                                        <IonSkeletonText animated style={{ width: '150px' }} />
                                        <p style={{ fontSize: '10px' }}>
                                            <IonSkeletonText />
                                        </p>
                                    </IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    ))
                )}

                {
                    filteredUsers.map((user, index) => (
                        <IonCard key={index} onClick={() => setSelectedUser(user)}>
                            <IonCardContent className="ion-no-padding">
                                <IonItem lines="none">
                                    <IonAvatar slot="start">
                                        <IonImg src={user.flags.png} /> {/* Display the flag */}
                                    </IonAvatar>
                                    <IonLabel>
                                        {user.name.common} {/* Display the country name */}
                                        <p style={{ fontSize: '10px' }}>
                                            {user.name.official} {/* Optionally, display the official country name */}
                                        </p>
                                    </IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    ))
                }

                <IonModal
                    breakpoints={[0, 0.5, 0.8]}
                    initialBreakpoint={0.5}
                    ref={model}
                    isOpen={selectedUser !== null}
                    onIonModalDidDismiss={() => setSelectedUser(null)}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => model.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                            <IonTitle>{selectedUser?.name.common}</IonTitle>
                        </IonToolbar>
                        <IonToolbar color="medium">
                            <IonSegment value={activeSegement} onIonChange={(e) => setActiveSegment(e.detail.value)}>
                                <IonSegmentButton value="details">Details</IonSegmentButton>
                               
                            </IonSegment>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {activeSegement === 'details' && (
                            <IonCard>
                                <IonCardContent className="ion-no-padding">
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
                                        <IonAvatar>
                                            <IonImg src={selectedUser?.flags.png} /> {/* Display the flag */}
                                        </IonAvatar>
                                    </div>
                                    <IonItem lines="none">
                                        <IonLabel className="ion-text-wrap">
                                            <ul>
                                                <li><p>Common Name: {selectedUser?.name.common}</p></li>
                                                <li><p>Official Name: {selectedUser?.name.official}</p></li>
                                                <li><p>Region: {selectedUser?.region}</p></li>
                                                <li><p>Subregion: {selectedUser?.subregion}</p></li>
                                                <li><p>Capital: {selectedUser?.capital?.[0]}</p></li>
                                                <li><p>Population: {selectedUser?.population.toLocaleString()}</p></li>
                                                <li><p>Map: {selectedUser?.maps?.googleMaps}</p></li>
                                                <li><p>Flag Description: {selectedUser?.flags?.alt}</p></li>

                                            </ul>
                                        </IonLabel>
                                    </IonItem>
                                </IonCardContent>
                            </IonCard>
                        )}
                    </IonContent>
                </IonModal>

            </IonContent>
        </IonPage>
    );
};

export default Tab4;
