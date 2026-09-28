

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


describe('OrganizationsApiProfileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.OrganizationsApiProfile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organizations_api_profile.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"code":{"a":true,"h":"Code","n":"code","r":true,"t":"`$INTEGER`","key$":"code","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":1}},"name":"organizations_api_profile","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /organizations/{organization_id}/profile","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","k":"param","n":"organization_id","or":"organization_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{organization_id}/profile","q":{"exist":["organization_id"]},"r":{},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"profile"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"organizations_api_profile","name__orig":"organizations_api_profile","Name":"OrganizationsApiProfile","name_":"organizations_api_profile","name-":"organizations-api-profile","NAME":"ORGANIZATIONS_API_PROFILE","index$":41}, {"active":true,"entity":"organizations_api_profile","key$":"BasicOrganizationsApiProfileFlow","kind":"basic","name":"BasicOrganizationsApiProfileFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organizations_api_profile_ref01"}}],"index$":0}]}, 'OrganizationsApiProfile', {"GET /organizations/{organization_id}/profile":{"protocol":"http","parameters":[{"name":"organization_id","in":"path","description":"The ID of the organization to retrieve a profile for.","required":true,"schema":{"type":"string","example":"a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8","pattern":"^[a-f0-9]{32}$","title":"Organization ID","x-auditable":true,"x-ref":"#/components/schemas/organizations-api_OrganizationID"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organizations_api_profile_ref01_data = Object.values(setup.data.existing.organizations_api_profile)[0] as any

    // LIST
    const organizations_api_profile_ref01_ent = client.OrganizationsApiProfile()
    const organizations_api_profile_ref01_match: any = {}
    organizations_api_profile_ref01_match['organization_id'] = setup.idmap['organization01']

    const organizations_api_profile_ref01_list = (await organizations_api_profile_ref01_ent.list(organizations_api_profile_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organizations_api_profile/OrganizationsApiProfileTestData.json')

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
    ['organizations_api_profile01','organizations_api_profile02','organizations_api_profile03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_ORGANIZATIONS_API_PROFILE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_ORGANIZATIONS_API_PROFILE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_ORGANIZATIONS_API_PROFILE_ENTID']
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
  
