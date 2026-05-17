const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');

test('Remove product from cart @cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProduct('Sauce Labs Backpack');

  await inventoryPage.openCart();

  await cartPage.removeProduct('Sauce Labs Backpack');

  await expect(page.locator('.cart_item')).toHaveCount(0);

});