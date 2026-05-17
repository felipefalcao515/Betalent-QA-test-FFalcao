const { test, expect } = require('@playwright/test');

test('Generate auth token @api @auth', async ({ request }) => {

  const response = await request.post(
    'https://restful-booker.herokuapp.com/auth',
    {
      data: {
        username: 'admin',
        password: 'password123'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.token).toBeTruthy();

});