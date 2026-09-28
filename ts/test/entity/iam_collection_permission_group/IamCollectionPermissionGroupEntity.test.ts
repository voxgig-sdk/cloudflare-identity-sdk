

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareIdentitySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('IamCollectionPermissionGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamCollectionPermissionGroup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_collection_permission_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"A set of permission groups that are specified to the policy.","t":"`$ARRAY`","key$":"result","index$":0}},"name":"iam_collection_permission_group","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/iam/permission_groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"6d7f2f5f5b1d4a0e9081fdc98d432fd1","k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"labelOfThePermissionGroup","k":"query","n":"label","or":"label","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"NameOfThePermissionGroup","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":4}]},"k":"http","m":"GET","o":"/accounts/{account_id}/iam/permission_groups","q":{"exist":["account_id","id","label","name","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"iam"},{"lit":"permission_groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"iam_collection_permission_group","name__orig":"iam_collection_permission_group","Name":"IamCollectionPermissionGroup","name_":"iam_collection_permission_group","name-":"iam-collection-permission-group","NAME":"IAM_COLLECTION_PERMISSION_GROUP","index$":17}, {"active":true,"entity":"iam_collection_permission_group","key$":"BasicIamCollectionPermissionGroupFlow","kind":"basic","name":"BasicIamCollectionPermissionGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"iam_collection_permission_group_ref01"}}],"index$":0}]}, 'IamCollectionPermissionGroup', {"GET /accounts/{account_id}/iam/permission_groups":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"id","in":"query","schema":{"description":"ID of the permission group to be fetched.","type":"string","example":"6d7f2f5f5b1d4a0e9081fdc98d432fd1","maxLength":32,"minLength":32},"index$":1},{"name":"name","in":"query","schema":{"description":"Name of the permission group to be fetched.","type":"string","example":"NameOfThePermissionGroup"},"index$":2},{"name":"label","in":"query","schema":{"description":"Label of the permission group to be fetched.","type":"string","example":"labelOfThePermissionGroup"},"index$":3},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":4},{"name":"per_page","in":"query","schema":{"description":"Maximum number of results per page.","type":"number","default":20,"maximum":50,"minimum":5},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_collection_permission_group_ref01_data = Object.values(setup.data.existing.iam_collection_permission_group)[0] as any

    // LIST
    const iam_collection_permission_group_ref01_ent = client.IamCollectionPermissionGroup()
    const iam_collection_permission_group_ref01_match: any = {}
    iam_collection_permission_group_ref01_match['account_id'] = setup.idmap['account01']

    const iam_collection_permission_group_ref01_list = (await iam_collection_permission_group_ref01_ent.list(iam_collection_permission_group_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_collection_permission_group/IamCollectionPermissionGroupTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareIdentitySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['iam_collection_permission_group01','iam_collection_permission_group02','iam_collection_permission_group03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_PERMISSION_GROUP_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_PERMISSION_GROUP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_PERMISSION_GROUP_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareIdentitySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_IDENTITY_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
