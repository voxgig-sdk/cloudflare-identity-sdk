

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


describe('DnsCustomNameserversEmptyResponse3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_IDENTITY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareIdentitySDK.test()
    const ent = testsdk.DnsCustomNameserversEmptyResponse3()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dns_custom_nameservers_empty_response_3.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"dns_custom_nameservers_empty_response_3","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /tenants/{tenant_tag}/custom_ns/{custom_ns_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ns1.example.com","k":"param","n":"custom_ns_id","or":"custom_ns_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"699d98642c564d2e855e9661899b7252","k":"param","n":"tenant_tag","or":"tenant_tag","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/tenants/{tenant_tag}/custom_ns/{custom_ns_id}","q":{"exist":["custom_ns_id","tenant_tag"]},"r":{},"s":[{"lit":"tenants"},{"var":"tenant_tag"},{"lit":"custom_ns"},{"var":"custom_ns_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.tenant"]]},"key$":"dns_custom_nameservers_empty_response_3","name__orig":"dns_custom_nameservers_empty_response_3","Name":"DnsCustomNameserversEmptyResponse3","name_":"dns_custom_nameservers_empty_response_3","name-":"dns-custom-nameservers-empty-response-3","NAME":"DNS_CUSTOM_NAMESERVERS_EMPTY_RESPONSE_3","index$":9}, {"active":true,"entity":"dns_custom_nameservers_empty_response_3","key$":"BasicDnsCustomNameserversEmptyResponse3Flow","kind":"basic","name":"BasicDnsCustomNameserversEmptyResponse3Flow","param":{},"step":[]}, 'DnsCustomNameserversEmptyResponse3', {"DELETE /tenants/{tenant_tag}/custom_ns/{custom_ns_id}":{"protocol":"http","parameters":[{"name":"custom_ns_id","in":"path","required":true,"schema":{"description":"The FQDN of the name server.","type":"string","format":"hostname","example":"ns1.example.com","x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_ns_name"},"index$":0},{"name":"tenant_tag","in":"path","required":true,"schema":{"description":"Tenant identifier tag.","type":"string","example":"699d98642c564d2e855e9661899b7252","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/dns-custom-nameservers_identifier-3"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dns_custom_nameservers_empty_response_3_ref01_data = Object.values(setup.data.existing.dns_custom_nameservers_empty_response_3)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dns_custom_nameservers_empty_response_3/DnsCustomNameserversEmptyResponse3TestData.json')

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
    ['dns_custom_nameservers_empty_response_301','dns_custom_nameservers_empty_response_302','dns_custom_nameservers_empty_response_303','tenant01','tenant02','tenant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_EMPTY_RESPONSE_3_ENTID': idmap,
    'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_IDENTITY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_EMPTY_RESPONSE_3_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_DNS_CUSTOM_NAMESERVERS_EMPTY_RESPONSE_3_ENTID']
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
  
