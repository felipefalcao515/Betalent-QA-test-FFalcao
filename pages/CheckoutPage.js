class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.firstName = page.getByTestId('firstName');
    this.lastName = page.getByTestId('lastName');
    this.postalCode = page.getByTestId('postalCode');

    this.continueButton = page.getByText('CONTINUE');

    this.finishButton = page.getByText('FINISH');
  }

  async fillCheckoutData(first, last, zip) {

    //Preenchimento campos por variavel "First", "Last Name" e "Postal Code".
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

}

module.exports = { CheckoutPage };