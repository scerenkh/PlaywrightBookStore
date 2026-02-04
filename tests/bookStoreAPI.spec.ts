import { test, expect } from '@playwright/test';
import { runInContext } from 'vm';
import { request } from 'http';
import { notDeepEqual } from 'assert';


test('create user', async ({request}) => {  
  const randomUserName = `user_${Math.random().toString(36).substring(2, 8)}`
  const randomPassword = 'Welcome!' + Math.floor(Math.random() * 1000)

  const createUserResponse = await request.post('https://bookstore.toolsqa.com/Account/v1/User', {
    data: {
      "userName": randomUserName , "password": randomPassword}
  }); 
  
  const responseBody = await createUserResponse.json()
  const userID = responseBody.userID

  expect(createUserResponse.status()).toEqual(201)


});

test('get books', async ({request}) => {
  const booksResponse = await request.get('https://bookstore.toolsqa.com/Bookstore/v1/Books'); 
  expect(booksResponse.status()).toEqual(200)

});

test('filter by Author', async ({ page , request}) => {
  const booksResponse = await request.get('https://bookstore.toolsqa.com/Bookstore/v1/Books'); 
  expect(booksResponse.status()).toEqual(200)

});

