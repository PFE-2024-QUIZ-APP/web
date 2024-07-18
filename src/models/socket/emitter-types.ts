interface CreateRoomInput {
    userName: string;
    avatar: number;
}

type EditRoomInput = string

interface JoinRoomInput {
    room: string;
    userName: string;
    avatar: number;
}

interface ResponsePlayerInput {
    response: string;
    indexQuestion: number;
}