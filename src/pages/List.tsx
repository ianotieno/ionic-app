import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import {  globe,homeOutline,person } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
const List: React.FC = () => {

    return (
        <IonTabs>
        <IonTabBar slot='bottom'>
        <IonTabButton tab='tab5' href='/app/list/tab5'>
        <IonIcon icon={homeOutline}/>
        <IonLabel>Home</IonLabel>
         </IonTabButton>
         <IonTabButton tab='tab1' href='/app/list/tab3'>
        <IonIcon icon={person}/>
        <IonLabel>Our Team</IonLabel>
         </IonTabButton>
         <IonTabButton tab='tab2' href='/app/list/tab4'>
         <IonIcon icon={globe}/>
        <IonLabel>Countries</IonLabel>
         </IonTabButton>
        </IonTabBar>
        <IonRouterOutlet>
        <Route path='/app/list/tab3' component={Tab3} />
        <Route path='/app/list/tab4' component={Tab4} />
        <Route path='/app/list/tab5' component={Tab5} />
        <Route exact path="/app/list/">
                <Redirect to="/app/list/tab5"/>
            </Route>
        </IonRouterOutlet>
     </IonTabs>
    );
};

export default List;