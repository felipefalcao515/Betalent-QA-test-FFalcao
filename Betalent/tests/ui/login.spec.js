const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage.js');

const { users } = require('../../fixtures/users.js');

for (const user of users) {

  test(`Login - ${user.username} @smoke @login`, async ({ page }) => {

    const loginPage = new LoginPage(page);
    
    //Navegação
    await loginPage.goto();

    //Campos de login
    await loginPage.login(user.username, user.password);
    
    //Tratamento user travado
    if (user.expected === 'locked') {

      await expect(loginPage.errorMessage)
        .toContainText('Sorry, this user has been locked out.');

    } else {

      await expect(page).toHaveURL(/inventory/);
    }

  });

}