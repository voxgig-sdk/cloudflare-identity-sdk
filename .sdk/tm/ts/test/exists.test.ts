
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareIdentitySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareIdentitySDK.test()
    equal(testsdk instanceof CloudflareIdentitySDK, true,
      'CloudflareIdentitySDK.test() must return a client synchronously')
  })

})
