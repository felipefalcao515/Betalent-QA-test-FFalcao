class InventoryPage {

  constructor(page) {

    this.page = page;

    this.productSort = page.locator('.product_sort_container');
    this.cartButton = page.locator('.shopping_cart_link');
    this.burgerMenu = page.locator('.bm-burger-button');
    this.logoutLink = page.getByText('Logout');
  }

  async sortProducts(option) {
    await this.productSort.selectOption(option);
  }

  async addProduct(productName) {

    await this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button')
      .click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  async logout() {

    await this.burgerMenu.click();

    await this.logoutLink.click();
  }

}

module.exports = { InventoryPage };