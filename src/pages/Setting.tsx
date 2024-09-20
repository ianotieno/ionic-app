import { IonContent, IonHeader, IonMenu, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Setting: React.FC = () => {

    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar>
                  <IonTitle>Menu</IonTitle> 
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>UI goes here</IonContent>
            </IonMenu>
            <IonRouterOutlet id='main'>

            </IonRouterOutlet>
        </IonPage>
    );
};

export default Setting;