import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, CreateAnimation } from '@ionic/react';
import React, { useRef } from 'react';

const Tab2: React.FC = () => {
  const animationRef = useRef(null);

  const joinCommunity = () => {
    // Replace with your WhatsApp group link or phone number
    const whatsappUrl = 'https://wa.me/1234567890?text=I%20want%20to%20join%20the%20MacAgutu%20Community';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MacAgutu Community</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        

        <div className="academy-content">
          <h2>Welcome to MacAgutu Code Academy</h2>
          <p>
            At MacAgutu Code Academy, we empower aspiring developers with the skills they need to thrive in the mobile development world. 
            Whether you're new to coding or looking to advance your skills, our academy provides comprehensive courses covering Android, iOS, and cross-platform development using the latest tools such as Ionic, React Native, and Flutter.
          </p>
          <p>
            Our hands-on approach ensures that students not only learn the theory but also build real-world applications that showcase their skills. 
            Join our community today and take the first step towards becoming a professional mobile app developer. Together, we code the future.
          </p>
        </div>
        <CreateAnimation
          ref={animationRef}
          duration={2000}
          iterations={Infinity}
          delay={1000}
          keyframes={[
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
            { offset: 1, transform: 'scale(1)', opacity: '1' },
          ]}
        >
          <IonButton expand="block" color="tertiary" className="ion-margin" onClick={joinCommunity}>
            Join MacAgutu Community
          </IonButton>
        </CreateAnimation>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
