

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


describe('DnsCustomNameserversTcnsResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.DnsCustomNameserversTcnsResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dns_custom_nameservers_tcns_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ns_name":{"a":true,"fo":"hostname","h":"Ns Name","n":"ns_name","r":true,"sh":"The FQDN of the name server.","t":"`$STRING`","key$":"ns_name","index$":0},"ns_set":{"a":true,"h":"Ns Set","n":"ns_set","r":false,"sh":"The number of the set that this name server belongs to.","t":"`$NUMBER`","key$":"ns_set","index$":1}},"name":"dns_custom_nameservers_tcns_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /tenants/{tenant_tag}/custom_ns","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"tenant_tag","or":"tenant_tag","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/tenants/{tenant_tag}/custom_ns","q":{"exist":["tenant_tag"]},"r":{},"s":[{"lit":"tenants"},{"var":"tenant_tag"},{"lit":"custom_ns"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.tenant"]]},"key$":"dns_custom_nameservers_tcns_response_single","name__orig":"dns_custom_nameservers_tcns_response_single","Name":"DnsCustomNameserversTcnsResponseSingle","name_":"dns_custom_nameservers_tcns_response_single","name-":"dns-custom-nameservers-tcns-response-single","NAME":"DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_SINGLE","index$":11}, {"active":true,"entity":"dns_custom_nameservers_tcns_response_single","key$":"BasicDnsCustomNameserversTcnsResponseSingleFlow","kind":"basic","name":"BasicDnsCustomNameserversTcnsResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dns_custom_nameservers_tcns_response_single_ref01"},"m":{"tenant_tag":"tenant_tag01"},"o":"create","s":[],"v":[],"index$":0}]}, 'DnsCustomNameserversTcnsResponseSingle', {"POST /tenants/{tenant_tag}/custom_ns":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"ns_name":{"description":"The FQDN of the name server.","type":"string","format":"hostname","example":"ns1.example.com","x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_ns_name","key$":"ns_name"},"ns_set":{"description":"The number of the set that this name server belongs to.","type":"number","example":1,"default":1,"maximum":5,"minimum":1,"x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_ns_set","key$":"ns_set"}},"required":["ns_name"],"title":"Custom NS Input","x-ref":"#/components/schemas/dns-custom-nameservers_CustomNSInput","index$":1}}}},"parameters":[{"name":"tenant_tag","in":"path","required":true,"schema":{"description":"Tenant identifier tag.","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_identifier-3"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dns_custom_nameservers_tcns_response_single_ref01_ent = client.DnsCustomNameserversTcnsResponseSingle()
    let dns_custom_nameservers_tcns_response_single_ref01_data = setup.data.new.dns_custom_nameservers_tcns_response_single['dns_custom_nameservers_tcns_response_single_ref01']
    dns_custom_nameservers_tcns_response_single_ref01_data['tenant_tag'] = setup.idmap['tenant_tag01']

    dns_custom_nameservers_tcns_response_single_ref01_data = (await dns_custom_nameservers_tcns_response_single_ref01_ent.create(dns_custom_nameservers_tcns_response_single_ref01_data)).data()
    assert(null != dns_custom_nameservers_tcns_response_single_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dns_custom_nameservers_tcns_response_single/DnsCustomNameserversTcnsResponseSingleTestData.json')

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
    ['dns_custom_nameservers_tcns_response_single01','dns_custom_nameservers_tcns_response_single02','dns_custom_nameservers_tcns_response_single03','tenant01','tenant02','tenant03','tenant_tag01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_TCNS_RESPONSE_SINGLE_ENTID']
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
  
