interface CreateRoomInput {
    userName: string;
    avatar: string;
}

interface EditRoomInput {
    uidQuizz: string;
}

interface JoinRoomInput {
    room: string;
    userName: string;
    avatar: string;
}

interface ResponsePlayerInput {
    response: string;
    indexQuestion: number;
}