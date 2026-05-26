class CartPage {

  constructor(page) {

    this.page = page;

    this.checkoutButton = page.getByText('CHECKOUT');
  }

  async removeProduct(productName) {

    //Remoção de card pela tela carrinho.
    await this.page
      .locator('.cart_item')
      .filter({ hasText: productName })
      .getByRole('button')
      .click();
  }

  async proceedCheckout() {
    await this.checkoutButton.click();
  }

}

module.exports = { CartPage };