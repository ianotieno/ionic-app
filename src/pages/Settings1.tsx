import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import { logOutOutline, newspaperOutline } from 'ionicons/icons';
import React from 'react';

const  Settings1: React.FC = () => {

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
            <IonContent className="ion-padding">
            <IonRouterLink  routerLink="/notes">
           <IonLabel style={{color:'white'}}>
           <IonIcon icon={newspaperOutline} slot="start"/> Camera 
           </IonLabel>
          
        </IonRouterLink>
        <hr/>
        <IonButton expand="full" routerLink="/" routerDirection="root" color="tertiary">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default  Settings1;