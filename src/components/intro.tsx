import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
interface ContainerProps{
    onFinish:()=>void;
}
const Intro: React.FC<ContainerProps>=()=>{

    return<div>test</div>;
    return(
        <Swiper>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    )
}

export default Intro