import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRouterLink, IonSkeletonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { cameraOutline, cog, helpBuoy, logOutOutline, peopleOutline, personAddOutline, thumbsUpSharp } from 'ionicons/icons';
import React, { useState } from 'react';

const Settings1: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    
    const paths = [
        { name: 'Snap & Save', url: '/notes', icon: cameraOutline },
        { name: 'Community', url: '/community', icon: peopleOutline },
        { name: 'Help', url: '/help', icon: helpBuoy }
    ];
    const path = [
        { name: 'Rate Us', url: '/rate', icon: thumbsUpSharp },
        { name: 'Invite A Friend', url: '/invite', icon: personAddOutline },
     
    ];

    useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
            setLoading(false); // Set loading to false after data is fetched
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
                        <IonBackButton defaultHref="/app/list" />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
        
            <IonCard>
                {loading ? (
                    // Render a single skeleton card while loading
                    [...Array(1)].map((_, index) => (
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
                ) : (
                    users.map((user, index) => (
                        <IonCard key={index}>
                            <IonItem lines="none">
                                <IonAvatar slot="start">
                                    <IonImg src={user.user.picture.thumbnail} />
                                </IonAvatar>
                                <IonLabel>
                                    {user.user.name.title} {user.user.name.first} {user.user.name.last}
                                    <p style={{ fontSize: '10px' }}>
                                        {user.user.email}
                                    </p>
                                    <p style={{ fontSize: '10px' }}>
                                        Date of Birth: {new Date(user.user.dob).toLocaleDateString()}
                                    </p>
                                </IonLabel>
                                <IonChip color="tertiary">Edit</IonChip>
                            </IonItem>
                        </IonCard>
                    ))
                )}
            </IonCard>
            <IonContent >
           <IonCard>
          
                {paths.map((item, index) => (
                    <IonItem key={index} detail={true} routerLink={item.url}>
                        <IonIcon slot="start" icon={item.icon} />
                        {item.name}
                    </IonItem>
                ))} </IonCard>
            
                 
               <IonCard>{path.map((item, index) => (
                    <IonItem key={index} detail={true} routerLink={item.url}>
                        <IonIcon slot="start" icon={item.icon} />
                        {item.name}
                    </IonItem>
                ))}</IonCard>
                
                <IonButton  expand="full" routerLink="/" routerDirection="root" color="tertiary">
                    <IonIcon slot="start" icon={logOutOutline} />
                    Logout
                </IonButton>
                
                </IonContent>
           
        </IonPage>
    );
};

export default Settings1;
