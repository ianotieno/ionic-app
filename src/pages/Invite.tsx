import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
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
                    <IonTitle>Send Invite</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="floating">Enter Email</IonLabel>
                    <IonInput 
                        type="email" 
                        value={email} 
                        onIonChange={e => setEmail(e.detail.value!)} 
                        placeholder="Enter email to invite"
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
