interface Room {
    sockets: { [id: string]: boolean };
    length: number;
    room: any;
    name?: string;
}
