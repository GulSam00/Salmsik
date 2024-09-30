export interface FetchRegisterRequest {
  sex: string;
  age: string;
}

export interface FetchRegisterResponse {
  id: string;
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
