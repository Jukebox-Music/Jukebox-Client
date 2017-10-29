type PlayerEventType = 'play' | 'seek' | 'pause';

interface PlayerEvent {
    type: PlayerEventType;
    payload?: any;
}
