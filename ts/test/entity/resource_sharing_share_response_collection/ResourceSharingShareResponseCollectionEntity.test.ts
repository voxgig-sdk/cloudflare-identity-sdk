

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


describe('ResourceSharingShareResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.ResourceSharingShareResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'resource_sharing_share_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"resource_sharing_share_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/shares","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"asc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":true,"k":"query","n":"include_recipient_count","or":"include_recipient_count","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":true,"k":"query","n":"include_resource","or":"include_resource","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"kind","or":"kind","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"created","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":2,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"resource_type","or":"resource_type","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"tag","or":"tag","r":false,"t":"`$ARRAY`","index$":9},{"a":true,"k":"query","n":"target_type","or":"target_type","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/accounts/{account_id}/shares","q":{"exist":["account_id","direction","include_recipient_count","include_resource","kind","order","page","per_page","resource_type","status","tag","target_type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"shares"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /organizations/{organization_id}/shares","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"asc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"kind","or":"kind","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"created","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":2,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"resource_type","or":"resource_type","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"target_type","or":"target_type","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/organizations/{organization_id}/shares","q":{"exist":["direction","kind","order","organization_id","page","per_page","resource_type","status","target_type"]},"r":{},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"shares"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.organization"]]},"key$":"resource_sharing_share_response_collection","name__orig":"resource_sharing_share_response_collection","Name":"ResourceSharingShareResponseCollection","name_":"resource_sharing_share_response_collection","name-":"resource-sharing-share-response-collection","NAME":"RESOURCE_SHARING_SHARE_RESPONSE_COLLECTION","index$":49}, {"active":true,"entity":"resource_sharing_share_response_collection","key$":"BasicResourceSharingShareResponseCollectionFlow","kind":"basic","name":"BasicResourceSharingShareResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"resource_sharing_share_response_collection_ref01"}}],"index$":0}]}, 'ResourceSharingShareResponseCollection', {"GET /accounts/{account_id}/shares":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"},"index$":0},{"description":"Filter shares by status.","in":"query","name":"status","schema":{"type":"string","enum":["active","deleting","deleted"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_status"},"x-ref":"#/components/parameters/resource-sharing_status","index$":1},{"description":"Filter shares by kind.","in":"query","name":"kind","schema":{"type":"string","enum":["sent","received"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_kind"},"x-ref":"#/components/parameters/resource-sharing_kind","index$":2},{"description":"Filter shares by target_type.","in":"query","name":"target_type","schema":{"type":"string","enum":["account","organization"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_target_type"},"x-ref":"#/components/parameters/resource-sharing_target_type","index$":3},{"description":"Filter share resources by resource_types.","in":"query","name":"resource_types","schema":{"type":"array","items":{"description":"Resource Type.","type":"string","enum":["custom-ruleset","gateway-policy","gateway-destination-ip","gateway-block-page-settings","gateway-extended-email-matching","idp-federation-grant","trust-grant"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_resource_type"}},"x-ref":"#/components/parameters/resource-sharing_resource_types","index$":4},{"description":"Order shares by values in the given field.","in":"query","name":"order","schema":{"type":"string","default":"created","enum":["name","created"]},"x-ref":"#/components/parameters/resource-sharing_order","index$":5},{"description":"Direction to sort objects.","in":"query","name":"direction","schema":{"type":"string","default":"asc","enum":["asc","desc"]},"x-ref":"#/components/parameters/resource-sharing_direction","index$":6},{"description":"Page number. Defaults to `1` when `per_page` is supplied without\n`page`. May be omitted entirely along with `per_page` to receive a\nnon-paginated response.","in":"query","name":"page","schema":{"type":"integer","example":2,"default":1,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_page","index$":7},{"description":"Number of objects to return per page. Defaults to `20` when `page`\nis supplied without `per_page`. May be omitted entirely along with\n`page` to receive a non-paginated response.","in":"query","name":"per_page","schema":{"type":"integer","example":20,"default":20,"maximum":100,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_per_page","index$":8},{"description":"Include resources in the response.","in":"query","name":"include_resources","schema":{"type":"boolean","example":true},"x-ref":"#/components/parameters/resource-sharing_include_resources","index$":9},{"description":"Include recipient counts in the response.","in":"query","name":"include_recipient_counts","schema":{"type":"boolean","example":true},"x-ref":"#/components/parameters/resource-sharing_include_recipient_counts","index$":10},{"description":"Filter shares by tag. Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be repeated; multiple `tag` parameters are ANDed together. Maximum 20 `tag` parameters per request.","explode":true,"in":"query","name":"tag","schema":{"type":"array","items":{"example":"env=production","maxLength":1281,"type":"string"},"maxItems":20},"style":"form","x-ref":"#/components/parameters/resource-sharing_tag","index$":11}]},"GET /organizations/{organization_id}/shares":{"protocol":"http","parameters":[{"name":"organization_id","in":"path","required":true,"schema":{"description":"Organization identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_organization_id"},"index$":0},{"description":"Filter shares by status.","in":"query","name":"status","schema":{"type":"string","enum":["active","deleting","deleted"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_status"},"x-ref":"#/components/parameters/resource-sharing_status","index$":1},{"description":"Filter shares by kind.","in":"query","name":"kind","schema":{"type":"string","enum":["sent","received"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_kind"},"x-ref":"#/components/parameters/resource-sharing_kind","index$":2},{"description":"Filter shares by target_type.","in":"query","name":"target_type","schema":{"type":"string","enum":["account","organization"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_target_type"},"x-ref":"#/components/parameters/resource-sharing_target_type","index$":3},{"description":"Filter share resources by resource_types.","in":"query","name":"resource_types","schema":{"type":"array","items":{"description":"Resource Type.","type":"string","enum":["custom-ruleset","gateway-policy","gateway-destination-ip","gateway-block-page-settings","gateway-extended-email-matching","idp-federation-grant","trust-grant"],"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_resource_type"}},"x-ref":"#/components/parameters/resource-sharing_resource_types","index$":4},{"description":"Order shares by values in the given field.","in":"query","name":"order","schema":{"type":"string","default":"created","enum":["name","created"]},"x-ref":"#/components/parameters/resource-sharing_order","index$":5},{"description":"Direction to sort objects.","in":"query","name":"direction","schema":{"type":"string","default":"asc","enum":["asc","desc"]},"x-ref":"#/components/parameters/resource-sharing_direction","index$":6},{"description":"Page number. Defaults to `1` when `per_page` is supplied without\n`page`. May be omitted entirely along with `per_page` to receive a\nnon-paginated response.","in":"query","name":"page","schema":{"type":"integer","example":2,"default":1,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_page","index$":7},{"description":"Number of objects to return per page. Defaults to `20` when `page`\nis supplied without `per_page`. May be omitted entirely along with\n`page` to receive a non-paginated response.","in":"query","name":"per_page","schema":{"type":"integer","example":20,"default":20,"maximum":100,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_per_page","index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let resource_sharing_share_response_collection_ref01_data = Object.values(setup.data.existing.resource_sharing_share_response_collection)[0] as any

    // LIST
    const resource_sharing_share_response_collection_ref01_ent = client.ResourceSharingShareResponseCollection()
    const resource_sharing_share_response_collection_ref01_match: any = {}
    resource_sharing_share_response_collection_ref01_match['organization_id'] = setup.idmap['organization01']

    const resource_sharing_share_response_collection_ref01_list = (await resource_sharing_share_response_collection_ref01_ent.list(resource_sharing_share_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/resource_sharing_share_response_collection/ResourceSharingShareResponseCollectionTestData.json')

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
    ['resource_sharing_share_response_collection01','resource_sharing_share_response_collection02','resource_sharing_share_response_collection03','account01','account02','account03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_COLLECTION_ENTID']
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
  
