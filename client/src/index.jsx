import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './component/App.jsx';
import "./App.css";
const container = document.getElementById('app');
const root = createRoot(container);


 root.render(<App tab="home" />);