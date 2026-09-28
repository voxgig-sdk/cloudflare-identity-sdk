

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


describe('TenantEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.Tenant()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tenant.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"t":"`$BOOLEAN`","key$":"success","index$":4}},"id":{"field":"id","name":"id"},"name":"tenant","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /tenants/{tenant_id}/accounts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tenant_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_id}/accounts","q":{"$action":"account","exist":["id"]},"r":{"param":{"tenant_id":"id"}},"s":[{"lit":"tenants"},{"var":"id"},{"lit":"accounts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /tenants/{tenant_id}/account_types","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tenant_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_id}/account_types","q":{"$action":"account_type","exist":["id"]},"r":{"param":{"tenant_id":"id"}},"s":[{"lit":"tenants"},{"var":"id"},{"lit":"account_types"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /tenants/{tenant_id}/entitlements","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tenant_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_id}/entitlements","q":{"$action":"entitlement","exist":["id"]},"r":{"param":{"tenant_id":"id"}},"s":[{"lit":"tenants"},{"var":"id"},{"lit":"entitlements"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /tenants/{tenant_id}/memberships","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tenant_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_id}/memberships","q":{"$action":"membership","exist":["id"]},"r":{"param":{"tenant_id":"id"}},"s":[{"lit":"tenants"},{"var":"id"},{"lit":"memberships"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /tenants/{tenant_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tenant_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_id}","q":{"exist":["id"]},"r":{"param":{"tenant_id":"id"}},"s":[{"lit":"tenants"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tenant","name__orig":"tenant","Name":"Tenant","name_":"tenant","name-":"tenant","NAME":"TENANT","index$":55}, {"active":true,"entity":"tenant","key$":"BasicTenantFlow","kind":"basic","name":"BasicTenantFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"tenant_id":"tenant01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tenant_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"tenant_ref01","srcdatavar":"tenant_ref01_data","suffix":"_dt0"},"m":{"id":"tenant01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tenant_ref01"}}],"index$":1}]}, 'Tenant', {"GET /tenants/{tenant_id}/accounts":{"protocol":"http","parameters":[{"name":"tenant_id","in":"path","description":"The ID of the tenant whose accounts to list.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /tenants/{tenant_id}/account_types":{"protocol":"http","parameters":[{"name":"tenant_id","in":"path","description":"The ID of the tenant whose available account types to list.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /tenants/{tenant_id}/entitlements":{"protocol":"http","parameters":[{"name":"tenant_id","in":"path","description":"The ID of the tenant whose entitlement allocations to retrieve.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /tenants/{tenant_id}/memberships":{"protocol":"http","parameters":[{"name":"tenant_id","in":"path","description":"The ID of the tenant whose active memberships to list.","required":true,"schema":{"type":"string"},"index$":0}]},"GET /tenants/{tenant_id}":{"protocol":"http","parameters":[{"name":"tenant_id","in":"path","description":"The ID of the tenant to retrieve.","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tenant_ref01_data = Object.values(setup.data.existing.tenant)[0] as any

    // LIST
    const tenant_ref01_ent = client.Tenant()
    const tenant_ref01_match: any = {}
    tenant_ref01_match['tenant_id'] = setup.idmap['tenant01']

    const tenant_ref01_list = (await tenant_ref01_ent.list(tenant_ref01_match)).map((e: any) => e.data())


    // LOAD
    const tenant_ref01_match_dt0: any = {}
    tenant_ref01_match_dt0.id = tenant_ref01_data.id
    const tenant_ref01_data_dt0 = (await tenant_ref01_ent.load(tenant_ref01_match_dt0)).data()
    assert(tenant_ref01_data_dt0.id === tenant_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tenant/TenantTestData.json')

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
    ['tenant01','tenant02','tenant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID']
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
  
