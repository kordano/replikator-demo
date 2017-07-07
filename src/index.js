import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LwwrReplikator} from "replikator";
import registerServiceWorker from './registerServiceWorker';

const userId = "mail:alice@stechuhr.de";
const lwwrId = "07f6aae2-2b46-4e44-bfd8-058d13977a8a"; // UUID as string
const uri = "ws://localhost:31778";

ReactDOM.render(<LwwrReplikator atom={0} userId={userId} crdtId={lwwrId} uri={uri}><App/></LwwrReplikator>,
                document.getElementById('root'));
