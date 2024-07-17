interface Player {
	id: string;
	name: string;
	score: number;
	avatar: string;
	responses: string[];
}

interface QuestionInfo {
	rightAnswer: string;
	questionText: string;
	type: string;
	responses: string[];
}

interface Question {
	question: QuestionInfo;
	creator: Player;
	currentQuestion: number;
}

interface GameModel {
	players: Player[];
	room: string;
	questions: Question[];
	me: string;
	host: boolean;
	selectedThemeId: string
}
