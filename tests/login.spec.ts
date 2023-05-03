import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/realms/BMFS/account/#/security/signingin');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', {level: 1})).toHaveText('Sign in');
});

test('username and password', async ({ page }) => {
    await page.goto('/realms/BMFS/account/#/security/signingin');

  // Click the get started link.
  await expect(page.getByLabel('username or email')).toBeVisible()
  await expect(page.getByLabel('password')).toBeVisible()
});

test('username and password invalid', async ({ page }) => {
    await page.goto('/realms/BMFS/account/#/security/signingin');

    await page.getByRole('button', {name: 'Sign in'}).click()
    await expect(page.getByRole('alert')).toContainText('There is a problem')
});

