const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');

test('Logout flow @navigation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/cart/);

  await page.goBack();

  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.logout();

  await expect(page).toHaveURL('https://www.saucedemo.com');

});