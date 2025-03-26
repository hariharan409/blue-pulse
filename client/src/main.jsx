import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EntryPoint } from '@/EntryPoint';
import '@/index.css';
import '@/styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EntryPoint />
  </StrictMode>,
)
