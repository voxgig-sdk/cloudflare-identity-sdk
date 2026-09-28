

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


describe('IamSingleRoleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamSingleRole()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_single_role.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":1}},"id":{"field":"id","name":"id"},"name":"iam_single_role","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/roles/{role_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"3536bcfad5faccb999b47003c79917fb","k":"param","n":"id","or":"role_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/roles/{role_id}","q":{"exist":["account_id","id"]},"r":{"param":{"role_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"iam_single_role","name__orig":"iam_single_role","Name":"IamSingleRole","name_":"iam_single_role","name-":"iam-single-role","NAME":"IAM_SINGLE_ROLE","index$":31}, {"active":true,"entity":"iam_single_role","key$":"BasicIamSingleRoleFlow","kind":"basic","name":"BasicIamSingleRoleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_single_role_ref01","srcdatavar":"iam_single_role_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"iam_single_role01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_role_ref01"}}],"index$":0}]}, 'IamSingleRole', {"GET /accounts/{account_id}/roles/{role_id}":{"protocol":"http","parameters":[{"name":"role_id","in":"path","required":true,"schema":{"description":"Role identifier tag.","type":"string","example":"3536bcfad5faccb999b47003c79917fb","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_role_components-schemas-identifier"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_single_role_ref01_data = Object.values(setup.data.existing.iam_single_role)[0] as any

    // LOAD
    const iam_single_role_ref01_ent = client.IamSingleRole()
    const iam_single_role_ref01_match_dt0: any = {}
    iam_single_role_ref01_match_dt0.id = iam_single_role_ref01_data.id
    const iam_single_role_ref01_data_dt0 = (await iam_single_role_ref01_ent.load(iam_single_role_ref01_match_dt0)).data()
    assert(iam_single_role_ref01_data_dt0.id === iam_single_role_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_single_role/IamSingleRoleTestData.json')

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
    ['iam_single_role01','iam_single_role02','iam_single_role03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_ROLE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_ROLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_ROLE_ENTID']
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
  
