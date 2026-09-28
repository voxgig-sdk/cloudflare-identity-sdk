

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


describe('ResourceSharingShareRecipientResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.ResourceSharingShareRecipientResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'resource_sharing_share_recipient_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_id":{"a":true,"de":true,"h":"Account Id","n":"account_id","r":false,"sh":"Deprecated alias for `recipient_account_id`.","t":"`$STRING`","key$":"account_id","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"organization_id":{"a":true,"h":"Organization Id","n":"organization_id","r":false,"sh":"Organization identifier.","t":"`$STRING`","key$":"organization_id","index$":2},"recipient_account_id":{"a":true,"h":"Recipient Account Id","n":"recipient_account_id","r":false,"sh":"The account that will receive the share.","t":"`$STRING`","key$":"recipient_account_id","index$":3},"result":{"a":true,"h":"Result","n":"result","op":{"load":{"req":true,"type":"`$ANY`"}},"r":false,"sh":"A recipient of a share.","t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"resource_sharing_share_recipient_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/shares/{share_id}/recipients","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"share_id","or":"share_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/accounts/{account_id}/shares/{share_id}/recipients","q":{"exist":["account_id","share_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"shares"},{"var":"share_id"},{"lit":"recipients"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"recipient_id","or":"recipient_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"share_id","or":"share_id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"ex":true,"k":"query","n":"include_resource","or":"include_resource","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}","q":{"exist":["account_id","include_resource","recipient_id","share_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"shares"},{"var":"share_id"},{"lit":"recipients"},{"var":"recipient_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"recipient_id","or":"recipient_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"3fd85f74b32742f1bff64a85009dda07","k":"param","n":"share_id","or":"share_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}","q":{"exist":["account_id","recipient_id","share_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"shares"},{"var":"share_id"},{"lit":"recipients"},{"var":"recipient_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.account"],["$.main.kit.entity.account"]]},"key$":"resource_sharing_share_recipient_response_single","name__orig":"resource_sharing_share_recipient_response_single","Name":"ResourceSharingShareRecipientResponseSingle","name_":"resource_sharing_share_recipient_response_single","name-":"resource-sharing-share-recipient-response-single","NAME":"RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_SINGLE","index$":48}, {"active":true,"entity":"resource_sharing_share_recipient_response_single","key$":"BasicResourceSharingShareRecipientResponseSingleFlow","kind":"basic","name":"BasicResourceSharingShareRecipientResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"resource_sharing_share_recipient_response_single_ref01"},"m":{"account_id":"account01","share_id":"share01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"resource_sharing_share_recipient_response_single_ref01","srcdatavar":"resource_sharing_share_recipient_response_single_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"resource_sharing_share_recipient_response_single01","share_id":"share01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-resource_sharing_share_recipient_response_single_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"resource_sharing_share_recipient_response_single_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"resource_sharing_share_recipient_response_single01","share_id":"share01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'ResourceSharingShareRecipientResponseSingle', {"POST /accounts/{account_id}/shares/{share_id}/recipients":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Optionally specify `recipient_account_id` to target a specific account, or `organization_id` to target the caller's whole organization. If neither is provided, the caller's organization is used.\nThe legacy field `account_id` is accepted as a synonym for `recipient_account_id` during the deprecation period (see `x-sunset` on that field).\n","type":"object","properties":{"account_id":{"description":"Deprecated alias for `recipient_account_id`. Use `recipient_account_id` instead.\nThe body field collided with the URL path parameter of the same name, which prevented SDK generators from distinguishing the source account (in the URL) from the recipient account (in the body). Both names will continue to be accepted until 2027-05-26 (see `x-sunset`).\n","allOf":[{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"}],"deprecated":true,"x-stainless-deprecation-message":"This field has been renamed to `recipient_account_id`. Both names are accepted during the deprecation period.","x-stainless-skip":["terraform"],"key$":"account_id"},"organization_id":{"description":"Organization identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_organization_id","key$":"organization_id"},"recipient_account_id":{"description":"The account that will receive the share.","allOf":[{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"}],"key$":"recipient_account_id"}},"x-ref":"#/components/schemas/resource-sharing_create_share_recipient_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"},"index$":0},{"name":"share_id","in":"path","required":true,"schema":{"description":"Share identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_id"},"index$":1}]},"GET /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"},"index$":0},{"name":"share_id","in":"path","required":true,"schema":{"description":"Share identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_id"},"index$":1},{"name":"recipient_id","in":"path","required":true,"schema":{"description":"Share Recipient identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_recipient_id"},"index$":2},{"description":"Include resources in the response.","in":"query","name":"include_resources","schema":{"type":"boolean","example":true},"x-ref":"#/components/parameters/resource-sharing_include_resources","index$":3}]},"DELETE /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_account_id"},"index$":0},{"name":"share_id","in":"path","required":true,"schema":{"description":"Share identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_share_id"},"index$":1},{"name":"recipient_id","in":"path","required":true,"schema":{"description":"Share Recipient identifier tag.","type":"string","example":"3fd85f74b32742f1bff64a85009dda07","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/resource-sharing_recipient_id"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const resource_sharing_share_recipient_response_single_ref01_ent = client.ResourceSharingShareRecipientResponseSingle()
    let resource_sharing_share_recipient_response_single_ref01_data = setup.data.new.resource_sharing_share_recipient_response_single['resource_sharing_share_recipient_response_single_ref01']
    resource_sharing_share_recipient_response_single_ref01_data['account_id'] = setup.idmap['account01']
    resource_sharing_share_recipient_response_single_ref01_data['share_id'] = setup.idmap['share01']

    resource_sharing_share_recipient_response_single_ref01_data = (await resource_sharing_share_recipient_response_single_ref01_ent.create(resource_sharing_share_recipient_response_single_ref01_data)).data()
    assert(null != resource_sharing_share_recipient_response_single_ref01_data)




  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/resource_sharing_share_recipient_response_single/ResourceSharingShareRecipientResponseSingleTestData.json')

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
    ['resource_sharing_share_recipient_response_single01','resource_sharing_share_recipient_response_single02','resource_sharing_share_recipient_response_single03','account01','account02','account03','share01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_SINGLE_ENTID']
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
  
