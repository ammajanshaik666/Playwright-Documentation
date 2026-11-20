// tests/login.spec.js

import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//test.describe('Login Tests', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await loginPage.verifyLoginSuccess();
    });

//});
