const { test, expect } = require('@playwright/test');

test.describe('Booking validations @api @validation', () => {

  test('Create booking without firstname', async ({ request }) => {

    const response = await request.post(
      'https://restful-booker.herokuapp.com/booking',
      {
        data: {
          lastname: 'Falcao'
        }
      }
    );

    expect(response.status()).not.toBe(200);

  });

  test('Create booking with empty payload', async ({ request }) => {

    const response = await request.post(
      'https://restful-booker.herokuapp.com/booking',
      {
        data: {}
      }
    );

    expect(response.status()).not.toBe(200);

  });

});