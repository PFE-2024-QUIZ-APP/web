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
    scorePlayers: null;
}

interface NextQuestionOutput {
    question: Question;
    creator: Player;
    currentQuestion: Question;
}

interface RoomNoFoundOutput {
    error: string
}

interface AllResponseOutput {
    question: Question;
    currentQuestion: number;
    responsesPlayers: any;
}

interface TimeEndedOutput {
    question: Question;
    currentQuestion: number;
    responsesPlayers: any;
}
