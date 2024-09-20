import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import { checkmarkDoneCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
const Register: React.FC=()=>{
    const router= useIonRouter();
    

    const doRegister=(event:any)=>{
        event.preventDefault();
        console.log('doLogin');
        router.goBack();
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
        <IonContent scrollY={false}>
            
          <IonCard>
            <IonCardContent>
            <IonGrid fixed>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size='12' sizeMd="8" sizeLg="6" sizeXl="4">
                        <form onSubmit={doRegister}>
              <IonInput label="Email" type='email' placeholder="ianotieno23@gmail.com" fill="outline" labelPlacement="floating"></IonInput>
              <IonInput className="ion-margin-top" label="Password" type='password' placeholder="Password" fill="outline" labelPlacement="floating"></IonInput>
              <IonButton className="ion-margin-top" type="submit" color={'tertiary'} expand="block">
              <IonIcon icon={checkmarkDoneCircleOutline} slot="end"/>
              Create Account</IonButton>
              
                </form>
                            </IonCol></IonRow></IonGrid>
               
            </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
);
};



export default Register;
