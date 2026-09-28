

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


describe('ScimGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.ScimGroup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'scim_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"scim_group","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/scim/v2/Groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/scim/v2/Groups","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/scim/v2/Groups","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"count","or":"count","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":"displayName eq \"My Group\"","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"start_index","or":"start_index","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/accounts/{account_id}/scim/v2/Groups","q":{"exist":["account_id","count","filter","start_index"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /accounts/{account_id}/scim/v2/Groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/scim/v2/Groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /accounts/{account_id}/scim/v2/Groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/accounts/{account_id}/scim/v2/Groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/scim/v2/Groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/scim/v2/Groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/scim/v2/Groups/{group_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/scim/v2/Groups/{group_id}","q":{"exist":["account_id","id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"scim"},{"lit":"v2"},{"lit":"Groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.account"]]},"key$":"scim_group","name__orig":"scim_group","Name":"ScimGroup","name_":"scim_group","name-":"scim-group","NAME":"SCIM_GROUP","index$":52}, {"active":true,"entity":"scim_group","key$":"BasicScimGroupFlow","kind":"basic","name":"BasicScimGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"scim_group_ref01"},"m":{"account_id":"account01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"account_id":"account01"},"i":{"ref":"scim_group_ref01","srcdatavar":"scim_group_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-scim_group_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"scim_group_ref01","srcdatavar":"scim_group_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"scim_group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-scim_group_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"scim_group_ref01","suffix":"_rm0"},"m":{"account_id":"account01","id":"scim_group01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'ScimGroup', {"POST /accounts/{account_id}/scim/v2/Groups":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"schema":{"description":"Request body for creating a SCIM Group. The `displayName` must not be empty and must not begin with `CF` (reserved for system groups).\n","type":"object","properties":{"displayName":{"description":"A human-readable name for the Group. REQUIRED. Must not start with `CF` (reserved prefix for Cloudflare-managed virtual groups).\n","type":"string","example":"My IdP Group","x-auditable":true},"externalId":{"description":"Identifier for the Group as defined by the provisioning client (IdP).","type":"string","example":"idp-group-456","x-auditable":true}},"required":["displayName"],"title":"SCIM Group Create Request","x-ref":"#/components/schemas/iam_scim_group_create_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0}]},"GET /accounts/{account_id}/scim/v2/Groups":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"startIndex","in":"query","schema":{"description":"The 1-based index of the first result in the current set of list results. Values less than 1 are treated as 1.\n","type":"integer","default":1,"minimum":1},"index$":1},{"name":"count","in":"query","schema":{"description":"Specifies the desired maximum number of query results per page.\n","type":"integer","minimum":0},"index$":2},{"name":"filter","in":"query","schema":{"description":"SCIM filter expression (RFC 7644 Section 3.4.2.2). Only `displayName eq \"value\"` is supported.\n","type":"string","example":"displayName eq \"My Group\""},"index$":3}]},"GET /accounts/{account_id}/scim/v2/Groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"description":"The group identifier for a SCIM Group resource. For system groups this is prefixed `cloudflare-v1-<permissionGroupTag>`; for custom user groups this is a UUID-style tag.\n","type":"string","example":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM Group Identifier","x-ref":"#/components/schemas/iam_scim_group_identifier"},"index$":1}]},"PATCH /accounts/{account_id}/scim/v2/Groups/{group_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"examples":{"add-members":{"summary":"Add members to group","value":{"Operations":[{"op":"add","path":"members","value":[{}]}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"remove-member":{"summary":"Remove member from group","value":{"Operations":[{"op":"remove","path":"members[value eq \"023e105f4ecef8ad9ca31a8372d0c353\"]"}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"replace-members":{"summary":"Replace all members","value":{"Operations":[{"op":"replace","path":"members","value":[{},{}]}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"update-displayname":{"summary":"Update group name","value":{"Operations":[{"op":"replace","path":"displayName","value":"New Group Name"}],"schemas":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}}},"schema":{"description":"Request body for a SCIM PATCH operation on a Group resource (RFC 7644 Section 3.5.2).\n","type":"object","properties":{"Operations":{"description":"List of PATCH operations to apply.","type":"array","items":{"description":"A single PATCH operation for a Group resource. Supports `add`, `remove`, and `replace` on `members`, `displayName`, and `externalId`.\n","type":"object","properties":{"op":{"description":"The operation to perform.","type":"string","example":"add","enum":[],"x-auditable":true},"path":{"description":"Attribute path targeted by this operation. Use `members` to modify group membership. May also include a filter expression to target specific members, e.g. `members[value eq \"userTag\"]`.\n","type":"string","example":"members","x-auditable":true},"value":{"description":"The value(s) for the operation. For member add/replace operations, an array of member value objects. For `displayName` or `externalId` updates, a string value.\n","example":[],"oneOf":[]}},"required":["op"],"title":"SCIM Group Patch Operation","x-ref":"#/components/schemas/iam_scim_group_patch_operation"},"example":[{"op":"add","path":"members","value":[{}]}]},"schemas":{"type":"array","items":{"type":"string"},"example":["urn:ietf:params:scim:api:messages:2.0:PatchOp"]}},"required":["schemas","Operations"],"title":"SCIM PatchOp Request (Groups)","x-ref":"#/components/schemas/iam_scim_group_patch_op_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"description":"The group identifier for a SCIM Group resource. For system groups this is prefixed `cloudflare-v1-<permissionGroupTag>`; for custom user groups this is a UUID-style tag.\n","type":"string","example":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM Group Identifier","x-ref":"#/components/schemas/iam_scim_group_identifier"},"index$":1}]},"DELETE /accounts/{account_id}/scim/v2/Groups/{group_id}":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"description":"The group identifier for a SCIM Group resource. For system groups this is prefixed `cloudflare-v1-<permissionGroupTag>`; for custom user groups this is a UUID-style tag.\n","type":"string","example":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM Group Identifier","x-ref":"#/components/schemas/iam_scim_group_identifier"},"index$":1}]},"PUT /accounts/{account_id}/scim/v2/Groups/{group_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/scim+json":{"schema":{"description":"Request body for replacing a SCIM Group (PUT).","type":"object","properties":{"displayName":{"description":"A human-readable name for the Group.","type":"string","example":"My IdP Group","x-auditable":true},"externalId":{"description":"Identifier for the Group as defined by the provisioning client (IdP). Omission clears the existing value.\n","type":"string","example":"idp-group-456","x-auditable":true},"members":{"description":"The complete replacement member set. Omission is treated as an empty list.\n","type":"array","items":{"description":"A member value object used in Group PATCH operations.","type":"object","properties":{"value":{"description":"The user tag of the member to add or remove.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","x-auditable":true}},"title":"SCIM Group Patch Member Value","x-ref":"#/components/schemas/iam_scim_group_patch_member_value"}},"schemas":{"description":"Must contain `urn:ietf:params:scim:schemas:core:2.0:Group`.","type":"array","items":{"type":"string"},"example":["urn:ietf:params:scim:schemas:core:2.0:Group"]}},"required":["schemas","displayName"],"title":"SCIM Group Replace Request","x-ref":"#/components/schemas/iam_scim_group_replace_request"}}}},"parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Account identifier tag.","allOf":[{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"minLength":32,"x-auditable":true,"x-ref":"#/components/schemas/iam_common_components-schemas-identifier"}],"title":"Account Identifier","x-ref":"#/components/schemas/iam_account_identifier"},"index$":0},{"name":"group_id","in":"path","required":true,"schema":{"description":"The group identifier for a SCIM Group resource. For system groups this is prefixed `cloudflare-v1-<permissionGroupTag>`; for custom user groups this is a UUID-style tag.\n","type":"string","example":"cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353","title":"SCIM Group Identifier","x-ref":"#/components/schemas/iam_scim_group_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const scim_group_ref01_ent = client.ScimGroup()
    let scim_group_ref01_data = setup.data.new.scim_group['scim_group_ref01']
    scim_group_ref01_data['account_id'] = setup.idmap['account01']

    scim_group_ref01_data = (await scim_group_ref01_ent.create(scim_group_ref01_data)).data()
    assert(null != scim_group_ref01_data.id)


    // UPDATE
    const scim_group_ref01_data_up0: any = {}
    scim_group_ref01_data_up0.id = scim_group_ref01_data.id
    scim_group_ref01_data_up0 ['account_id'] = setup.idmap['account_id']

    const scim_group_ref01_resdata_up0 = (await scim_group_ref01_ent.update(scim_group_ref01_data_up0)).data()
    assert(scim_group_ref01_resdata_up0.id === scim_group_ref01_data_up0.id)


    // LOAD
    const scim_group_ref01_match_dt0: any = {}
    scim_group_ref01_match_dt0.id = scim_group_ref01_data.id
    const scim_group_ref01_data_dt0 = (await scim_group_ref01_ent.load(scim_group_ref01_match_dt0)).data()
    assert(scim_group_ref01_data_dt0.id === scim_group_ref01_data.id)


    // REMOVE
    const scim_group_ref01_match_rm0: any = { id: scim_group_ref01_data.id }
    await scim_group_ref01_ent.remove(scim_group_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/scim_group/ScimGroupTestData.json')

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
    ['scim_group01','scim_group02','scim_group03','account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID']
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
  
