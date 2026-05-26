const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test('Complete checkout flow @checkout @smoke', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProduct('Sauce Labs Backpack');

  await inventoryPage.openCart();

  await cartPage.proceedCheckout();

  await checkoutPage.fillCheckoutData(
    'Teste',
    'Silva',
    '01010-101'
  );

  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await expect(page.locator('.complete-header'))
    .toContainText('Thank you for your order!');

});