import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
import React, { useState } from 'react';

const Invite: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleInvite = () => {
        // Logic for sending an invite goes here
        console.log(`Invite sent to: ${email}`);
        alert(`Invite sent to: ${email}`);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/app/list/tab6"/>
                </IonButtons>
                    <IonTitle>Send Invite</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    
                    <IonInput 
                        type="email" 
                        value={email} 
                        label='Invite :'
                        onIonChange={e => setEmail(e.detail.value!)} 
                        placeholder="Enter email to invite a friend"
                    />
                </IonItem>
                <IonButton expand="block" onClick={handleInvite} className="ion-margin-top">
                    Send Invite
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Invite;
