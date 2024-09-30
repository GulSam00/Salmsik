import { http, HttpResponse } from 'msw';

const questionArray = [
  {
    id: 1,
    content: 'blabla',
    choices: ['AAA', 'AAB', 'ABC', 'BBB'],
    category: '경제',
    timeLimit: 5, //second
  },
  {
    id: 2,
    content: 'blabla2',
    choices: ['AAA2', 'AAB2', 'ABC2', 'BBB2'],
    category: '정치',
    timeLimit: 5, //second
  },
  {
    id: 3,
    content: 'blabla3',
    choices: ['AAA3', 'AAB3', 'ABC3', 'BBB3'],
    category: '정치',
    timeLimit: 5, //second
  },
];

const apiUrl = import.meta.env.VITE_BASE_URL;

export const questionHandler = http.get(`${apiUrl}/api/question/V2`, ({ request, params, cookies }) => {
  return HttpResponse.json({
    questionArray: questionArray,
  });
});
