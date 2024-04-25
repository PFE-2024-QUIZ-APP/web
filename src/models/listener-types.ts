interface RoomDataOutput {
    roomId: string;
    players: Player[];
    questions: Question[] | null;
}

interface EditRoomOutput {
    uidQuizz: string;
}

interface StartGameOutput {
    question: Question;
    creator: Player;
}

interface EndGameOutput {
    responsesPlayers: null;
    scorePlayers: null;
}

interface EndQuestionOutput {
    responsesPlayers: null;
    question: Question;
}

interface NextQuestionOutput {
    questionText: string;
    answers: string[];
    nextQuestionIndex: number;
}