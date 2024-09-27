import React from 'react';
import { Redirect, Route } from 'react-router';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { cog, homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';
import List from './List';
import Setting from './Setting';
import Settings1 from './Settings1';

const Menu: React.FC = () => {
  const paths = [
    { name: 'Home', url: '/app/list', icon: homeOutline },
    { name: 'Snap & Connect', url: '/app/settings', icon: newspaperOutline },
    { name: 'Settings', url: '/app/settings1', icon: cog },
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main" when="sm">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem detail={true} routerLink={item.url}>
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink="/" routerDirection="root" color="tertiary">
                <IonIcon slot="start" icon={logOutOutline} />
                Logout
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Setting} />
          <Route path="/app/settings1" component={Settings1} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
