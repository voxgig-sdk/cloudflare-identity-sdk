

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


describe('IamSingleMembershipResponseWithPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamSingleMembershipResponseWithPolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_single_membership_response_with_policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Whether to accept or reject this account invitation.","t":"`$ANY`","key$":"status","index$":1}},"name":"iam_single_membership_response_with_policy","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /memberships","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Demo Account","k":"query","n":"account_name","or":"account_name","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"desc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"Demo Account","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"status","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":4},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"ex":"accepted","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/memberships","q":{"exist":["account_name","direction","name","order","page","per_page","status"]},"r":{},"s":[{"lit":"memberships"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /memberships/{membership_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4536bcfad5faccb111b47003c79917fa","k":"param","n":"membership_id","or":"membership_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/memberships/{membership_id}","q":{"exist":["membership_id"]},"r":{},"s":[{"lit":"memberships"},{"var":"membership_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /user/memberships/{membership_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4536bcfad5faccb111b47003c79917fa","k":"param","n":"membership_id","or":"membership_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/user/memberships/{membership_id}","q":{"exist":["membership_id"]},"r":{},"s":[{"lit":"user"},{"lit":"memberships"},{"var":"membership_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /memberships/{membership_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4536bcfad5faccb111b47003c79917fa","k":"param","n":"membership_id","or":"membership_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/memberships/{membership_id}","q":{"exist":["membership_id"]},"r":{},"s":[{"lit":"memberships"},{"var":"membership_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"iam_single_membership_response_with_policy","name__orig":"iam_single_membership_response_with_policy","Name":"IamSingleMembershipResponseWithPolicy","name_":"iam_single_membership_response_with_policy","name-":"iam-single-membership-response-with-policy","NAME":"IAM_SINGLE_MEMBERSHIP_RESPONSE_WITH_POLICY","index$":26}, {"active":true,"entity":"iam_single_membership_response_with_policy","key$":"BasicIamSingleMembershipResponseWithPolicyFlow","kind":"basic","name":"BasicIamSingleMembershipResponseWithPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_single_membership_response_with_policy_ref01","srcdatavar":"iam_single_membership_response_with_policy_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_membership_response_with_policy_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"iam_single_membership_response_with_policy_ref01","srcdatavar":"iam_single_membership_response_with_policy_ref01_data","suffix":"_dt0"},"m":{"id":"iam_single_membership_response_with_policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_membership_response_with_policy_ref01"}}],"index$":1}]}, 'IamSingleMembershipResponseWithPolicy', {"GET /memberships":{"protocol":"http","parameters":[{"name":"account.name","in":"query","schema":{"description":"Account name","type":"string","example":"Demo Account","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/iam_properties-name"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of memberships per page.","type":"number","default":20,"maximum":50,"minimum":5},"index$":2},{"name":"order","in":"query","schema":{"description":"Field to order memberships by.","type":"string","example":"status","enum":["id","account.name","status"]},"index$":3},{"name":"direction","in":"query","schema":{"description":"Direction to order memberships.","type":"string","example":"desc","enum":["asc","desc"]},"index$":4},{"name":"name","in":"query","schema":{"description":"Account name","type":"string","example":"Demo Account","maxLength":100,"x-auditable":true,"x-ref":"#/components/schemas/iam_properties-name"},"index$":5},{"name":"status","in":"query","schema":{"description":"Status of this membership.","type":"string","example":"accepted","enum":["accepted","pending","rejected"]},"index$":6}]},"GET /memberships/{membership_id}":{"protocol":"http","parameters":[{"name":"membership_id","in":"path","required":true,"schema":{"description":"Membership identifier tag.","type":"string","example":"4536bcfad5faccb111b47003c79917fa","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_membership_components-schemas-identifier"},"index$":0}]},"GET /user/memberships/{membership_id}":{"protocol":"http","parameters":[{"name":"membership_id","in":"path","required":true,"schema":{"description":"Membership identifier tag.","type":"string","example":"4536bcfad5faccb111b47003c79917fa","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_membership_components-schemas-identifier"},"index$":0}]},"PUT /memberships/{membership_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"status":{"description":"Whether to accept or reject this account invitation.","example":"accepted","enum":["accepted","rejected"],"key$":"status"}},"required":["status"],"index$":1}}}},"parameters":[{"name":"membership_id","in":"path","required":true,"schema":{"description":"Membership identifier tag.","type":"string","example":"4536bcfad5faccb111b47003c79917fa","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_membership_components-schemas-identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_single_membership_response_with_policy_ref01_data = Object.values(setup.data.existing.iam_single_membership_response_with_policy)[0] as any

    // UPDATE
    const iam_single_membership_response_with_policy_ref01_ent = client.IamSingleMembershipResponseWithPolicy()
    const iam_single_membership_response_with_policy_ref01_data_up0: any = {}

    const iam_single_membership_response_with_policy_ref01_resdata_up0 = (await iam_single_membership_response_with_policy_ref01_ent.update(iam_single_membership_response_with_policy_ref01_data_up0)).data()
    assert(null != iam_single_membership_response_with_policy_ref01_resdata_up0)


    // LOAD
    const iam_single_membership_response_with_policy_ref01_match_dt0: any = {}
    const iam_single_membership_response_with_policy_ref01_data_dt0 = (await iam_single_membership_response_with_policy_ref01_ent.load(iam_single_membership_response_with_policy_ref01_match_dt0)).data()
    assert(null != iam_single_membership_response_with_policy_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_single_membership_response_with_policy/IamSingleMembershipResponseWithPolicyTestData.json')

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
    ['iam_single_membership_response_with_policy01','iam_single_membership_response_with_policy02','iam_single_membership_response_with_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_MEMBERSHIP_RESPONSE_WITH_POLICY_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_MEMBERSHIP_RESPONSE_WITH_POLICY_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_MEMBERSHIP_RESPONSE_WITH_POLICY_ENTID']
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
  
