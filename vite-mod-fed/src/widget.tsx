import { useState } from 'react';
import classNames from './widget.module.css';

export default function Widget() {
    const [count, setCount] = useState(0);

    return (
        <div className={classNames.widgetContainer}>
            <h1>Widget</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                Increment me {count}
            </button>
        </div>
    );
}
