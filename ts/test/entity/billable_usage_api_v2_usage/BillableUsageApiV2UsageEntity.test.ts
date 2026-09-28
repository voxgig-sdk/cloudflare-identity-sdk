

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


describe('BillableUsageApiV2UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.BillableUsageApiV2Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billable_usage_api_v2_usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"sh":"Contains error details if the request failed.","t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"Contains informational notices about the response.","t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"Contains the array of cost and usage records.","t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":4},"key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3}},"name":"billable_usage_api_v2_usage","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations/{organization_id}/billable/usage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"2025-05-01","k":"query","n":"from","or":"from","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2025-05-31","k":"query","n":"to","or":"to","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/organizations/{organization_id}/billable/usage","q":{"exist":["from","organization_id","to"]},"r":{},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"billable"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"billable_usage_api_v2_usage","name__orig":"billable_usage_api_v2_usage","Name":"BillableUsageApiV2Usage","name_":"billable_usage_api_v2_usage","name-":"billable-usage-api-v2-usage","NAME":"BILLABLE_USAGE_API_V2_USAGE","index$":8}, {"active":true,"entity":"billable_usage_api_v2_usage","key$":"BasicBillableUsageApiV2UsageFlow","kind":"basic","name":"BasicBillableUsageApiV2UsageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"billable_usage_api_v2_usage_ref01"}}],"index$":0}]}, 'BillableUsageApiV2Usage', {"GET /organizations/{organization_id}/billable/usage":{"protocol":"http","parameters":[{"description":"Identifies the Cloudflare organization.","in":"path","name":"organization_id","required":true,"schema":{"description":"Represents a Cloudflare resource identifier tag.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"pattern":"^[0-9a-f]{32}$","x-ref":"#/components/schemas/billable-usage-api_identifier"},"x-ref":"#/components/parameters/billable-usage-api_organization_id","index$":0},{"description":"Start date for the usage query (ISO 8601). Required if `to` is set. When omitted along with `to`, defaults to the start of the current month. Filters by charge period (when consumption happened), not billing period. The maximum date range is 31 days.","in":"query","name":"from","schema":{"type":"string","format":"date","example":"2025-05-01"},"x-ref":"#/components/parameters/billable-usage-api_v2_from","index$":1},{"description":"End date for the usage query (ISO 8601). Required if `from` is set. When omitted along with `from`, defaults to today. Filters by charge period (when consumption happened), not billing period. The maximum date range is 31 days.","in":"query","name":"to","schema":{"type":"string","format":"date","example":"2025-05-31"},"x-ref":"#/components/parameters/billable-usage-api_v2_to","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let billable_usage_api_v2_usage_ref01_data = Object.values(setup.data.existing.billable_usage_api_v2_usage)[0] as any

    // LIST
    const billable_usage_api_v2_usage_ref01_ent = client.BillableUsageApiV2Usage()
    const billable_usage_api_v2_usage_ref01_match: any = {}
    billable_usage_api_v2_usage_ref01_match['organization_id'] = setup.idmap['organization01']

    const billable_usage_api_v2_usage_ref01_list = (await billable_usage_api_v2_usage_ref01_ent.list(billable_usage_api_v2_usage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billable_usage_api_v2_usage/BillableUsageApiV2UsageTestData.json')

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
    ['billable_usage_api_v2_usage01','billable_usage_api_v2_usage02','billable_usage_api_v2_usage03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_BILLABLE_USAGE_API_V2_USAGE_ENTID']
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
  
