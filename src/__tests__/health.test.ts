import { testClient } from './helper';

describe('Health check', () => {
  describe('GET /health', () => {
    it('should return 200 with message', async () => {
      const response = await testClient.get('/health');
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body.message).toBe('OK');
    });
  });
});
