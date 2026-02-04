import{expect, test} from '@playwright/test'


test.beforeEach(async({page}) => {
  
  await page.goto('https://demoqa.com/login', { waitUntil: 'load' });
  const allowAllButton = page.locator('#AcceptReload');

  if (await allowAllButton.isVisible().catch(() => false)) {
  await allowAllButton.click();
  }

})

test('login to book store', async({page}) => {

  const usernameInput = page.locator('#userName')

  await usernameInput.scrollIntoViewIfNeeded()
  await expect(usernameInput).toBeVisible()
  await usernameInput.fill('cerentest')
  await page.locator('#password').fill('Welcome1!')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.waitForLoadState('networkidle')
  await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible()
})