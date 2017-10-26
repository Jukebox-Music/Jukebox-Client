interface SocketRoom {
    sockets: { [id: string]: boolean };
    length: number;
    room: Room;
    name?: string;
}
