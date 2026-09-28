

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


describe('DnsCustomNameserversTcnsResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.DnsCustomNameserversTcnsResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dns_custom_nameservers_tcns_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"dns_custom_nameservers_tcns_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /tenants/{tenant_tag}/custom_ns","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"tenant_tag","or":"tenant_tag","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tenants/{tenant_tag}/custom_ns","q":{"exist":["tenant_tag"]},"r":{},"s":[{"lit":"tenants"},{"var":"tenant_tag"},{"lit":"custom_ns"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.tenant"]]},"key$":"dns_custom_nameservers_tcns_response_collection","name__orig":"dns_custom_nameservers_tcns_response_collection","Name":"DnsCustomNameserversTcnsResponseCollection","name_":"dns_custom_nameservers_tcns_response_collection","name-":"dns-custom-nameservers-tcns-response-collection","NAME":"DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_COLLECTION","index$":10}, {"active":true,"entity":"dns_custom_nameservers_tcns_response_collection","key$":"BasicDnsCustomNameserversTcnsResponseCollectionFlow","kind":"basic","name":"BasicDnsCustomNameserversTcnsResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"tenant_tag":"tenant_tag01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dns_custom_nameservers_tcns_response_collection_ref01"}}],"index$":0}]}, 'DnsCustomNameserversTcnsResponseCollection', {"GET /tenants/{tenant_tag}/custom_ns":{"protocol":"http","parameters":[{"name":"tenant_tag","in":"path","required":true,"schema":{"description":"Tenant identifier tag.","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_identifier-3"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dns_custom_nameservers_tcns_response_collection_ref01_data = Object.values(setup.data.existing.dns_custom_nameservers_tcns_response_collection)[0] as any

    // LIST
    const dns_custom_nameservers_tcns_response_collection_ref01_ent = client.DnsCustomNameserversTcnsResponseCollection()
    const dns_custom_nameservers_tcns_response_collection_ref01_match: any = {}
    dns_custom_nameservers_tcns_response_collection_ref01_match['tenant_tag'] = setup.idmap['tenant_tag01']

    const dns_custom_nameservers_tcns_response_collection_ref01_list = (await dns_custom_nameservers_tcns_response_collection_ref01_ent.list(dns_custom_nameservers_tcns_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dns_custom_nameservers_tcns_response_collection/DnsCustomNameserversTcnsResponseCollectionTestData.json')

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
    ['dns_custom_nameservers_tcns_response_collection01','dns_custom_nameservers_tcns_response_collection02','dns_custom_nameservers_tcns_response_collection03','tenant01','tenant02','tenant03','tenant_tag01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_COLLECTION_ENTID']
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
  
