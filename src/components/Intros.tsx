import { IonButton, IonText } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import details1 from '../assets/details-1.png';
import details2 from '../assets/details-4.png';
import details3 from '../assets/details-2.png';
import './intros.css';

interface ContainerProps {
    onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intros: React.FC<ContainerProps> = ({ onFinish }) => {
    return (
        <Swiper>
            <SwiperSlide>
                <div className="ion-text-center ion-padding">
                    <img src={details1} alt="react" className="intro-image" />
                    <IonText>
                        <h3>The future of design systems</h3>
                    </IonText>
                    <SwiperButtonNext>Next</SwiperButtonNext>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ion-text-center ion-padding">
                    <img src={details2} alt="react" className="intro-image" />
                    <IonText>
                        <h3>The future of ionic</h3>
                    </IonText>
                    <SwiperButtonNext>
                        <IonText>Next</IonText>
                    </SwiperButtonNext>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ion-text-center ion-padding">
                    <img src={details3} alt="react" className="intro-image" />
                    <IonText>
                        <h3>How Ionic can transform mobile development</h3>
                    </IonText>
                    <IonButton onClick={() => onFinish()}>Finish</IonButton>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Intros;
