import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonTextarea, IonCard, IonCardContent, IonButtons, IonBackButton } from '@ionic/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './List.css'

const RateUS: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<string>('');

    const handleSubmit = () => {
        toast.success("Thank You for Rating Us", {
            position: "bottom-right"
        });
        setFeedback('');
        setRating(null);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/app/list" />
                    </IonButtons>
                    <IonTitle>Rate Us</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>
                        <h2>We value your feedback!</h2>

                        <h3>Rate our service:</h3>
                        <IonCard>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <IonButton
                                    key={star}
                                    fill={rating === star ? 'solid' : 'outline'}
                                    onClick={() => setRating(star)}
                                    className="rating-button"
                                >
                                    {star} Star{star > 1 ? 's' : ''}
                                </IonButton>
                            ))}
                        </IonCard>

                        <IonItem>
                            <IonTextarea
                                value={feedback}
                                onIonChange={(e) => setFeedback(e.detail.value!)}
                                placeholder="Tell us your thoughts..."
                                rows={4}
                            />
                        </IonItem>

                        <IonButton expand="full" onClick={handleSubmit} className="submit-button">
                            Submit Feedback
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default RateUS;
