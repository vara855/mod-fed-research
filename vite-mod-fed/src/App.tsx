import { lazy } from 'react';
import './App.css';
import Widget from './widget';

const RemoteCard = lazy(() => import('vite-widget/card'));
function App() {
    return (
        <>
            <h1>Vite React App</h1>
            <RemoteCard />
            <Widget />
        </>
    );
}

export default App;
