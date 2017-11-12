export interface RoomModel {
    songs: Song[];
    playState: 'play' | 'pause';
    name: string;
    totalUsers: number;
}
