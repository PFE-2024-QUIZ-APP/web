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
    room: string;
    response: string;
    indexOfQuestion: number;
}

interface NextQuestionInput {
    room: string;
    indexOfQuestion: number;
}