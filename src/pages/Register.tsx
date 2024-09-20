import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { checkmarkDoneCircleOutline } from "ionicons/icons";
import React from "react";
const Register: React.FC=()=>{
    const doRegister=(event:any)=>{
        event.preventDefault();
        console.log('doLogin');
    }
    return(
        <IonPage>
        <IonHeader>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"/>
                </IonButtons>
                <IonTitle>
                   Create Account
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            
          <IonCard>
            <IonCardContent>
                <form onSubmit={doRegister}>
              <IonInput label="Email" type='email' placeholder="ianotieno23@gmail.com" fill="outline" labelPlacement="floating"></IonInput>
              <IonInput className="ion-margin-top" label="Password" type='password' placeholder="Password" fill="outline" labelPlacement="floating"></IonInput>
              <IonButton className="ion-margin-top" type="submit" color={'tertiary'} expand="block">
              <IonIcon icon={checkmarkDoneCircleOutline} slot="end"/>
              Create Account</IonButton>
              
                </form>
            </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
);
};



export default Register;
