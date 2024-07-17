interface RoomDataOutput {
    roomId: string;
    players: Player[];
    questions: Question[];
}

interface EditRoomOutput {
    uidQuizz: string;
}

interface EndGameOutput {
    responsesPlayers: null;
    players: Player[];
    currentQuestion: number;
}

interface NextQuestionOutput {
    question: QuestionInfo;
    creator: Player;
    currentQuestion: number;
}

interface RoomNoFoundOutput {
    error: string
}

interface AllResponseOutput {
    question: QuestionInfo;
    currentQuestion: number;
    responsesPlayers: any;
}

interface TimeEndedOutput {
    question: QuestionInfo;
    currentQuestion: number;
    responsesPlayers: any;
}
