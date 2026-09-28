

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


describe('IamCollectionOrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamCollectionOrganization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_collection_organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"iam_collection_organization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /user/organizations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"desc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"all","k":"query","n":"match","or":"match","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"Cloudflare, Inc.","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"status","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"ex":"member","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/user/organizations","q":{"exist":["direction","match","name","order","page","per_page","status"]},"r":{},"s":[{"lit":"user"},{"lit":"organizations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"iam_collection_organization","name__orig":"iam_collection_organization","Name":"IamCollectionOrganization","name_":"iam_collection_organization","name-":"iam-collection-organization","NAME":"IAM_COLLECTION_ORGANIZATION","index$":16}, {"active":true,"entity":"iam_collection_organization","key$":"BasicIamCollectionOrganizationFlow","kind":"basic","name":"BasicIamCollectionOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"iam_collection_organization_ref01"}}],"index$":0}]}, 'IamCollectionOrganization', {"GET /user/organizations":{"protocol":"http","parameters":[{"name":"name","in":"query","schema":{"description":"Organization name.","type":"string","example":"Cloudflare, Inc.","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/iam_schemas-name"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of organizations per page.","type":"number","default":20,"maximum":50,"minimum":5},"index$":2},{"name":"order","in":"query","schema":{"description":"Field to order organizations by.","type":"string","example":"status","enum":["id","name","status"]},"index$":3},{"name":"direction","in":"query","schema":{"description":"Direction to order organizations.","type":"string","example":"desc","enum":["asc","desc"]},"index$":4},{"name":"match","in":"query","schema":{"description":"Whether to match all search requirements or at least one (any).","type":"string","default":"all","enum":["any","all"]},"index$":5},{"name":"status","in":"query","schema":{"description":"Whether the user is a member of the organization or has an inivitation pending.","type":"string","example":"member","enum":["member","invited"]},"index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_collection_organization_ref01_data = Object.values(setup.data.existing.iam_collection_organization)[0] as any

    // LIST
    const iam_collection_organization_ref01_ent = client.IamCollectionOrganization()
    const iam_collection_organization_ref01_match: any = {}

    const iam_collection_organization_ref01_list = (await iam_collection_organization_ref01_ent.list(iam_collection_organization_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_collection_organization/IamCollectionOrganizationTestData.json')

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
    ['iam_collection_organization01','iam_collection_organization02','iam_collection_organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_ORGANIZATION_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_COLLECTION_ORGANIZATION_ENTID']
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
  
