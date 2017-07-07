import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LwwrReplikator} from "replikator";
import registerServiceWorker from './registerServiceWorker';

const userId = "mail:alice@replikativ.io";
const lwwrId = "e16b068e-aa3e-4212-af1d-4f9dd4ec9e4f";
const uri = "wss://topiq.es/replikativ/ws";

ReactDOM.render(<LwwrReplikator atom={0} userId={userId} crdtId={lwwrId} uri={uri}><App/></LwwrReplikator>,
                document.getElementById('root'));

registerServiceWorker();
