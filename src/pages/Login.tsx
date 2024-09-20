import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react";
const Login: React.FC=()=>{
    const doLogin=(event:any)=>{
        event.preventDefault();
        console.log('doLogin');
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>
                        page Title
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonCard>
                <IonCardContent>
                    TEST
                </IonCardContent>
            </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
