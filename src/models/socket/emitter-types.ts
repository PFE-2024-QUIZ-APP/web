interface CreateRoomInput {
    userName: string;
    avatar: string;
}

type EditRoomInput = string

interface JoinRoomInput {
    room: string;
    userName: string;
    avatar: string;
}

interface ResponsePlayerInput {
    response: string;
    indexQuestion: number;
}