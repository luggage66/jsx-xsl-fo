import { createRoot } from 'react-dom/client';
import { MonacoEditor } from './MonacoEditor';
import "./reset.css";

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<MonacoEditor width={800} height={600} />);
