import { expect, APIRequestContext } from '@playwright/test'


export type TestUser = {
  userName: string;
  password: string;
  userID: string;
};

export async function createUser(request: APIRequestContext): Promise<TestUser> {
  const userName = `user_${Math.random().toString(36).slice(2, 8)}`
  // ToolsQA password rules: Upper + lower + number + special + length
  const password = `Welcome!${Math.floor(Math.random() * 10000)}Aa`

  const res = await request.post('https://bookstore.toolsqa.com/Account/v1/User', {
    data: { userName, password },
  });

  expect(res.status(), await res.text()).toBe(201)

  const body = await res.json()
  console.log(userName)
  return { userName, password, userID: body.userID }
}