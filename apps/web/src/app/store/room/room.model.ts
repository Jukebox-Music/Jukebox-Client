export interface RoomModel {
    songs: Song[];
    history: Song[];
    playState: 'play' | 'pause';
    name: string;
    totalUsers: number;
}
