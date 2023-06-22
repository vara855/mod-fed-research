import classNames from './card.module.css';

export default function Widget() {
    return (
        <div className={classNames.widgetContainer}>
            <h1>Card</h1>
            <p>This is a card component</p>
        </div>
    );
}
