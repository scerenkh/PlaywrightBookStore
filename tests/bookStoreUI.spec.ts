import { test, expect } from '@playwright/test';
import { createUser, TestUser } from './utils/users';

test.describe('Bookstore UI', () => {
  let user: TestUser;

  test.beforeEach(async ({ page, request }) => {
    // create a new user before each test
    user = await createUser(request);

    await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });

    const allowAllButton = page.locator('#acceptReload');
    if (await allowAllButton.isVisible().catch(() => false)) {
      await allowAllButton.click();
    }
  });

  test('login to book store with API user', async ({ page }) => {

  // Set to Mobile size
  //await page.setViewportSize({ width: 430, height: 932 });
  
  //const usernameInput = page.locator('#userName')

    await page.locator('.category-cards a').nth(5).click()
    await page.getByRole('button', { name:'Login'}).click()
    await page.locator('#userName').fill(user.userName)
    await page.locator('#password').fill(user.password)
    await page.getByRole('button', { name:'Login'}).click()
  });
});