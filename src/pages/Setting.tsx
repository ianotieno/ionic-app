import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenu, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';

import { addCircle, atCircle, checkmarkDoneCircleOutline, ellipse, personCircleOutline, triangle } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Setting: React.FC = () => {

    return (
     <IonTabs>
        <IonTabBar slot='bottom'>
         <IonTabButton tab='tab1' href='/app/settings/tab1'>
        <IonIcon icon={triangle}/>
        <IonLabel>Notes</IonLabel>
         </IonTabButton>
         <IonTabButton tab='tab2' href='/app/settings/tab2'>
        <IonIcon icon={ellipse}/>
        <IonLabel>Community</IonLabel>
         </IonTabButton>
        </IonTabBar>
        <IonRouterOutlet>
        <Route path='/app/settings/tab1' component={Tab1} />
        <Route path='/app/settings/tab2' component={Tab2} />
        <Route exact path="/app/settings/">
                <Redirect to="/app/settings/tab1"/>
            </Route>
        </IonRouterOutlet>
     </IonTabs>
    );
};

export default Setting;