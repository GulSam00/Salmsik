import { userHandler } from './user';
import { questionHandler } from './question';

export const defaultHandlers = [...userHandler, questionHandler];
