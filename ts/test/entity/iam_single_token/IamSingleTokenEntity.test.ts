

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


describe('IamSingleTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamSingleToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_single_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":5},"key$":"result","index$":1}},"id":{"field":"id","name":"id"},"name":"iam_single_token","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/tokens/{token_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/tokens/{token_id}","q":{"exist":["account_id","id"]},"r":{"param":{"token_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /user/tokens/{token_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/user/tokens/{token_id}","q":{"exist":["id"]},"r":{"param":{"token_id":"id"}},"s":[{"lit":"user"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/tokens/{token_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/tokens/{token_id}","q":{"exist":["account_id","id"]},"r":{"param":{"token_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /user/tokens/{token_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ed17574386854bf78a67040be0a770b0","k":"param","n":"id","or":"token_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/user/tokens/{token_id}","q":{"exist":["id"]},"r":{"param":{"token_id":"id"}},"s":[{"lit":"user"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"iam_single_token","name__orig":"iam_single_token","Name":"IamSingleToken","name_":"iam_single_token","name-":"iam-single-token","NAME":"IAM_SINGLE_TOKEN","index$":32}, {"active":true,"entity":"iam_single_token","key$":"BasicIamSingleTokenFlow","kind":"basic","name":"BasicIamSingleTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_single_token_ref01","srcdatavar":"iam_single_token_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_token_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"iam_single_token_ref01","srcdatavar":"iam_single_token_ref01_data","suffix":"_dt0"},"m":{"id":"iam_single_token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_single_token_ref01"}}],"index$":1}]}, 'IamSingleToken', {"GET /accounts/{account_id}/tokens/{token_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":1}]},"GET /user/tokens/{token_id}":{"protocol":"http","parameters":[{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":0}]},"PUT /accounts/{account_id}/tokens/{token_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"condition":{"properties":{"request_ip":{}},"type":"object","x-ref":"#/components/schemas/iam_condition"},"creator_email_at_creation":{"description":"The email address of the user who created the token at the time of\ncreation. Only present for Account Owned API Tokens when a creator email\nwas available.","example":"user@example.com","maxLength":90,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_creator_email_at_creation"},"expires_on":{"description":"The expiration time on or after which the JWT MUST NOT be accepted for processing.","example":"2020-01-01T00:00:00Z","format":"date-time","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_expires_on"},"id":{"description":"Token identifier tag.","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"issued_on":{"description":"The time on which the token was created.","example":"2018-07-01T05:20:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_issued_on"},"last_used_on":{"description":"Last time the token was used.","example":"2020-01-02T12:34:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_last_used_on"},"modified_on":{"description":"Last time the token was modified.","example":"2018-07-02T05:20:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_modified_on"},"name":{"description":"Token name.","example":"readonly token","maxLength":120,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_name"},"not_before":{"description":"The time before which the token MUST NOT be accepted for processing.","example":"2018-07-01T05:20:00Z","format":"date-time","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_not_before"},"policies":{"description":"List of access policies assigned to the token.","items":{"properties":{},"required":[],"title":"Policy with Permission Groups and Resources","type":"object","x-ref":"#/components/schemas/iam_policy_with_permission_groups_and_resources"},"type":"array","x-ref":"#/components/schemas/iam_token_policies"},"provisioner_id":{"description":"The identifier of the service that provisioned the token. For an\nOAuth-provisioned token, this is the OAuth client identifier. Present\nwhen `provisioner_type` is present and null when the identifier is\nunavailable.","example":"a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4","nullable":true,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_provisioner_id"},"provisioner_type":{"description":"The type of service that provisioned the token. Only present for\nprovisioned Account Owned API Tokens.","example":"com.cloudflare.api.oauthtoken","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_provisioner_type"},"status":{"description":"Status of the token.","enum":["active","disabled","expired"],"example":"active","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_token_status","x-stainless-terraform-configurability":"computed_optional"}},"x-ref":"#/components/schemas/iam_token_base"},{"type":"object"},{"required":["name","policies"]}],"title":"Token defined in a request body","x-ref":"#/components/schemas/iam_token_body","index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":1}]},"PUT /user/tokens/{token_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"condition":{"properties":{"request_ip":{}},"type":"object","x-ref":"#/components/schemas/iam_condition"},"creator_email_at_creation":{"description":"The email address of the user who created the token at the time of\ncreation. Only present for Account Owned API Tokens when a creator email\nwas available.","example":"user@example.com","maxLength":90,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_creator_email_at_creation"},"expires_on":{"description":"The expiration time on or after which the JWT MUST NOT be accepted for processing.","example":"2020-01-01T00:00:00Z","format":"date-time","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_expires_on"},"id":{"description":"Token identifier tag.","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"issued_on":{"description":"The time on which the token was created.","example":"2018-07-01T05:20:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_issued_on"},"last_used_on":{"description":"Last time the token was used.","example":"2020-01-02T12:34:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_last_used_on"},"modified_on":{"description":"Last time the token was modified.","example":"2018-07-02T05:20:00Z","format":"date-time","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_modified_on"},"name":{"description":"Token name.","example":"readonly token","maxLength":120,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_name"},"not_before":{"description":"The time before which the token MUST NOT be accepted for processing.","example":"2018-07-01T05:20:00Z","format":"date-time","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_not_before"},"policies":{"description":"List of access policies assigned to the token.","items":{"properties":{},"required":[],"title":"Policy with Permission Groups and Resources","type":"object","x-ref":"#/components/schemas/iam_policy_with_permission_groups_and_resources"},"type":"array","x-ref":"#/components/schemas/iam_token_policies"},"provisioner_id":{"description":"The identifier of the service that provisioned the token. For an\nOAuth-provisioned token, this is the OAuth client identifier. Present\nwhen `provisioner_type` is present and null when the identifier is\nunavailable.","example":"a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4","nullable":true,"readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_provisioner_id"},"provisioner_type":{"description":"The type of service that provisioned the token. Only present for\nprovisioned Account Owned API Tokens.","example":"com.cloudflare.api.oauthtoken","readOnly":true,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_provisioner_type"},"status":{"description":"Status of the token.","enum":["active","disabled","expired"],"example":"active","type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_token_status","x-stainless-terraform-configurability":"computed_optional"}},"x-ref":"#/components/schemas/iam_token_base"},{"type":"object"},{"required":["name","policies"]}],"title":"Token defined in a request body","x-ref":"#/components/schemas/iam_token_body","index$":1}}}},"parameters":[{"name":"token_id","in":"path","required":true,"schema":{"description":"Token identifier tag.","type":"string","example":"ed17574386854bf78a67040be0a770b0","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/iam_token_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let iam_single_token_ref01_data = Object.values(setup.data.existing.iam_single_token)[0] as any

    // UPDATE
    const iam_single_token_ref01_ent = client.IamSingleToken()
    const iam_single_token_ref01_data_up0: any = {}
    iam_single_token_ref01_data_up0.id = iam_single_token_ref01_data.id

    const iam_single_token_ref01_resdata_up0 = (await iam_single_token_ref01_ent.update(iam_single_token_ref01_data_up0)).data()
    assert(iam_single_token_ref01_resdata_up0.id === iam_single_token_ref01_data_up0.id)


    // LOAD
    const iam_single_token_ref01_match_dt0: any = {}
    iam_single_token_ref01_match_dt0.id = iam_single_token_ref01_data.id
    const iam_single_token_ref01_data_dt0 = (await iam_single_token_ref01_ent.load(iam_single_token_ref01_match_dt0)).data()
    assert(iam_single_token_ref01_data_dt0.id === iam_single_token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_single_token/IamSingleTokenTestData.json')

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
    ['iam_single_token01','iam_single_token02','iam_single_token03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_ENTID']
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
  
