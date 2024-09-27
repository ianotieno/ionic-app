import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonImg, IonGrid, IonRow, IonCol, IonIcon, IonAlert, IonCard } from '@ionic/react';
import { exitOutline, flame, micOutline, peopleOutline } from 'ionicons/icons';

const Rooms: React.FC = () => {
    const location = useLocation<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const history = useHistory();  // Get history object to navigate programmatically
    const { speaker, listeners, title, subtitle,subtitle2, icon } = location.state || { speaker: null, listeners: [], title: '', subtitle: '',subtitle2:'', icon: [] };
    
    const [showAlert, setShowAlert] = useState(false);  // State to control alert visibility

    // Handle exit button click
    const handleExitClick = () => {
        setShowAlert(true);  // Show confirmation alert
    };

    // Handle exit confirmation
    const handleExitConfirm = () => {
        history.push('/app/list/');  // Navigate to the list page
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Selected Channel</IonTitle>
                    {/* Exit icon to trigger pop-up */}
                    <IonIcon 
                        className="ion-padding" 
                        icon={exitOutline} 
                        slot="end" 
                        onClick={handleExitClick}  // Click to show pop-up
                        style={{ cursor: 'pointer' }}  // Make it look clickable
                    />
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                
                <IonCard className="happening-now-card">
                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon style={{
            backgroundColor: 'green',
            borderRadius: '50%'
          }} icon={flame} /> {title}</IonCardSubtitle>
                        <IonCardTitle> {subtitle}</IonCardTitle>
                        <IonCardSubtitle> {subtitle2}</IonCardSubtitle>
                    </IonCardHeader>

                    {/* Display the speaker */}
                    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}>
      <IonAvatar style={{ position: 'relative', display: 'inline-block' }}>
        <IonImg
          style={{ border: '2px solid green' }}
          src={speaker?.user.picture.thumbnail}
          alt="Speaker Avatar"
        />
        <IonIcon
          icon={micOutline}
          style={{
            position: 'absolute',
            bottom: '5px',
            right: '5px',
            backgroundColor: 'white',
            borderRadius: '50%',
            padding: '2px',
            zIndex: 1 // Ensure the icon is above the image
          }}
        />
      </IonAvatar>
    </div>
                    <h2> <IonIcon icon={micOutline} /> Speaker: {speaker?.user.name.first} {speaker?.user.name.last}</h2>
                </IonCard>
               
                {/* Display listeners with count */}
                <h3> <IonIcon icon={peopleOutline} /> Audience: ({listeners.length})</h3> {/* Here, we display the count */}
                <IonGrid>
                    <IonRow>
                        {listeners.map((listener: any, index: number) => (
                            <IonCol key={index} size="auto">
                                <IonAvatar>
                                    <IonImg src={listener.user.picture.thumbnail} />
                                </IonAvatar>
                                <p>{listener.user.name.first}</p>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>

            {/* Exit confirmation pop-up */}
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}  // Close the alert when dismissed
                header={'Exit Room'}
                message={'Are you sure you want to exit the room?'}
                buttons={[
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: handleExitConfirm
                    }
                ]}
            />
        </IonPage>
    );
};

export default Rooms;
