# AccountUserGroupMember entity test

import json
import os
import time

import pytest

from cloudflareidentity_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareidentity_sdk import CloudflareIdentitySDK
from cloudflareidentity_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAccountUserGroupMemberEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareIdentitySDK.test(None, None)
        ent = testsdk.AccountUserGroupMember(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "account_user_group_member": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudflareIdentitySDK.test(seed, None)
        seen = list(base.AccountUserGroupMember(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from cloudflareidentity_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudflareIdentitySDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.AccountUserGroupMember(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _account_user_group_member_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "account_user_group_member." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        account_user_group_member_ref01_ent = client.AccountUserGroupMember(None)
        account_user_group_member_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.account_user_group_member"), "account_user_group_member_ref01"))
        account_user_group_member_ref01_data["account_id"] = setup["idmap"]["account01"]
        account_user_group_member_ref01_data["user_group_id"] = setup["idmap"]["user_group01"]

        account_user_group_member_ref01_data = helpers.to_map(runner.entity_data(account_user_group_member_ref01_ent.create(account_user_group_member_ref01_data, None)))
        assert account_user_group_member_ref01_data is not None
        assert account_user_group_member_ref01_data["id"] is not None

        # LIST
        account_user_group_member_ref01_match = {
            "account_id": setup["idmap"]["account01"],
            "user_group_id": setup["idmap"]["user_group01"],
        }

        account_user_group_member_ref01_list_result = account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match, None)
        assert isinstance(account_user_group_member_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(account_user_group_member_ref01_list_result),
            {"id": account_user_group_member_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        account_user_group_member_ref01_data_up0_up = {
            "id": account_user_group_member_ref01_data["id"],
            "account_id": setup["idmap"]["account_id"],
        }

        account_user_group_member_ref01_resdata_up0 = helpers.to_map(runner.entity_data(account_user_group_member_ref01_ent.update(account_user_group_member_ref01_data_up0_up, None)))
        assert account_user_group_member_ref01_resdata_up0 is not None
        assert account_user_group_member_ref01_resdata_up0["id"] == account_user_group_member_ref01_data_up0_up["id"]

        # LOAD
        account_user_group_member_ref01_match_dt0 = {
            "id": account_user_group_member_ref01_data["id"],
        }
        account_user_group_member_ref01_data_dt0_loaded = account_user_group_member_ref01_ent.load(account_user_group_member_ref01_match_dt0, None)
        account_user_group_member_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(account_user_group_member_ref01_data_dt0_loaded))
        assert account_user_group_member_ref01_data_dt0_load_result is not None
        assert account_user_group_member_ref01_data_dt0_load_result["id"] == account_user_group_member_ref01_data["id"]

        # REMOVE
        account_user_group_member_ref01_match_rm0 = {
            "id": account_user_group_member_ref01_data["id"],
        }
        account_user_group_member_ref01_ent.remove(account_user_group_member_ref01_match_rm0, None)

        # LIST
        account_user_group_member_ref01_match_rt0 = {
            "account_id": setup["idmap"]["account01"],
            "user_group_id": setup["idmap"]["user_group01"],
        }

        account_user_group_member_ref01_list_rt0_result = account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match_rt0, None)
        assert isinstance(account_user_group_member_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(account_user_group_member_ref01_list_rt0_result),
            {"id": account_user_group_member_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _account_user_group_member_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/account_user_group_member/AccountUserGroupMemberTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareIdentitySDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["account_user_group_member01", "account_user_group_member02", "account_user_group_member03", "account01", "account02", "account03", "user_group01", "user_group02", "user_group03"],
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
        "CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID": idmap,
        "CLOUDFLARE_IDENTITY_TEST_LIVE": "FALSE",
        "CLOUDFLARE_IDENTITY_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_IDENTITY_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID"))
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
