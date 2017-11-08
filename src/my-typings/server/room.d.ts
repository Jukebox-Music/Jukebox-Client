interface Room {
    songs: Song[];
    playState: "play" | "pause";
    name: string;
}
