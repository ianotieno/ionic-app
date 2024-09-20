import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { Children } from 'react';
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css'
import logo from '../assets/logo.png'
import details1 from '../assets/details-1.png'
import details2 from '../assets/details-4.png'
import details3 from '../assets/details-2.png'
import './intros.css'

interface ContainerProps{
    onFinish:()=>void;
}
const SwiperButtonNext =({Children}:any)=>{
    const swiper= useSwiper();
    return<IonButton onClick={()=>swiper.slideNext()}>{Children}</IonButton>
}
const Intros: React.FC <ContainerProps>= ({onFinish}) => {

    return (
        <Swiper>
            <SwiperSlide>
                <div className="ion-text-center ion-padding" >
            <img src={details1} alt="react"  />
            <IonText>
                <h3>Build Awesome Apps with Ionic React</h3>
            </IonText>
            <SwiperButtonNext>Next</SwiperButtonNext>
            </div>
           
            </SwiperSlide>
            <SwiperSlide>
            <div className="ion-text-center ion-padding" >
            <img src={details2} alt="react" width="80%"/>
            <IonText>
                <h3>Build Awesome Apps with Ionic Angular </h3>
            </IonText>
            <SwiperButtonNext> Next </SwiperButtonNext>
            </div>
           
            </SwiperSlide>
            <SwiperSlide>
            <div className="ion-text-center ion-padding" >
            <img src={details3} alt="react"  />
            <IonText>
                <h3>Build Awesome Apps with Ionic Native Android</h3>
            </IonText>
            <IonButton onClick={()=>onFinish()}>Finish</IonButton>
            </div>
           
            </SwiperSlide>
        </Swiper>
    );
};

export default Intros;