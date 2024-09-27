import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon, IonFooter, IonCardContent, IonAvatar, IonImg, useIonViewWillEnter, IonRouterOutlet, IonLabel, IonSelect, IonSelectOption, IonCheckbox } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import { homeOutline, searchOutline, addOutline, personOutline, notificationsOutline, micOutline, peopleOutline, wifi, flame } from 'ionicons/icons';
import '../pages/Tab5.css'
import { Route, useHistory } from 'react-router-dom';

import Rooms from './Rooms'
const Tab5: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUser,setSelectedUser]=useState<any>(null);
    const [presentingElement, setPresentingElement]=useState<HTMLElement| null> (null);
    const page= useRef(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [attending, setAttending] = useState("");
    const [isAttending, setIsAttending] = useState(false);

    // Fetch users or data (dummy example)
    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/0.8/?results=17');
        const data = await response.json();
        return data.results;
    };

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    useIonViewWillEnter(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            console.log("users:", users);
            setUsers(users);
            setLoading(false);
        };

        fetchUsers();
    });

    const history = useHistory();
    const navigateToDetails = (speaker: any, listeners: any[], title: string, subtitle: string, subtitle2: string, icon: any[]) => {
        history.push({
            pathname: '/rooms',
            state: { speaker, listeners, title, subtitle, subtitle2, icon },
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Our Channels</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h2>Upcoming</h2>
                {/* Card for upcoming talk */}
                <IonCard className="upcoming-card" onClick={() => navigateToDetails(users[0], users.slice(1, 10), 'The future of design systems', 'Design talks','Tommorrow 5:00 PM',[ flame])}>
                    <IonCardHeader>
                        <IonCardSubtitle>  <IonIcon  style={{
            backgroundColor: 'white',
            borderRadius: '50%'
          }}icon={flame}/> Design talks</IonCardSubtitle>
                        <IonCardTitle>The future of design systems</IonCardTitle>

                         <IonCardSubtitle>Tommorrow 5:00Pm </IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                        <IonRow>
                        {users.slice(3,7).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                {/* Mock avatars for speakers */}
                                <IonIcon icon={micOutline} />
                                <span>4 Speakers</span>
                            </IonCol>

                            <IonCol>
                            
                            <IonIcon icon={peopleOutline} />
                                <span>  Will you be attending ?</span>
                            <IonSelect
                            value={attending}
                            onIonChange={(e) => setAttending(e.detail.value)}
                        >
                            <IonSelectOption value="yes">Yes</IonSelectOption>
                            <IonSelectOption value="no">No</IonSelectOption>
                            <IonSelectOption value="no">Maybe</IonSelectOption>
                        </IonSelect>
                       
                        </IonCol>

                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard className="upcoming-card" onClick={() => navigateToDetails(users[0], users.slice(1, 3), 'The future of ionic', 'Mobile Talk','Tommorrow 7:00 PM',[ flame])}>
                    <IonCardHeader>
                        <IonCardSubtitle>  <IonIcon  style={{
            backgroundColor: 'white',
            borderRadius: '50%'
          }}icon={flame}/> Mobile Talk</IonCardSubtitle>
                        <IonCardTitle>The future of ionic </IonCardTitle>
                        <IonCardSubtitle>Tommorrow 7:00 PM</IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                        <IonRow>
                        {users.slice(14, 16).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}

                        </IonRow>
                        <IonRow>
                            <IonCol>
                                {/* Mock avatars for speakers */}
                                <IonIcon icon={micOutline} />
                                <span>2 Speakers</span>
                            </IonCol>
                            <IonCol>
                            
                            <IonIcon icon={peopleOutline} />
                                <span> Will you be attending?</span>
                            <IonSelect
                            value={attending}
                            onIonChange={(e) => setAttending(e.detail.value)}
                        >
                            <IonSelectOption value="yes">Yes</IonSelectOption>
                            <IonSelectOption value="no">No</IonSelectOption>
                            <IonSelectOption value="no">Maybe</IonSelectOption>
                        </IonSelect>
                       
                        </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>

                <h2>Happening Now</h2>
                {/* Cards for ongoing talks */}

                <IonCard className="happening-now-card" onClick={() => navigateToDetails(users[0], users.slice(1, 10), 'Let\'s talk about ReactJS', 'Javascript talks','Today 2:00 PM',[ flame])}>
                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon style={{
            backgroundColor: 'green',
            borderRadius: '50%'
          }} icon={flame}/> Javascript talks</IonCardSubtitle>
                        <IonCardTitle>Let's talk about ReactJS</IonCardTitle>
                        <IonCardSubtitle>Today 2:00 PM </IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                        <IonRow>
                            {/* Show only the first 3 users */}
                            {users.slice(0, 4).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                {/* Mock avatars for speakers */}
                                <IonIcon icon={micOutline} />
                                <span>4 Speakers</span>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={peopleOutline} />
                                <span>239 Audience</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>

                <IonCard className="happening-now-card" onClick={() => navigateToDetails(users[0], users.slice(1, 15), 'Mobile talks', 'How Ionic can transform mobile development','Today 3:05 PM',[flame])}>

                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon  style={{
            backgroundColor: 'green',
            borderRadius: '50%'}} icon={flame}/> Mobile talks</IonCardSubtitle>
                        <IonCardTitle> How Ionic can transform mobile development</IonCardTitle>
                        <IonCardSubtitle>Today 3:05 PM</IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                    <IonRow>
                            {/* Show only the first 3 users */}
                            {users.slice(5, 7).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={micOutline} />
                                <span>2 Speakers</span>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={peopleOutline} />
                                <span>50 Audience</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard className="happening-now-card" onClick={() => navigateToDetails(users[16], users.slice(0, 15), 'Mobile talks', 'How Ionic can transform mobile development','Today 3:30 PM',[flame])}>

                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon  style={{
            backgroundColor: 'green',
            borderRadius: '50%'}} icon={flame}/> Mobile talks</IonCardSubtitle>
                        <IonCardTitle>How to  Use Capacitors to access native features</IonCardTitle>
                        <IonCardSubtitle>Today 3:30 PM</IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                    <IonRow>
                            {/* Show only the first 3 users */}
                            {users.slice(8, 11).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={micOutline} />
                                <span>3 Speakers</span>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={peopleOutline} />
                                <span>150 Audience</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard className="happening-now-card" onClick={() => navigateToDetails(users[11], users.slice(0, 10), 'Design talks', 'Does SASS give you an added advantage','Today 4:10 PM',[flame])}>

                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon  style={{
            backgroundColor: 'green',
            borderRadius: '50%'}} icon={flame}/> Design talks</IonCardSubtitle>
                        <IonCardTitle>Does SASS give you an added advantage</IonCardTitle>
                        <IonCardSubtitle>Today 4:10 PM</IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                    <IonRow>
                            {/* Show only the first 3 users */}
                            {users.slice(12,14).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={micOutline} />
                                <span>2 Speakers</span>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={peopleOutline} />
                                <span>50 Audience</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard  className="happening-now-card" onClick={() => navigateToDetails(users[6], users.slice(0, 16), 'Business Talk', 'Build A startUp from scratch','Today 3:50 PM',[flame])}>

                    <IonCardHeader>
                        <IonCardSubtitle><IonIcon  style={{
            backgroundColor: 'green',
            borderRadius: '50%'}} icon={flame}/> Business Talk</IonCardSubtitle>
                        <IonCardTitle>Build A startUp from scratch</IonCardTitle>
                        <IonCardSubtitle>Today 3:50 PM</IonCardSubtitle>
                    </IonCardHeader>
                    <IonGrid>
                    <IonRow>
                            {/* Show only the first 3 users */}
                            {users.slice(14).map((user, index) => (
                                <IonCol key={index} size="auto">
                                    <IonAvatar onClick={() => setSelectedUser(user)}>
                                        <IonImg src={user.user.picture.thumbnail} />
                                    </IonAvatar>
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={micOutline} />
                                <span>3 Speakers</span>
                            </IonCol>
                            <IonCol>
                                <IonIcon icon={peopleOutline} />
                                <span>110 Audience</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>

            </IonContent>

        </IonPage>
    );
};

export default Tab5;
