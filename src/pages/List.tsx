import React from 'react';
import { Redirect, Route } from 'react-router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import { homeOutline, person, globe, cog } from 'ionicons/icons';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Settings1 from './Settings1';

const List: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab5" href="/app/list/tab5">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/app/list/tab3">
        <IonIcon icon={person} />
        <IonLabel>Our Team</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab4" href="/app/list/tab4">
        <IonIcon icon={globe} />
        <IonLabel>Countries</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab6" href="/app/list/tab6">
        <IonIcon icon={cog} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
    <IonRouterOutlet>
      <Route path="/app/list/tab3" component={Tab3} exact />
      <Route path="/app/list/tab4" component={Tab4} exact />
      <Route path="/app/list/tab5" component={Tab5} exact />
      <Route path="/app/list/tab6" component={Settings1} exact />
      <Route exact path="/app/list">
        <Redirect to="/app/list/tab5" />
      </Route>
    </IonRouterOutlet>
  </IonTabs>
);

export default List;
