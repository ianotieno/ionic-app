import {
    IonButton, IonButtons, IonCard, IonCardContent, IonItem, IonLabel, IonIcon, IonMenuButton, IonPage, IonSearchbar, IonTitle,
    IonToolbar, useIonViewWillEnter, IonHeader, IonContent, IonAvatar, IonImg, IonChip, useIonAlert, useIonToast, IonRefresher,
    IonRefresherContent, IonSkeletonText, IonModal, IonFab, IonFabButton, IonSegment, IonSegmentButton, IonDatetime, IonInput,
    IonList, IonSelect, IonSelectOption, IonItemSliding, IonItemOptions, IonItemOption
  } from '@ionic/react';
  import { addOutline, trashBinOutline } from 'ionicons/icons';
  import React, { useEffect, useRef, useState } from 'react';
  import "../pages/List.css";
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const Tab3: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showAlert] = useIonAlert();
    const [showToast] = useIonToast();
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const model = useRef<HTMLIonModalElement>(null);
    const cardModel = useRef<HTMLIonModalElement>(null);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const page = useRef(null);
    const [activeSegment, setActiveSegment] = useState<any>('details');
  
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
  
    const getUsers = async () => {
      const response = await fetch('https://randomuser.me/api/0.8/?results=15');
      const data = await response.json();
      return data.results;
    };
  
    const clearList = () => {
      showAlert({
        header: 'Confirm!',
        message: 'Are you sure you want to clear the list of trainers',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Clear', handler: () => {
              setUsers([]);
              showToast({
                message: 'All contributors are cleared',
                duration: 2000,
                color: 'danger'
              });
            }
          }
        ]
      });
    };
  
    const doRefresh = async (event: any) => {
      const data = await getUsers();
      setUsers(data);
      event.detail.complete();
    };
  
    // Function to filter users based on the search term
    const filterUsers = () => {
      return users.filter(user =>
        `${user.user.name.first} ${user.user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  
    // Function to delete a specific user
    const deleteUser = (userToDelete: any) => {
      setUsers(users.filter(user => user !== userToDelete));
      showToast({
        message: 'Contributer deleted',
        duration: 2000,
        color: 'danger'
      });
    };
  
    return (
      <IonPage ref={page}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Meet Our Team</IonTitle>
            <IonButtons slot="end">
              <IonButtons onClick={clearList}>
                <IonIcon slot="icon-only" icon={trashBinOutline} />
              </IonButtons>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar value={searchTerm} onIonInput={e => setSearchTerm(e.detail.value!)} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRefresher slot='fixed' onIonRefresh={(ev) => doRefresh(ev)}>
            <IonRefresherContent />
          </IonRefresher>
          {loading && (
            [...Array(10)].map((_, index) => (
              <IonCard key={index}>
                <IonCardContent className='ion-no-padding'>
                  <IonItem lines='none'>
                    <IonAvatar slot='start'>
                      <IonSkeletonText />
                    </IonAvatar>
                    <IonLabel>
                      <IonSkeletonText animated style={{ width: '150px' }} />
                      <p style={{ fontSize: '10px' }}>
                        <IonSkeletonText />
                      </p>
                    </IonLabel>
                    <IonChip color={"tertiary"}></IonChip>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            ))
          )}
          {
            filterUsers().map((user, index) => (
              <IonItemSliding key={index}>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => deleteUser(user)}>
                    <IonIcon icon={trashBinOutline} /> Delete
                  </IonItemOption>
                </IonItemOptions>
  
                <IonItem lines="none" onClick={() => setSelectedUser(user)}>
                  <IonAvatar slot="start">
                    <IonImg src={user.user.picture.thumbnail} />
                  </IonAvatar>
                  <IonLabel>
                    {user.user.name.title} {user.user.name.first} {user.user.name.last}
                    <p style={{ fontSize: '10px' }}>{user.user.email}</p>
                  </IonLabel>
                  <IonChip color={"tertiary"}>{user.user.gender}</IonChip>
                </IonItem>
              </IonItemSliding>
            ))
          }
  
          <IonModal
            breakpoints={[0, 0.5, 0.8]}
            initialBreakpoint={0.5}
            ref={model}
            isOpen={selectedUser !== null}
            onIonModalDidDismiss={() => setSelectedUser(null)}
          >
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => model.current?.dismiss()}>Close</IonButton>
                </IonButtons>
                <IonTitle>
                  {selectedUser?.user.name.first} {selectedUser?.user.name.last}
                </IonTitle>
              </IonToolbar>
              <IonToolbar color={'medium'}>
                <IonSegment value={activeSegment} onIonChange={(e) => setActiveSegment(e.detail.value)}>
                  <IonSegmentButton value='details'>Details</IonSegmentButton>
                  <IonSegmentButton value='calendar'>Calendar</IonSegmentButton>
                </IonSegment>
              </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
              {activeSegment === 'details' && (
                <IonCard>
                  <IonCardContent className='ion-no-padding'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
                      <IonAvatar>
                        <IonImg src={selectedUser?.user.picture.large} />
                      </IonAvatar>
                    </div>
                    <IonItem lines='none'>
                      <IonLabel class='ion-text-wrap'>
                        More Info about your teacher
                        <ul>
                          <li><p>Email: {selectedUser?.user.email}</p></li>
                          <li><p>Cell: {selectedUser?.user.cell}</p></li>
                          <li><p>City: {selectedUser?.user.location.city}</p></li>
                          <li><p>State: {selectedUser?.user.location.state}</p></li>
                          <li><p>Street: {selectedUser?.user.location.street}</p></li>
                        </ul>
                      </IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              )}
              {activeSegment === 'calendar' && <IonDatetime />}
            </IonContent>
          </IonModal>
  
          <IonFab vertical="bottom" horizontal="end" slot="fixed" className="custom-fab">
            <IonFabButton color="tertiary" id="card-model">
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Tab3;
  