import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
// Get the root element
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
