# ResourceSharingShareResponseSingle entity test

import json
import os
import time

import pytest

from cloudflareidentity_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareidentity_sdk import CloudflareIdentitySDK
from cloudflareidentity_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestResourceSharingShareResponseSingleEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareIdentitySDK.test(None, None)
        ent = testsdk.ResourceSharingShareResponseSingle(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _resource_sharing_share_response_single_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "resource_sharing_share_response_single." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        resource_sharing_share_response_single_ref01_ent = client.ResourceSharingShareResponseSingle(None)
        resource_sharing_share_response_single_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.resource_sharing_share_response_single"), "resource_sharing_share_response_single_ref01"))
        resource_sharing_share_response_single_ref01_data["account_id"] = setup["idmap"]["account01"]

        resource_sharing_share_response_single_ref01_data = helpers.to_map(runner.entity_data(resource_sharing_share_response_single_ref01_ent.create(resource_sharing_share_response_single_ref01_data, None)))
        assert resource_sharing_share_response_single_ref01_data is not None

        # UPDATE
        resource_sharing_share_response_single_ref01_data_up0_up = {
            "account_id": setup["idmap"]["account_id"],
        }

        resource_sharing_share_response_single_ref01_markdef_up0_name = "name"
        resource_sharing_share_response_single_ref01_markdef_up0_value = "Mark01-resource_sharing_share_response_single_ref01_" + str(setup["now"])
        resource_sharing_share_response_single_ref01_data_up0_up[resource_sharing_share_response_single_ref01_markdef_up0_name] = resource_sharing_share_response_single_ref01_markdef_up0_value

        resource_sharing_share_response_single_ref01_resdata_up0 = helpers.to_map(runner.entity_data(resource_sharing_share_response_single_ref01_ent.update(resource_sharing_share_response_single_ref01_data_up0_up, None)))
        assert resource_sharing_share_response_single_ref01_resdata_up0 is not None
        assert resource_sharing_share_response_single_ref01_resdata_up0[resource_sharing_share_response_single_ref01_markdef_up0_name] == resource_sharing_share_response_single_ref01_markdef_up0_value

        # LOAD
        resource_sharing_share_response_single_ref01_match_dt0 = {}
        resource_sharing_share_response_single_ref01_data_dt0_loaded = resource_sharing_share_response_single_ref01_ent.load(resource_sharing_share_response_single_ref01_match_dt0, None)
        assert resource_sharing_share_response_single_ref01_data_dt0_loaded is not None




def _resource_sharing_share_response_single_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/resource_sharing_share_response_single/ResourceSharingShareResponseSingleTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareIdentitySDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["resource_sharing_share_response_single01", "resource_sharing_share_response_single02", "resource_sharing_share_response_single03", "account01", "account02", "account03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID": idmap,
        "CLOUDFLARE_IDENTITY_TEST_LIVE": "FALSE",
        "CLOUDFLARE_IDENTITY_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_IDENTITY_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("account_id") is None:
        idmap_resolved["account_id"] = idmap_resolved.get("account01")

    if env.get("CLOUDFLARE_IDENTITY_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_IDENTITY_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareIdentitySDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_IDENTITY_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_IDENTITY_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
