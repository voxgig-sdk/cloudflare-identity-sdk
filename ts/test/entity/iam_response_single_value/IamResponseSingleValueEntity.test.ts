

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


describe('IamResponseSingleValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamResponseSingleValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_response_single_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"ro":true,"sh":"The token value.","t":"`$STRING`","key$":"result","index$":0}},"name":"iam_response_single_value","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/tokens/{token_id}/value","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"token_id","or":"token_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/tokens/{token_id}/value","q":{"exist":["account_id","token_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"tokens"},{"var":"token_id"},{"lit":"value"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /user/tokens/{token_id}/value","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"token_id","or":"token_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/user/tokens/{token_id}/value","q":{"exist":["token_id"]},"r":{},"s":[{"lit":"user"},{"lit":"tokens"},{"var":"token_id"},{"lit":"value"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account","$.main.kit.entity.token"]]},"key$":"iam_response_single_value","name__orig":"iam_response_single_value","Name":"IamResponseSingleValue","name_":"iam_response_single_value","name-":"iam-response-single-value","NAME":"IAM_RESPONSE_SINGLE_VALUE","index$":22}, {"active":true,"entity":"iam_response_single_value","key$":"BasicIamResponseSingleValueFlow","kind":"basic","name":"BasicIamResponseSingleValueFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_response_single_value_ref01","srcdatavar":"iam_response_single_value_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_response_single_value_ref01"}}],"v":[],"index$":0}]}, 'IamResponseSingleValue', {"PUT /accounts/{account_id}/tokens/{token_id}/value":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":1}]},"PUT /user/tokens/{token_id}/value":{"protocol":"http","parameters":[{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_response_single_value_ref01_data = Object.values(setup.data.existing.iam_response_single_value)[0] as any

    // UPDATE
    const iam_response_single_value_ref01_ent = client.IamResponseSingleValue()
    const iam_response_single_value_ref01_data_up0: any = {}

    const iam_response_single_value_ref01_resdata_up0 = (await iam_response_single_value_ref01_ent.update(iam_response_single_value_ref01_data_up0)).data()
    assert(null != iam_response_single_value_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_response_single_value/IamResponseSingleValueTestData.json')

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
    ['iam_response_single_value01','iam_response_single_value02','iam_response_single_value03','account01','account02','account03','token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_RESPONSE_SINGLE_VALUE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_RESPONSE_SINGLE_VALUE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_RESPONSE_SINGLE_VALUE_ENTID']
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
  
