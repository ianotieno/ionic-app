import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const List: React.FC = () => {
    const[loading,setLoading]=useState<boolean>(true);
    const[users,setUsers]= useState<any[]>([]);

    useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            console.log("users:", users);
            setUsers(users);
            setLoading(false);
        };

        fetchUsers(); // Call the async function inside the synchronous callback
    });

    const getUsers= async ()=>{
        const data= await fetch('https://randomuser.me/api/0.8/?results=10');
        const users= await data.json();
        return users;
    };

    const clearList=(()=>{
        
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton fill="clear" slot="start" color={"dark"}>
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>List</IonTitle>
                    <IonButtons slot="end">
                        <IonButtons onClick={clearList}>
                            <IonIcon slot='icon-only' icon={trashBinOutline} color='light'/>
                        </IonButtons>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar/>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default List;