import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

 ReactDOM.render(<App />, document.getElementById('app'));

// import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

// ReactDOM.render(<Router history={browserHistory}>
//           <Route path='/' component={ParentComp}>
//             <IndexRedirect to = "/app"/>
//             <Route path='/login' component={LoginComp}/>
//             <Route path='/home' component={HomeComp}/>
//             <Route path='/repair' component={RepairJobComp} />
//             <Route path='/service' component={ServiceJobComp} />
//           </Route>
//         </Router>, document.getElementById('app')); 