import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import { Provider } from "react-redux";
import store, { persistor } from './app/store.tsx';
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </BrowserRouter >
)
