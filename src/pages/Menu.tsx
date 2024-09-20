import { IonContent, IonHeader, IonMenu, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Setting from './Setting';

const Menu: React.FC = () => {

    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar>
                  <IonTitle>Menu</IonTitle> 
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>Menu Items</IonContent>
            </IonMenu>
            <IonRouterOutlet id='main'>
            <Route exact path="/app/list" component={List}/>
            <Route path="/app/settings" component={Setting}/>
            <Route exact path="/app">
                <Redirect to="/app/list"/>
            </Route>
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Menu;