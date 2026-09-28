

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


describe('IamSsoConnectorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.IamSsoConnector()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'iam_sso_connector.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"begin_verification":{"a":true,"h":"Begin Verification","n":"begin_verification","r":false,"sh":"Begin the verification process after creation","t":"`$BOOLEAN`","key$":"begin_verification","index$":0},"email_domain":{"a":true,"h":"Email Domain","n":"email_domain","r":true,"sh":"Email domain of the new SSO connector","t":"`$STRING`","key$":"email_domain","index$":1},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"SSO Connector enabled state","t":"`$BOOLEAN`","key$":"enabled","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":4},"use_fedramp_language":{"a":true,"h":"Use Fedramp Language","n":"use_fedramp_language","r":false,"sh":"Controls the display of FedRAMP language to the user during SSO login","t":"`$BOOLEAN`","key$":"use_fedramp_language","index$":5}},"id":{"field":"id","name":"id"},"name":"iam_sso_connector","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/sso_connectors","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/sso_connectors","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"sso_connectors"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/sso_connectors/{sso_connector_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"sso_connector_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/sso_connectors/{sso_connector_id}","q":{"exist":["account_id","id"]},"r":{"param":{"sso_connector_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"sso_connectors"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/sso_connectors/{sso_connector_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"sso_connector_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/sso_connectors/{sso_connector_id}","q":{"exist":["account_id","id"]},"r":{"param":{"sso_connector_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"sso_connectors"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"iam_sso_connector","name__orig":"iam_sso_connector","Name":"IamSsoConnector","name_":"iam_sso_connector","name-":"iam-sso-connector","NAME":"IAM_SSO_CONNECTOR","index$":34}, {"active":true,"entity":"iam_sso_connector","key$":"BasicIamSsoConnectorFlow","kind":"basic","name":"BasicIamSsoConnectorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"iam_sso_connector_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"iam_sso_connector_ref01","srcdatavar":"iam_sso_connector_ref01_data","suffix":"_up0","textfield":"email_domain"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_sso_connector_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"iam_sso_connector_ref01","srcdatavar":"iam_sso_connector_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"iam_sso_connector01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-iam_sso_connector_ref01"}}],"index$":2}]}, 'IamSsoConnector', {"POST /accounts/{account_id}/sso_connectors":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"begin_verification":{"description":"Begin the verification process after creation","type":"boolean","example":true,"default":true,"x-stainless-terraform-configurability":"computed_optional","key$":"begin_verification"},"email_domain":{"description":"Email domain of the new SSO connector","type":"string","example":"example.com","key$":"email_domain"},"use_fedramp_language":{"description":"Controls the display of FedRAMP language to the user during SSO login","type":"boolean","example":false,"default":false,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/iam_use_fedramp_language","key$":"use_fedramp_language"}},"required":["email_domain"],"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/sso_connectors/{sso_connector_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"sso_connector_id","in":"path","required":true,"schema":{"description":"SSO Connector identifier tag.","allOf":[{"description":"Identifier","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"SSO Connector Identifier","x-ref":"#/components/schemas/iam_sso_connector_identifier"},"index$":1}]},"PATCH /accounts/{account_id}/sso_connectors/{sso_connector_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"description":"SSO Connector enabled state","type":"boolean","example":true,"key$":"enabled"},"use_fedramp_language":{"description":"Controls the display of FedRAMP language to the user during SSO login","type":"boolean","example":false,"default":false,"x-stainless-terraform-configurability":"computed_optional","x-ref":"#/components/schemas/iam_use_fedramp_language","key$":"use_fedramp_language"}},"index$":1}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"sso_connector_id","in":"path","required":true,"schema":{"description":"SSO Connector identifier tag.","allOf":[{"description":"Identifier","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"type":"string","x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"SSO Connector Identifier","x-ref":"#/components/schemas/iam_sso_connector_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const iam_sso_connector_ref01_ent = client.IamSsoConnector()
    let iam_sso_connector_ref01_data = setup.data.new.iam_sso_connector['iam_sso_connector_ref01']
    iam_sso_connector_ref01_data['account_id'] = setup.idmap['account01']

    iam_sso_connector_ref01_data = (await iam_sso_connector_ref01_ent.create(iam_sso_connector_ref01_data)).data()
    assert(null != iam_sso_connector_ref01_data.id)


    // UPDATE
    const iam_sso_connector_ref01_data_up0: any = {}
    iam_sso_connector_ref01_data_up0.id = iam_sso_connector_ref01_data.id
    iam_sso_connector_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const iam_sso_connector_ref01_markdef_up0 = { name: 'email_domain', value: 'Mark01-iam_sso_connector_ref01_' + setup.now }
    ;(iam_sso_connector_ref01_data_up0 as any)[iam_sso_connector_ref01_markdef_up0.name] = iam_sso_connector_ref01_markdef_up0.value

    const iam_sso_connector_ref01_resdata_up0 = (await iam_sso_connector_ref01_ent.update(iam_sso_connector_ref01_data_up0)).data()
    assert(iam_sso_connector_ref01_resdata_up0.id === iam_sso_connector_ref01_data_up0.id)

    assert((iam_sso_connector_ref01_resdata_up0 as any)[iam_sso_connector_ref01_markdef_up0.name] === iam_sso_connector_ref01_markdef_up0.value)


    // LOAD
    const iam_sso_connector_ref01_match_dt0: any = {}
    iam_sso_connector_ref01_match_dt0.id = iam_sso_connector_ref01_data.id
    const iam_sso_connector_ref01_data_dt0 = (await iam_sso_connector_ref01_ent.load(iam_sso_connector_ref01_match_dt0)).data()
    assert(iam_sso_connector_ref01_data_dt0.id === iam_sso_connector_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/iam_sso_connector/IamSsoConnectorTestData.json')

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
    ['iam_sso_connector01','iam_sso_connector02','iam_sso_connector03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID']
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
  
