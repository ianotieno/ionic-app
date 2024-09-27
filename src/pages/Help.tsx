import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import { informationCircleOutline, helpCircleOutline } from 'ionicons/icons';
import React from 'react';


const HelpPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                        <IonBackButton defaultHref="/app/list" />
                    </IonButtons>
                    <IonTitle>Help & FAQ</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h2>Frequently Asked Questions</h2>

                {/* FAQ about navigation */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={helpCircleOutline} style={{ backgroundColor: 'blue', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>How do I navigate through the app?</IonCardTitle>
                        <IonCardSubtitle>Learn how to explore the different sections of our app.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Learn More</IonButton>
                </IonCard>

                {/* FAQ about creating events */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={helpCircleOutline} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>How can I create an event?</IonCardTitle>
                        <IonCardSubtitle>Steps to create, manage, and host events easily.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Learn More</IonButton>
                </IonCard>

                {/* FAQ about settings */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={helpCircleOutline} style={{ backgroundColor: 'purple', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>Where can I find the settings?</IonCardTitle>
                        <IonCardSubtitle>Customize your experience with settings.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Learn More</IonButton>
                </IonCard>

                {/* FAQ about profile management */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={helpCircleOutline} style={{ backgroundColor: 'orange', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>How do I manage my profile?</IonCardTitle>
                        <IonCardSubtitle>Update your profile and preferences.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Learn More</IonButton>
                </IonCard>

                <h2>Other Resources</h2>

                {/* Link to app resources */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={informationCircleOutline} style={{ backgroundColor: 'teal', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>App Tutorials</IonCardTitle>
                        <IonCardSubtitle>Watch tutorials to get the most out of our app.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Watch Now</IonButton>
                </IonCard>

                {/* Link to support */}
                <IonCard>
                    <IonCardHeader>
                        <IonIcon icon={informationCircleOutline} style={{ backgroundColor: 'red', borderRadius: '50%', padding: '5px', color: 'white' }} />
                        <IonCardTitle>Contact Support</IonCardTitle>
                        <IonCardSubtitle>Get in touch with our support team for further assistance.</IonCardSubtitle>
                    </IonCardHeader>
                    <IonButton expand="block" fill="outline">Contact Us</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default HelpPage;
