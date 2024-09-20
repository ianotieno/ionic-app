import { IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"
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
                  <IonInput label="Password" type='password' placeholder="Password" fill="outline" labelPlacement="floating"></IonInput>
                  
                    </form>
                </IonCardContent>
            </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
