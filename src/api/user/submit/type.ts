export interface answerObj {
  id: number;
  answer: string;
}

export interface FetchQuestionsRequest {
  userId: number;
  answers: answerObj[];
}

export interface FetchQuestionsResponse {
  score: number;
  percentile: number;
}

export interface ApiError {
  code: string;
  message: string;
  response: ErrorResponseType;
}

interface ErrorResponseType {
  data: ErrorDataType;
}
interface ErrorDataType {
  details: string;
  message: string;
}
