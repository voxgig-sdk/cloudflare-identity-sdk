

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


describe('ScimUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.ScimUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scim_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"scim_user","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/scim/v2/Users","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/scim/v2/Users","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/scim/v2/Users","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"count","or":"count","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"userName eq \"user@example.com\"","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"start_index","or":"start_index","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/scim/v2/Users","q":{"exist":["account_id","count","filter","start_index"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/scim/v2/Users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/scim/v2/Users/{user_id}","q":{"exist":["account_id","id"]},"r":{"param":{"user_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/scim/v2/Users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/scim/v2/Users/{user_id}","q":{"exist":["account_id","id"]},"r":{"param":{"user_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/scim/v2/Users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/scim/v2/Users/{user_id}","q":{"exist":["account_id","id"]},"r":{"param":{"user_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/scim/v2/Users/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/scim/v2/Users/{user_id}","q":{"exist":["account_id","id"]},"r":{"param":{"user_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"scim_user","name__orig":"scim_user","Name":"ScimUser","name_":"scim_user","name-":"scim-user","NAME":"SCIM_USER","index$":53}, {"active":true,"entity":"scim_user","key$":"BasicScimUserFlow","kind":"basic","name":"BasicScimUserFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"scim_user_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"scim_user_ref01","srcdatavar":"scim_user_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-scim_user_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"scim_user_ref01","srcdatavar":"scim_user_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"scim_user01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-scim_user_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"scim_user_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"scim_user01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'ScimUser', {"POST /accounts/{account_id}/scim/v2/Users":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"schema":{"description":"Request body for creating a SCIM User (POST). The `emails` field is required with a primary email matching `userName`, and `active` must be `true`.\n","type":"object","properties":{"active":{"description":"A Boolean value indicating the user's administrative status. Must be `true` for user creation.","type":"boolean","example":true,"x-auditable":true},"displayName":{"description":"The name of the user, suitable for display to end-users. If not explicitly set, falls back to the formatted name or userName.","type":"string","example":"Jane Smith","x-auditable":true},"emails":{"description":"Email addresses for the user. The primary email must match `userName`.","type":"array","items":{"description":"An email address entry for a SCIM User.","type":"object","properties":{"primary":{"description":"A Boolean value indicating the preferred email address.","type":"boolean","example":true},"type":{"description":"A label indicating the attribute's function, e.g., \"work\" or \"home\".","type":"string","example":"work"},"value":{"description":"The email address value.","type":"string","format":"email","example":"user@example.com"}},"required":["value"],"title":"SCIM User Email","x-ref":"#/components/schemas/iam_scim_user_email_object"}},"externalId":{"description":"An identifier for the user as defined by the provisioning client (IdP). This value is stored and returned but not interpreted by Cloudflare.","type":"string","example":"idp-user-abc123","x-auditable":true},"name":{"description":"The components of the user's real name.","type":"object","properties":{"familyName":{"description":"The family name (last name) of the user.","type":"string","example":"Smith","x-auditable":true},"formatted":{"description":"The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.","type":"string","example":"Jane Smith","readOnly":true},"givenName":{"description":"The given name (first name) of the user.","type":"string","example":"Jane","x-auditable":true}},"title":"SCIM User Name","x-ref":"#/components/schemas/iam_scim_user_name_object"},"schemas":{"description":"Must contain `urn:ietf:params:scim:schemas:core:2.0:User`.","type":"array","items":{"type":"string"},"example":["urn:ietf:params:scim:schemas:core:2.0:User"]},"userName":{"description":"Unique identifier for the user, equal to the user's email address.","type":"string","format":"email","example":"user@example.com","x-auditable":true}},"required":["schemas","userName","emails","active"],"title":"SCIM User Create Request","x-ref":"#/components/schemas/iam_scim_user_create_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/scim/v2/Users":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"startIndex","in":"query","schema":{"description":"The 1-based index of the first result in the current set of list results. Values less than 1 are treated as 1.\n","type":"integer","default":1,"minimum":1},"index$":1},{"name":"count","in":"query","schema":{"description":"Specifies the desired maximum number of query results per page.\n","type":"integer","minimum":0},"index$":2},{"name":"filter","in":"query","schema":{"description":"SCIM filter expression (RFC 7644 Section 3.4.2.2). Only `userName eq \"value\"` is supported.\n","type":"string","example":"userName eq \"user@example.com\""},"index$":3}]},"GET /accounts/{account_id}/scim/v2/Users/{user_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"description":"The user tag identifying a SCIM User resource (account member).","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM User Identifier","x-ref":"#/components/schemas/iam_scim_user_identifier"},"index$":1}]},"PATCH /accounts/{account_id}/scim/v2/Users/{user_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"examples":{"path-based":{"summary":"Path-based style","value":{"Operations":[{"op":"replace","path":"active","value":false}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"value-object":{"summary":"Value-object style (no path)","value":{"Operations":[{"op":"replace","value":{"active":false}}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}}},"schema":{"description":"Request body for a SCIM PATCH operation on a User resource (RFC 7644 Section 3.5.2).\n","type":"object","properties":{"Operations":{"description":"List of PATCH operations to apply.","type":"array","items":{"description":"A single PATCH operation (RFC 7644 Section 3.5.2).","type":"object","properties":{"op":{"description":"The operation to perform. Only `replace` is currently supported; `add` and `remove` are accepted without error but have no effect. Matched case-insensitively.\n","type":"string","example":"replace","enum":[],"x-auditable":true},"path":{"description":"Attribute path targeted by this operation. When absent, `value` must be a singular complex attribute.\n","type":"string","example":"active","x-auditable":true},"value":{"description":"The value(s) for the operation. For `replace` without a path, this should be an object of attribute name/value pairs. For member path operations, this should be an array of member value objects.\n","example":{}}},"required":["op"],"title":"SCIM Patch Operation","x-ref":"#/components/schemas/iam_scim_patch_operation"},"example":[{"op":"replace","value":{"active":false}}]},"schemas":{"description":"Must contain `urn:ietf:params:scim:api:messages:2.0:PatchOp`.","type":"array","items":{"type":"string"},"example":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"required":["schemas","Operations"],"title":"SCIM PatchOp Request (Users)","x-ref":"#/components/schemas/iam_scim_patch_op_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"description":"The user tag identifying a SCIM User resource (account member).","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM User Identifier","x-ref":"#/components/schemas/iam_scim_user_identifier"},"index$":1}]},"DELETE /accounts/{account_id}/scim/v2/Users/{user_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"description":"The user tag identifying a SCIM User resource (account member).","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM User Identifier","x-ref":"#/components/schemas/iam_scim_user_identifier"},"index$":1}]},"PUT /accounts/{account_id}/scim/v2/Users/{user_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"schema":{"description":"Request body for replacing a SCIM User (PUT). Only `schemas` and `userName` are required; other fields are optional.\n","type":"object","properties":{"active":{"description":"A Boolean value indicating the user's administrative status. Optional; if omitted, the current value is preserved. Set to `false` to deprovision the user, removing their membership from the account.","type":"boolean","example":true,"x-auditable":true},"displayName":{"description":"The name of the user, suitable for display to end-users. If not explicitly set, falls back to the formatted name or userName.","type":"string","example":"Jane Smith","x-auditable":true},"emails":{"description":"Email addresses for the user. If a primary email is provided, it must match `userName`.","type":"array","items":{"description":"An email address entry for a SCIM User.","type":"object","properties":{"primary":{"description":"A Boolean value indicating the preferred email address.","type":"boolean","example":true},"type":{"description":"A label indicating the attribute's function, e.g., \"work\" or \"home\".","type":"string","example":"work"},"value":{"description":"The email address value.","type":"string","format":"email","example":"user@example.com"}},"required":["value"],"title":"SCIM User Email","x-ref":"#/components/schemas/iam_scim_user_email_object"}},"externalId":{"description":"An identifier for the user as defined by the provisioning client (IdP). This value is stored and returned but not interpreted by Cloudflare.","type":"string","example":"idp-user-abc123","x-auditable":true},"name":{"description":"The components of the user's real name.","type":"object","properties":{"familyName":{"description":"The family name (last name) of the user.","type":"string","example":"Smith","x-auditable":true},"formatted":{"description":"The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.","type":"string","example":"Jane Smith","readOnly":true},"givenName":{"description":"The given name (first name) of the user.","type":"string","example":"Jane","x-auditable":true}},"title":"SCIM User Name","x-ref":"#/components/schemas/iam_scim_user_name_object"},"schemas":{"description":"Must contain `urn:ietf:params:scim:schemas:core:2.0:User`.","type":"array","items":{"type":"string"},"example":["urn:ietf:params:scim:schemas:core:2.0:User"]},"userName":{"description":"Unique identifier for the user, equal to the user's email address.","type":"string","format":"email","example":"user@example.com","x-auditable":true}},"required":["schemas","userName"],"title":"SCIM User Replace Request","x-ref":"#/components/schemas/iam_scim_user_replace_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"user_id","in":"path","required":true,"schema":{"description":"The user tag identifying a SCIM User resource (account member).","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM User Identifier","x-ref":"#/components/schemas/iam_scim_user_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const scim_user_ref01_ent = client.ScimUser()
    let scim_user_ref01_data = setup.data.new.scim_user['scim_user_ref01']
    scim_user_ref01_data['account_id'] = setup.idmap['account01']

    scim_user_ref01_data = (await scim_user_ref01_ent.create(scim_user_ref01_data)).data()
    assert(null != scim_user_ref01_data.id)


    // UPDATE
    const scim_user_ref01_data_up0: any = {}
    scim_user_ref01_data_up0.id = scim_user_ref01_data.id
    scim_user_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const scim_user_ref01_resdata_up0 = (await scim_user_ref01_ent.update(scim_user_ref01_data_up0)).data()
    assert(scim_user_ref01_resdata_up0.id === scim_user_ref01_data_up0.id)


    // LOAD
    const scim_user_ref01_match_dt0: any = {}
    scim_user_ref01_match_dt0.id = scim_user_ref01_data.id
    const scim_user_ref01_data_dt0 = (await scim_user_ref01_ent.load(scim_user_ref01_match_dt0)).data()
    assert(scim_user_ref01_data_dt0.id === scim_user_ref01_data.id)


    // REMOVE
    const scim_user_ref01_match_rm0: any = { id: scim_user_ref01_data.id }
    await scim_user_ref01_ent.remove(scim_user_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/scim_user/ScimUserTestData.json')

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
    ['scim_user01','scim_user02','scim_user03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID']
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
  
