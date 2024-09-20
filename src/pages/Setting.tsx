import { IonContent, IonHeader, IonMenu, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';

const Setting: React.FC = () => {

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Setting</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            UI goes here...
        </IonContent>
    </IonPage>
        
    );
};

export default Setting;