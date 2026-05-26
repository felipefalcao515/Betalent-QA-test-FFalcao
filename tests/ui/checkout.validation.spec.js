const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

const { InventoryPage } = require('../../pages/InventoryPage');

const { CartPage } = require('../../pages/CartPage');

const { CheckoutPage } = require('../../pages/CheckoutPage');

test.describe('Checkout validations @checkout @negative', () => {

  test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.addProduct(
      'Sauce Labs Backpack'
    );

    await inventoryPage.openCart();

    const cartPage = new CartPage(page);

    await cartPage.proceedCheckout();

  });

  test('Checkout sem First Name', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutData(
      '',
      'Falcao',
      '88000-000'
    );

    await checkoutPage.continueCheckout();

    await expect(
      page.locator('[data-test=\"error\"]')
    ).toContainText('First Name is required');

  });

  test('Checkout sem Last Name', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutData(
      'Felipe',
      '',
      '88000-000'
    );

    await checkoutPage.continueCheckout();

    await expect(
      page.locator('[data-test=\"error\"]')
    ).toContainText('Last Name is required');

  });

  test('Checkout sem Postal Code', async ({ page }) => {

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutData(
      'Felipe',
      'Falcao',
      ''
    );

    await checkoutPage.continueCheckout();

    await expect(
      page.locator('[data-test=\"error\"]')
    ).toContainText('Postal Code is required');

  });

});