import request from 'supertest';
import { app } from '../index';

export const testClient = request(app);
