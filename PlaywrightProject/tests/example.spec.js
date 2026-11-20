// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Valid Login @DXP-123', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await loginPage.verifyLoginSuccess();
});
