type PlayerEventType = 'play' | 'seek' | 'pause';

interface PlayerEvent {
    type: PlayerEventType;
    seek: number;
    state: "play" | "pause";
}
