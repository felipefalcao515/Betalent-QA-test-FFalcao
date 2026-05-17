const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');

test.describe('Products @products', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Sort products A-Z', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortProducts('az');

    await expect(page.locator('.inventory_item_name').first())
      .toContainText('Sauce Labs Backpack');
  });

  test('Sort products Price Low to High', async ({ page }) => {

    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortProducts('lohi');

    await expect(page.locator('.inventory_item_price').first())
      .toContainText('$7.99');
  });

});