export interface Question {
  id: number;
  content: string;
  choices: string[];
  category: string;
  timeLimit: number;
}

export interface QuestionEmojis {
  [string: string]: string;
}

export interface getQuestionResponse {
  questionArray: Question[];
  emojis: QuestionEmojis;
}
