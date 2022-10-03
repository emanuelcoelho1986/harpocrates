import React from 'react';
import { devTools } from '@ngneat/elf-devtools';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

devTools();

const container = document.getElementById('root');
// Cast to avoid typing errors. document.getElementById returns HTMLElement which extends Element
// and Element is what createRoot is expecting
const root = createRoot(container as HTMLElement);
root.render(<App />);
