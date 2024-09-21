import { IonButton, IonButtons, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, IonHeader, IonContent, IonAvatar, IonImg, IonChip, useIonAlert, useIonToast, useIonLoading, IonRefresher, IonRefresherContent } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const [showAlert]=useIonAlert();
    const [showToast]= useIonToast();
   
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
       showAlert({
        header:'Confirm!',
        message:'Are you sure you want to clear the list of trainers',
        buttons:[
            {text:'Cancel',role:'cancel'},
            {text:'Clear',handler:()=>{
                setUsers([]);
                showToast({
                    message:'All trainers are cleared',
                    duration: 2000,
                    color: 'danger'
                })
            }}
        ]
       })
    };
  const doRefresh= async (event:any)=>{
  const data = await getUsers();
  setUsers(data);
  event.detail.complete();
   }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton fill="clear" slot="start" color="dark">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>Meet Our Trainers</IonTitle>
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
                <IonRefresher slot='fixed' onIonRefresh={(ev)=>doRefresh(ev)}>
                    <IonRefresherContent/>
                </IonRefresher>
                {
                    users.map((user, index) => (
                        <IonCard key={index}>
                            <IonCardContent className='ion-no-padding'>
                                <IonItem lines='none'>
                                    <IonAvatar slot='start'>
                                        <IonImg src={user.user.picture.thumbnail}/>
                                    </IonAvatar>
                                    <IonLabel >
                                        {user.user.name.first} {user.user.name.last}
                                        <p style={{ fontSize: '10px' }}>
                                        {user.user.email}
                                        </p>
                                    </IonLabel>
                                    <IonChip color={"tertiary"}>{user.user.gender}</IonChip>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    ))
                }
            </IonContent>
        </IonPage>
    );
};

export default List;
