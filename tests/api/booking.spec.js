const { test, expect } = require('@playwright/test');

const { bookingData } = require('../../fixtures/bookingData');

let bookingId;

let token;

test.describe('Booking CRUD @api @crud', () => {

  test.beforeAll(async ({ request }) => {

    const authResponse = await request.post(
      'https://restful-booker.herokuapp.com/auth',
      {
        data: {
          username: 'admin',
          password: 'password123'
        }
      }
    );

    const authBody = await authResponse.json();

    token = authBody.token;

  });

  test('Create booking', async ({ request }) => {

    const response = await request.post(
      'https://restful-booker.herokuapp.com/booking',
      {
        data: bookingData
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    bookingId = body.bookingid;

    expect(body.booking.firstname).toBe('Teste');

  });

  test('Get booking', async ({ request }) => {

    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.firstname).toBe('Teste');

  });

  test('Update booking', async ({ request }) => {

    const updatedBooking = {
      ...bookingData,
      firstname: 'QA'
    };

    const response = await request.put(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      {
        headers: {
          Cookie: `token=${token}`
        },

        data: updatedBooking
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.firstname).toBe('QA');

  });

  test('Delete booking', async ({ request }) => {

    const response = await request.delete(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      {
        headers: {
          Cookie: `token=${token}`
        }
      }
    );

    expect(response.status()).toBe(201);

  });

});