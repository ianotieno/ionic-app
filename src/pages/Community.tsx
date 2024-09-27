import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Community: React.FC = () => {
    const joinCommunity = () => {
        const whatsappUrl = 'https://wa.me/254714194925';
        window.open(whatsappUrl, '_blank');
    };

    const openSocialMedia = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/app/list/tab6" />
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

                <IonButton expand="block" color="tertiary" className="ion-margin" onClick={joinCommunity}>
                    Join WhatsApp Group
                </IonButton>

                <div className="social-media-buttons">
                    <IonButton expand="block" color="primary" className="ion-margin" onClick={() => openSocialMedia('https://www.facebook.com/MacAgutuCodeAcademy')}>
                        Follow us on Facebook
                    </IonButton>
                    <IonButton expand="block" color="secondary" className="ion-margin" onClick={() => openSocialMedia('https://www.twitter.com/MacAgutuCode')}>
                        Follow us on Twitter
                    </IonButton>
                    <IonButton expand="block" color="danger" className="ion-margin" onClick={() => openSocialMedia('https://www.instagram.com/MacAgutuCodeAcademy')}>
                        Follow us on Instagram
                    </IonButton>
                    <IonButton expand="block" color="dark" className="ion-margin" onClick={() => openSocialMedia('https://www.linkedin.com/company/MacAgutuCodeAcademy')}>
                        Follow us on LinkedIn
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Community;
