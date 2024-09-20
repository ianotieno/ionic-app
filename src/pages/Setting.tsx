import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import { checkmarkDoneCircleOutline, personCircleOutline } from 'ionicons/icons';

const Setting: React.FC = () => {

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                    <IonBackButton defaultHref="/app/list"/>
                </IonButtons>
            <IonIcon icon={personCircleOutline} slot="end"/>
                <IonTitle>
                     
                     Setting</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            UI goes here...
        </IonContent>
    </IonPage>
        
    );
};

export default Setting;