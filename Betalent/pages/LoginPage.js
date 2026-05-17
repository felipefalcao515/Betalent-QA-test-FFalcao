class LoginPage {

  constructor(page) {

    this.page = page;

    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {

    //Navegação.
    await this.page.goto('/');

  }

  async login(username, password) {

    //Preenchimento dos campos.
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    //Ação Click.
    await this.loginButton.click();

  }

}

module.exports = { LoginPage };