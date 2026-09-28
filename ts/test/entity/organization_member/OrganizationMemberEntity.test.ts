

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


describe('OrganizationMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.OrganizationMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"member":{"a":true,"h":"Member","n":"member","r":true,"t":"`$OBJECT`","key$":"member","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":4},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"t":"`$OBJECT`","key$":"result_info","index$":5},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":6}},"id":{"field":"id","name":"id"},"name":"organization_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /organizations/{organization_id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/organizations/{organization_id}/members","q":{"exist":["id"]},"r":{"param":{"organization_id":"id"}},"s":[{"lit":"organizations"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations/{organization_id}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_token","or":"page_token","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"user_email","or":"user_email","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"user_email_contain","or":"user_email_contain","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"user_email_ends_with","or":"user_email_ends_with","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"user_email_starts_with","or":"user_email_starts_with","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/organizations/{organization_id}/members","q":{"exist":["id","page_size","page_token","status","user_email","user_email_contain","user_email_ends_with","user_email_starts_with"]},"r":{"param":{"organization_id":"id"}},"s":[{"lit":"organizations"},{"var":"id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /organizations/{organization_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"id","or":"member_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/organizations/{organization_id}/members/{member_id}","q":{"exist":["id","organization_id"]},"r":{"param":{"member_id":"id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /organizations/{organization_id}/members/{member_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"id","or":"member_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/organizations/{organization_id}/members/{member_id}","q":{"exist":["id","organization_id"]},"r":{"param":{"member_id":"id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"organization_member","name__orig":"organization_member","Name":"OrganizationMember","name_":"organization_member","name-":"organization-member","NAME":"ORGANIZATION_MEMBER","index$":40}, {"active":true,"entity":"organization_member","key$":"BasicOrganizationMemberFlow","kind":"basic","name":"BasicOrganizationMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_member_ref01"},"m":{"organization_id":"organization01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_member_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"organization_member_ref01","srcdatavar":"organization_member_ref01_data","suffix":"_dt0"},"m":{"id":"organization_member01","organization_id":"organization01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_member_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"organization_member_ref01","suffix":"_rm0"},"m":{"id":"organization_member01","organization_id":"organization01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"organization_member_ref01"}}],"index$":4}]}, 'OrganizationMember', {"POST /organizations/{organization_id}/members":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"member":{"type":"object","properties":{"status":{"type":"string","enum":["active","canceled"],"x-auditable":true},"user":{"type":"object","properties":{"email":{}},"required":["email"]}},"required":["user"],"x-ref":"#/components/schemas/organizations-api_CreateSingleMember","key$":"member"}},"required":["member"],"x-ref":"#/components/schemas/organizations-api_CreateMemberRequest","index$":1}}}},"parameters":[{"name":"organization_id","in":"path","required":true,"schema":{"type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","title":"Organization ID","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_OrganizationID"},"index$":0}]},"GET /organizations/{organization_id}/members":{"protocol":"http","parameters":[{"name":"organization_id","in":"path","required":true,"schema":{"type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","title":"Organization ID","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_OrganizationID"},"index$":0},{"name":"status","in":"query","description":"Filter the list of memberships by membership status.","schema":{"type":"array","items":{"enum":["active","pending","rejected","canceled"],"type":"string"}},"index$":1},{"name":"user.email","in":"query","description":"Filter the list of memberships for a specific email.","schema":{"type":"string"},"explode":false,"index$":2},{"name":"user.email.contains","in":"query","description":"Filter the list of memberships for a specific email that contains a substring.","schema":{"type":"string"},"explode":false,"index$":3},{"name":"user.email.startsWith","in":"query","description":"Filter the list of memberships for a specific email that starts with a substring.","schema":{"type":"string"},"explode":false,"index$":4},{"name":"user.email.endsWith","in":"query","description":"Filter the list of memberships for a specific email that ends with a substring.","schema":{"type":"string"},"explode":false,"index$":5},{"description":"An opaque token returned from the last list response that when\nprovided will retrieve the next page.\n\nParameters used to filter the retrieved list must remain in subsequent\nrequests with a page token.","explode":false,"in":"query","name":"page_token","schema":{"type":"string"},"x-ref":"#/components/parameters/organizations-api_PageTokenParamsPageToken","index$":6},{"description":"The amount of items to return. Defaults to 10.","explode":false,"in":"query","name":"page_size","schema":{"type":"integer","maximum":1000,"minimum":0},"x-ref":"#/components/parameters/organizations-api_PageTokenParamsPageSize","index$":7}]},"GET /organizations/{organization_id}/members/{member_id}":{"protocol":"http","parameters":[{"name":"organization_id","in":"path","required":true,"schema":{"type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","title":"Organization ID","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_OrganizationID"},"index$":0},{"name":"member_id","in":"path","required":true,"schema":{"description":"Organization Member ID","type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_MemberID"},"index$":1}]},"DELETE /organizations/{organization_id}/members/{member_id}":{"protocol":"http","parameters":[{"name":"organization_id","in":"path","required":true,"schema":{"type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","title":"Organization ID","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_OrganizationID"},"index$":0},{"name":"member_id","in":"path","required":true,"schema":{"description":"Organization Member ID","type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_MemberID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_member_ref01_ent = client.OrganizationMember()
    let organization_member_ref01_data = setup.data.new.organization_member['organization_member_ref01']
    organization_member_ref01_data['organization_id'] = setup.idmap['organization01']

    organization_member_ref01_data = (await organization_member_ref01_ent.create(organization_member_ref01_data)).data()
    assert(null != organization_member_ref01_data.id)


    // LIST
    const organization_member_ref01_match: any = {}
    organization_member_ref01_match['organization_id'] = setup.idmap['organization01']

    const organization_member_ref01_list = (await organization_member_ref01_ent.list(organization_member_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(organization_member_ref01_list, { id: organization_member_ref01_data.id })))


    // LOAD
    const organization_member_ref01_match_dt0: any = {}
    organization_member_ref01_match_dt0.id = organization_member_ref01_data.id
    const organization_member_ref01_data_dt0 = (await organization_member_ref01_ent.load(organization_member_ref01_match_dt0)).data()
    assert(organization_member_ref01_data_dt0.id === organization_member_ref01_data.id)


    // REMOVE
    const organization_member_ref01_match_rm0: any = { id: organization_member_ref01_data.id }
    await organization_member_ref01_ent.remove(organization_member_ref01_match_rm0)
  

    // LIST
    const organization_member_ref01_match_rt0: any = {}
    organization_member_ref01_match_rt0['organization_id'] = setup.idmap['organization01']

    const organization_member_ref01_list_rt0 = (await organization_member_ref01_ent.list(organization_member_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(organization_member_ref01_list_rt0, { id: organization_member_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_member/OrganizationMemberTestData.json')

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
    ['organization_member01','organization_member02','organization_member03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_ORGANIZATION_MEMBER_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_ORGANIZATION_MEMBER_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_ORGANIZATION_MEMBER_ENTID']
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
  
