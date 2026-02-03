export class LoginPage {

  constructor(page) {
    this.page = page;
    this.loginlink = '#login2';
    this.username = '#loginusername';
    this.password = '#loginpassword';
    this.loginbutton = '//button[@onclick="logIn()"]';
  }

  async gotoLoginPage() {
    await this.page.goto('https://demoblaze.com/');
  }

  async login(username, password) {
    await this.page.locator(this.loginlink).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password); // ✅ fixed
    await this.page.locator(this.loginbutton).click();
  }
}
