const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test.describe('Login validations @login @negative', () => {

  test('Login sem username e password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('', '');

    //Asserção erro de campo obrigatório
    await expect(loginPage.errorMessage)
      .toContainText('Username is required');

  });

  test('Login sem password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('standard_user', '');

    //Asserção erro de campo obrigatório
    await expect(loginPage.errorMessage)
      .toContainText('Password is required');

  });

});