import { IonButton, IonButtons, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, IonHeader, IonContent } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);

    useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            console.log("users:", users);
            setUsers(users);
            setLoading(false);
        };

        fetchUsers();
    });

    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/0.8/?results=10');
        const data = await response.json();
        return data.results; // Accessing 'results' from API response
    };

    const clearList = () => {
        setUsers([]); // Clear the users list
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton fill="clear" slot="start" color="dark">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>List</IonTitle>
                    <IonButtons slot="end">
                        <IonButtons onClick={clearList}>
                            <IonIcon slot="icon-only" icon={trashBinOutline} />
                        </IonButtons>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {loading ? (
                    <p>Loading...</p> // Display loading state
                ) : (
                    users.map((user, index) => (
                        <IonCard key={index}>
                            <IonCardContent>
                                <IonItem>
                                    <IonLabel>
                                        {user.user.name.first} {user.user.name.last}
                                    </IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    ))
                )}
            </IonContent>
        </IonPage>
    );
};

export default List;
