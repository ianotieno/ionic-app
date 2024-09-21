import { IonButton, IonButtons, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonViewWillEnter, IonHeader, IonContent, IonAvatar, IonImg, IonChip, useIonAlert, useIonToast, useIonLoading, IonRefresher, IonRefresherContent, IonSkeletonText, IonModal, IonFab, IonFabButton } from '@ionic/react';
import { addOutline, trashBinOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';

const List: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const [showAlert]=useIonAlert();
    const [showToast]= useIonToast();
    const [selectedUser,setSelectedUser]=useState<any>(null);
    const model= useRef<HTMLIonModalElement>(null);
    const cardModel= useRef<HTMLIonModalElement>(null);
   
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
                {loading && (
                    [...Array(10)].map((_,index)=>(
                        <IonCard key={index} >
                            <IonCardContent className='ion-no-padding'>
                                <IonItem lines='none'>
                                    <IonAvatar slot='start'>
                                        <IonSkeletonText/>
                                    </IonAvatar>
                                    <IonLabel >
                                       <IonSkeletonText animated style={{width:'150px'}}/>
                                        <p style={{ fontSize: '10px' }}>
                                        <IonSkeletonText/>
                                        </p>
                                    </IonLabel>
                                    <IonChip color={"tertiary"}></IonChip>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    ))
                    )}
                {
                    users.map((user, index) => (
                        <IonCard key={index} onClick={()=>setSelectedUser(user)}>
                            <IonCardContent className='ion-no-padding'>
                                <IonItem lines='none'>
                                    <IonAvatar slot='start'>
                                        <IonImg src={user.user.picture.thumbnail}/>
                                    </IonAvatar>
                                    <IonLabel >
                                        {user.user.name.title} {user.user.name.first} {user.user.name.last}
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
                <IonModal breakpoints={[0,0.5,0.8]} initialBreakpoint={0.5}
                ref={model} isOpen={ selectedUser!== null} 
                onIonModalDidDismiss={()=>selectedUser!== null} >
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={()=>model.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                            <IonTitle>
                                {selectedUser?.user.name.first} {selectedUser?.user.name.last}
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        SHEET
                    </IonContent>
                </IonModal>

                <IonModal ref={cardModel} trigger='card-model'>
                <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={()=>cardModel.current?.dismiss()}>Close</IonButton>
                            </IonButtons>
                            <IonTitle>
                               Card Model
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        My Card Model
                    </IonContent>
                </IonModal>
                <IonFab  color={"tertiary"} vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={addOutline}/>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default List;
