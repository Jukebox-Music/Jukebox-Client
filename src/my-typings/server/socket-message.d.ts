interface SocketMessage<T = any> {
    type: string;
    payload: T;
}
