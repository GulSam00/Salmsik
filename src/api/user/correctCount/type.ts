export interface FetchCorrectCountRequest {
  userId: number;
}

interface QuizResult {
  category: string;
  count: number;
}

export interface FetchCorrectCountResponse {
  averageCorrectCountEachCategory: QuizResult[];
  userCorrectCountEachCategory: QuizResult[];
  emojis: Record<string, string>;
}
