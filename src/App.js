import React from "react";
import ListContainer from './Components/ListContainer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={ListContainer} />
     </Switch>
   </Router>
  );
}

export default App;
