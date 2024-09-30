import { http, HttpResponse } from 'msw';

const apiUrl = import.meta.env.VITE_BASE_URL;

const preRegisterHandler = http.post(`${apiUrl}/api/user/private`, () => {
  return HttpResponse.json(
    { details: '이미 사전 예약 신청한 이메일 주소입니다' },
    {
      status: 400,
      statusText: 'Mocked status',
    },
  );
});

const scoreHandler = http.post(`${apiUrl}/api/user/submit-grading`, () => {
  return HttpResponse.json(
    { message: 'Mocked response' },
    {
      status: 201,
      statusText: 'Mocked status',
    },
  );
});

const registerHandler = http.post(`${apiUrl}/api/user/register`, () => {
  return HttpResponse.json(
    { message: 'Mocked response' },
    {
      status: 201,
      statusText: 'Mocked status',
    },
  );
});

export const userHandler = [preRegisterHandler, scoreHandler, registerHandler];
