interface Player {
	id: string;
	name: string;
	score: number;
	avatar: string;
	responses: string[];
}

interface Question {
	id: string;
	question: string;
	answers: string[];
}

interface GameModel {
	players: Player[];
	room: string;
}

interface NextQuestionOutput {
	question: Question;
}