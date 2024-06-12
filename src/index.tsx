import ReactDOM from 'react-dom/client';
import Ticket from './components/Ticket/Ticket';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <StrictMode>
    <Ticket />
  </StrictMode>
);
