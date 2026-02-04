import  {test as setup} from '@playwright/test'
import user from '../.auth/user.json'
import fs, { access } from 'fs'

const authFile = '.auth/user.json'

setup('authentication', async ({request}) => {

    const response = await request.post('https://bookstore.toolsqa.com/Account/v1/User', {
        data: { "userName": "cerentest", "password": "Welcome1!"}
      })
      const responseBody = await response.json()
      const accessToken = responseBody.token

    user.origins[0].localStorage[0].value = accessToken
    fs.writeFileSync(authFile, JSON.stringify(user))
    process.env['ACCESS_TOKEN'] = accessToken
    
})