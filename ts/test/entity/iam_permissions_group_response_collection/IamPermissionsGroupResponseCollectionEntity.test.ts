

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


describe('IamPermissionsGroupResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamPermissionsGroupResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_permissions_group_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"iam_permissions_group_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/tokens/permission_groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"Account%20Settings%20Write","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"com.cloudflare.api.account.zone","k":"query","n":"scope","or":"scope","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/tokens/permission_groups","q":{"exist":["account_id","name","scope"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"tokens"},{"lit":"permission_groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /user/tokens/permission_groups","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Account%20Settings%20Write","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"com.cloudflare.api.account.zone","k":"query","n":"scope","or":"scope","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/user/tokens/permission_groups","q":{"exist":["name","scope"]},"r":{},"s":[{"lit":"user"},{"lit":"tokens"},{"lit":"permission_groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"iam_permissions_group_response_collection","name__orig":"iam_permissions_group_response_collection","Name":"IamPermissionsGroupResponseCollection","name_":"iam_permissions_group_response_collection","name-":"iam-permissions-group-response-collection","NAME":"IAM_PERMISSIONS_GROUP_RESPONSE_COLLECTION","index$":21}, {"active":true,"entity":"iam_permissions_group_response_collection","key$":"BasicIamPermissionsGroupResponseCollectionFlow","kind":"basic","name":"BasicIamPermissionsGroupResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"iam_permissions_group_response_collection_ref01"}}],"index$":0}]}, 'IamPermissionsGroupResponseCollection', {"GET /accounts/{account_id}/tokens/permission_groups":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"name","in":"query","description":"Filter by the name of the permission group.\nThe value must be URL-encoded.","schema":{"type":"string","example":"Account%20Settings%20Write"},"index$":1},{"name":"scope","in":"query","description":"Filter by the scope of the permission group.\nThe value must be URL-encoded.","schema":{"type":"string","example":"com.cloudflare.api.account.zone"},"index$":2}]},"GET /user/tokens/permission_groups":{"protocol":"http","parameters":[{"name":"name","in":"query","description":"Filter by the name of the permission group.\nThe value must be URL-encoded.","schema":{"type":"string","example":"Account%20Settings%20Write"},"index$":0},{"name":"scope","in":"query","description":"Filter by the scope of the permission group.\nThe value must be URL-encoded.","schema":{"type":"string","example":"com.cloudflare.api.account.zone"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_permissions_group_response_collection_ref01_data = Object.values(setup.data.existing.iam_permissions_group_response_collection)[0] as any

    // LIST
    const iam_permissions_group_response_collection_ref01_ent = client.IamPermissionsGroupResponseCollection()
    const iam_permissions_group_response_collection_ref01_match: any = {}

    const iam_permissions_group_response_collection_ref01_list = (await iam_permissions_group_response_collection_ref01_ent.list(iam_permissions_group_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_permissions_group_response_collection/IamPermissionsGroupResponseCollectionTestData.json')

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
    ['iam_permissions_group_response_collection01','iam_permissions_group_response_collection02','iam_permissions_group_response_collection03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_PERMISSIONS_GROUP_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_PERMISSIONS_GROUP_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_PERMISSIONS_GROUP_RESPONSE_COLLECTION_ENTID']
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
  
