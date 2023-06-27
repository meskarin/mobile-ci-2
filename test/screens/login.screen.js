class LoginScreen {
    get #storeAddress() { return $('android.widget.EditText') }
    get #continueToLogin() { return $('id:bottom_button') }
    get #continueWithStoreCredentials () { return $('id=com.woocommerce.android:id/login_site_creds') }
    get #username() { return $('android=new UiSelector().text("Username")') }
    get #password() { return $('android=new UiSelector().text("Password")') }
    get #twoFactorPasswordBtn() { return $('id:login_enter_password') }

    async setStoreAddress(url) {
        this.#storeAddress.setValue(url)
    }
    async waitbeEnabled(){
        await this.#continueToLogin.waitForEnabled()
    }
    async continueTologin() {
        await this.#continueToLogin.click()
    }

    async continueWithStoreCredentials() {
        await this.#continueWithStoreCredentials.click()
    }

    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continueToLogin.click()
    }

    async goToTwoFactorAuth() {
        await this.#twoFactorPasswordBtn.click()
    }

    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continueToLogin.click()
    }


}

module.exports = new LoginScreen()