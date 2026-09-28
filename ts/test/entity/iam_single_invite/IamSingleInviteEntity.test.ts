

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


describe('IamSingleInviteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamSingleInvite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_single_invite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":1},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of your response to the invitation (rejected or accepted).","t":"`$ANY`","key$":"status","index$":2}},"id":{"field":"id","name":"id"},"name":"iam_single_invite","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /user/invites/{invite_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4f5f0c14a2a41d5063dd301b2f829f04","k":"param","n":"id","or":"invite_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/user/invites/{invite_id}","q":{"exist":["id"]},"r":{"param":{"invite_id":"id"}},"s":[{"lit":"user"},{"lit":"invites"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /user/invites/{invite_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4f5f0c14a2a41d5063dd301b2f829f04","k":"param","n":"id","or":"invite_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/user/invites/{invite_id}","q":{"exist":["id"]},"r":{"param":{"invite_id":"id"}},"s":[{"lit":"user"},{"lit":"invites"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"iam_single_invite","name__orig":"iam_single_invite","Name":"IamSingleInvite","name_":"iam_single_invite","name-":"iam-single-invite","NAME":"IAM_SINGLE_INVITE","index$":24}, {"active":true,"entity":"iam_single_invite","key$":"BasicIamSingleInviteFlow","kind":"basic","name":"BasicIamSingleInviteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_single_invite_ref01","srcdatavar":"iam_single_invite_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_invite_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"iam_single_invite_ref01","srcdatavar":"iam_single_invite_ref01_data","suffix":"_dt0"},"m":{"id":"iam_single_invite01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_invite_ref01"}}],"index$":1}]}, 'IamSingleInvite', {"GET /user/invites/{invite_id}":{"protocol":"http","parameters":[{"name":"invite_id","in":"path","required":true,"schema":{"description":"Invite identifier tag.","type":"string","example":"4f5f0c14a2a41d5063dd301b2f829f04","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_invite_components-schemas-identifier"},"index$":0}]},"PATCH /user/invites/{invite_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"description":"Status of your response to the invitation (rejected or accepted).","example":"accepted","enum":["accepted","rejected"],"key$":"status"}},"required":["status"],"index$":1}}}},"parameters":[{"name":"invite_id","in":"path","required":true,"schema":{"description":"Invite identifier tag.","type":"string","example":"4f5f0c14a2a41d5063dd301b2f829f04","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_invite_components-schemas-identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_single_invite_ref01_data = Object.values(setup.data.existing.iam_single_invite)[0] as any

    // UPDATE
    const iam_single_invite_ref01_ent = client.IamSingleInvite()
    const iam_single_invite_ref01_data_up0: any = {}
    iam_single_invite_ref01_data_up0.id = iam_single_invite_ref01_data.id

    const iam_single_invite_ref01_resdata_up0 = (await iam_single_invite_ref01_ent.update(iam_single_invite_ref01_data_up0)).data()
    assert(iam_single_invite_ref01_resdata_up0.id === iam_single_invite_ref01_data_up0.id)


    // LOAD
    const iam_single_invite_ref01_match_dt0: any = {}
    iam_single_invite_ref01_match_dt0.id = iam_single_invite_ref01_data.id
    const iam_single_invite_ref01_data_dt0 = (await iam_single_invite_ref01_ent.load(iam_single_invite_ref01_match_dt0)).data()
    assert(iam_single_invite_ref01_data_dt0.id === iam_single_invite_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_single_invite/IamSingleInviteTestData.json')

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
    ['iam_single_invite01','iam_single_invite02','iam_single_invite03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID']
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
  
