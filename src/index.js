// ./src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

//React router DOM V6 - Routes are chosen based on the best match 
//instead of being traversed in order. This avoids bugs due to unreachable 
//routes because they were defined later in your <Switch>
ReactDOM.render(<BrowserRouter>
                  <App/>
                </BrowserRouter>, document.getElementById('root'));