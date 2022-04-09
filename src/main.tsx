import { createRoot } from 'react-dom/client';

import './index.css'
import App from './App'

const container = document.getElementById('root');
// Cast to avoid typing errors. document.getElementById returns HTMLElement which extends Element
// and Element is what createRoot is expecting
const root = createRoot(container as HTMLElement);
root.render(<App />);