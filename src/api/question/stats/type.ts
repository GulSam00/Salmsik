import { Question } from '@/api/question/type';

export interface FetchQuizStatsParams {
  userId: number;
}

export interface FetchQuizStatsResponse {
  stats: Stat[];
}

export interface Stat {
  question: Question;
  correct: string;
  chosen: string;
  choiceSelectionRates: number[];
}
