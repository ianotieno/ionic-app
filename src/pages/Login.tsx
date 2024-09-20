import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from "@ionic/react"
import React, { useEffect, useState } from "react";
import {logInOutline, personCircleOutline} from 'ionicons/icons'
import logo from '../assets/details-5.png'

import Intros from "../components/Intros";
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY='intro-seen';
const Login: React.FC=()=>{
    const router= useIonRouter();
    const [introSeen,setIntroSeen]= useState(true);
    const [present,dismiss]= useIonLoading();
    useEffect(()=>{
        const checkStorage=  async ()=>{
        const seen = await Preferences.get({ key: INTRO_KEY });
        console.log("seen value", seen);
        setIntroSeen(seen.value === 'true');
        }
        checkStorage();
    },[])
    const doLogin= async (event:any)=>{
        event.preventDefault();
        console.log('doLogin');
       await present("Logging in..");
       setTimeout(async()=>{
        dismiss();
        router.push('/app','forward');
       },2000)
      
    }
    const finishIntro = async()=>{
        console.log("finish");
        setIntroSeen(true);
        Preferences.set({key:INTRO_KEY, value:'true'});
    };
    const seeIntroAgain=()=>{
        setIntroSeen(false);
        Preferences.remove({key:INTRO_KEY})
    }
    return( 
        <>
        {!introSeen ?(
            <Intros onFinish={finishIntro}/>
        ):(
        <IonPage>
            <IonHeader>
                <IonToolbar >
                    <IonTitle>
                        MacAgutu School For Coding
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className="ion-padding">
                <IonGrid fixed>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size='12' sizeMd="8" sizeLg="6" sizeXl="4">
                            <div className="ion-text-center ion-padding">
                            <img src={logo} alt="react" width={85} />
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
              <IonCard>
                <IonCardContent>
                <IonGrid fixed>
                    <IonRow className="ion-justify-content-center">
                        <IonCol size='12' sizeMd="8" sizeLg="6" sizeXl="4">
                        <form onSubmit={doLogin}>
                  <IonInput label="Email" type='email' placeholder="ianotieno23@gmail.com" fill="outline" labelPlacement="floating"></IonInput>
                  <IonInput className="ion-margin-top" label="Password" type='password' placeholder="Password" fill="outline" labelPlacement="floating"></IonInput>
                  <IonButton className="ion-margin-top" type="submit" color={'tertiary'} expand="block">
                    <IonIcon icon={logInOutline} slot="end"/>
                    Login</IonButton>
                  <IonButton color={'secondary'} routerLink="/register" className="ion-margin-top" type="button" expand="block">
                  <IonIcon icon={personCircleOutline} slot="end"/>
                    Create Account</IonButton>
                    <IonButton onClick={seeIntroAgain} fill="clear" size="small" color={'medium'}  className="ion-margin-top" type="button" expand="block">
                  <IonIcon icon={personCircleOutline} slot="end"/>
                    Watch Intro Again</IonButton>
                    </form>
                            </IonCol></IonRow></IonGrid>
                    
                </IonCardContent>
                
                </IonCard>
            </IonContent>
        </IonPage>)};
        </>
    );
};

export default Login;
