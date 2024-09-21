import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Setting from './Setting';
import { cog, homeOutline, logOutOutline, newspaperOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
  const paths=[
    {name:'Home',url:'/app/list',icon:homeOutline},
    {name:'Settings',url:'/app/settings',icon:cog},
  ]
    return (
        <IonPage>
            <IonSplitPane contentId='main' when="sm">
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar color={'primary'}>
                  <IonTitle>Menu</IonTitle> 
                    </IonToolbar>
                </IonHeader>
                <IonContent >
                    {paths.map((item,index)=>(
                        <IonMenuToggle key={index} autoHide={false}>
                        <IonItem routerLink={item.url} key={index}>
                            <IonIcon slot='start' icon={item.icon}/>
                            {item.name}
                        </IonItem>
                        </IonMenuToggle>
                    ))}
                    <IonMenuToggle  autoHide={false}>
                        <IonButton expand='full' routerLink="/" routerDirection='root' color={"tertiary"}>
                            <IonIcon slot='start' icon={logOutOutline}/>
                           Logout
                        </IonButton>
                        </IonMenuToggle>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id='main'>
            <Route exact path="/app/list" component={List}/>
            <Route path="/app/settings" component={Setting}/>
            <Route exact path="/app">
                <Redirect to="/app/list"/>
            </Route>
            </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;