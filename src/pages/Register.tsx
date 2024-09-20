import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react";
const Register: React.FC=()=>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        page Title
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
             register ui goes here
            </IonContent>
        </IonPage>
    );
};

export default Register;
