interface Player {
	id: string;
	userName: string;
	score: number;
	avatar: string;
}

interface Question {
	id: string;
	question: string;
	answers: string[];
}

interface GameModel {
	players: Player[];
	room: string;
	questions: Question[];
}

interface NextQuestionOutput {
	question: Question;
}