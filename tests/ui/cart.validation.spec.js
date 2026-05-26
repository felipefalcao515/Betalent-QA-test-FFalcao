const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

const { InventoryPage } = require('../../pages/InventoryPage');

test('Checkout sem produto no carrinho @cart @negative', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.openCart();

  await expect(
    page.getByText('Your Cart')
  ).toBeVisible();

  await expect(
    page.locator('.cart_item')
  ).toHaveCount(0);

  await expect(
    page.getByText('CHECKOUT')
  ).toBeVisible();

});