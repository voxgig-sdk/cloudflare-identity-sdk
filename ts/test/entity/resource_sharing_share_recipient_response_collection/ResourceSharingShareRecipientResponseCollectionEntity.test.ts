

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


describe('ResourceSharingShareRecipientResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.ResourceSharingShareRecipientResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'resource_sharing_share_recipient_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"resource_sharing_share_recipient_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/shares/{share_id}/recipients","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"share_id","or":"share_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":true,"k":"query","n":"include_resource","or":"include_resource","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":2,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/shares/{share_id}/recipients","q":{"exist":["account_id","include_resource","page","per_page","share_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"shares"},{"var":"share_id"},{"lit":"recipients"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"resource_sharing_share_recipient_response_collection","name__orig":"resource_sharing_share_recipient_response_collection","Name":"ResourceSharingShareRecipientResponseCollection","name_":"resource_sharing_share_recipient_response_collection","name-":"resource-sharing-share-recipient-response-collection","NAME":"RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_COLLECTION","index$":47}, {"active":true,"entity":"resource_sharing_share_recipient_response_collection","key$":"BasicResourceSharingShareRecipientResponseCollectionFlow","kind":"basic","name":"BasicResourceSharingShareRecipientResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01","share_id":"share01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"resource_sharing_share_recipient_response_collection_ref01"}}],"index$":0}]}, 'ResourceSharingShareRecipientResponseCollection', {"GET /accounts/{account_id}/shares/{share_id}/recipients":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"},"index$":0},{"name":"share_id","in":"path","required":true,"schema":{"description":"Share identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_id"},"index$":1},{"description":"Include resources in the response.","in":"query","name":"include_resources","schema":{"type":"boolean","example":true},"x-ref":"#/components/parameters/resource-sharing_include_resources","index$":2},{"description":"Page number. Defaults to `1` when `per_page` is supplied without\n`page`. May be omitted entirely along with `per_page` to receive a\nnon-paginated response.","in":"query","name":"page","schema":{"type":"integer","example":2,"default":1,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_page","index$":3},{"description":"Number of objects to return per page. Defaults to `20` when `page`\nis supplied without `per_page`. May be omitted entirely along with\n`page` to receive a non-paginated response.","in":"query","name":"per_page","schema":{"type":"integer","example":20,"default":20,"maximum":100,"minimum":1,"multipleOf":1},"x-ref":"#/components/parameters/resource-sharing_per_page","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let resource_sharing_share_recipient_response_collection_ref01_data = Object.values(setup.data.existing.resource_sharing_share_recipient_response_collection)[0] as any

    // LIST
    const resource_sharing_share_recipient_response_collection_ref01_ent = client.ResourceSharingShareRecipientResponseCollection()
    const resource_sharing_share_recipient_response_collection_ref01_match: any = {}
    resource_sharing_share_recipient_response_collection_ref01_match['account_id'] = setup.idmap['account01']
    resource_sharing_share_recipient_response_collection_ref01_match['share_id'] = setup.idmap['share01']

    const resource_sharing_share_recipient_response_collection_ref01_list = (await resource_sharing_share_recipient_response_collection_ref01_ent.list(resource_sharing_share_recipient_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/resource_sharing_share_recipient_response_collection/ResourceSharingShareRecipientResponseCollectionTestData.json')

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
    ['resource_sharing_share_recipient_response_collection01','resource_sharing_share_recipient_response_collection02','resource_sharing_share_recipient_response_collection03','account01','account02','account03','share01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_COLLECTION_ENTID']
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
  
