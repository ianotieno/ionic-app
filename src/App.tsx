import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import Rooms from './pages/Rooms';
import { ToastContainer } from 'react-toastify';
import List from './pages/List';
import Notes from './pages/Notes';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <ToastContainer />
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register" component={Register} exact />
        <Route path="/app/list" component={List} />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/notes" component={Notes} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
