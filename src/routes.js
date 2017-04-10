import React from 'react'; 
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/Homepage';
import Corals from './components/Corals';
import Wysiwyg from './components/Wysiwyg';
import Promotions from './components/Promotions';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Inventory from './components/Inventory';
import NotFoundPage from './components/not-found-page';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to 
// other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/" component={App}> 
    <IndexRoute component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="inventory" component={Inventory} />
    <Route path="corals" component={Corals} />
    <Route path="wysiwyg" component={Wysiwyg} />
    <Route path="promotions" component={Promotions} />
    <Route path="contactus" component={ContactUs} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);