import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Profile from './components/profile';
import { AuthProvider } from './providers/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <br/>
      <Profile/>
    </AuthProvider>
  </React.StrictMode>
);