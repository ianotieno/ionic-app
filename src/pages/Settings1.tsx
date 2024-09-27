import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterLink, IonSkeletonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { cameraOutline, cog, help, helpBuoy, logOutOutline, newspaperOutline, peopleCircle, peopleCircleSharp, peopleOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const  Settings1: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const paths = [
        
        { name: 'Snap & Save', url: '/notes', icon: cameraOutline},
        { name: 'Community', url: '/community', icon: peopleOutline },
        {name :'Help',url: '/community', icon: helpBuoy }
      ];
      useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            console.log("users:", users);
            setUsers(users);
            
        };

        fetchUsers();
    });
    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/0.8/?results=1');
        const data = await response.json();
        return data.results; // Accessing 'results' from API response
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/app/list"/>
                </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
        
            <IonCard >
                
            {
                    users.map((user, index) => (
                        <IonCard key={index} >
                              {loading && (
                    [...Array(0)].map((_, index) => (
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
                                <IonItem lines='none'>
                                    <IonAvatar slot='start'>
                                        <IonImg src={user.user.picture.thumbnail}/>
                                    </IonAvatar>
                                    <IonLabel >
                                        {user.user.name.title} {user.user.name.first} {user.user.name.last}
                                        <p style={{ fontSize: '10px' }}>
                                        {user.user.email}
                                        </p>
                                        <p style={{ fontSize: '10px' }}>
                                        Date of Birth: {new Date(user.user.dob).toLocaleDateString()}
                                    </p>
                                    </IonLabel>
                                    <IonChip color={"tertiary"}>Edit</IonChip>
                                </IonItem>
                              
                        </IonCard>
                    ))
                }
           </IonCard>   
           
            <IonContent className="ion-padding">
            
           
            {paths.map((item, index) => (
             
                <IonItem detail={true} routerLink={item.url}>
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
             
            ))}
        <IonButton expand="full" routerLink="/" routerDirection="root" color="tertiary">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
             
            </IonContent>
        </IonPage>
    );
};

export default  Settings1;