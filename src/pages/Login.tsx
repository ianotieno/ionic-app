import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react";
const Login: React.FC=()=>{
    const doLogin=(event:any)=>{
        event.preventDefault();
        console.log('doLogin');
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>
                        MacAgutu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonCard>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                  <IonInput label="Email" type='email' placeholder="ianotieno23@gmail.com" fill="outline" labelPlacement="floating"></IonInput>
                  <IonInput className="ion-margin-top" label="Password" type='password' placeholder="Password" fill="outline" labelPlacement="floating"></IonInput>
                  <IonButton className="ion-margin-top" type="submit" color={'tertiary'} expand="block">Login</IonButton>
                  <IonButton color={'secondary'} routerLink="/register" className="ion-margin-top" type="button" expand="block">Create Account</IonButton>
                    </form>
                </IonCardContent>
            </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
