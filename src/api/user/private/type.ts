export interface CreatePreRegistrationRequest {
  userId: number;
  email: string;
  isPrivacyAgreement: boolean;
}

export interface CreatePreRegistrationResponse {
  message: string;
}
