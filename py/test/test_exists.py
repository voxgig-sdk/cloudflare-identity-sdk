# CloudflareIdentity SDK exists test

import pytest
from cloudflareidentity_sdk import CloudflareIdentitySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareIdentitySDK.test(None, None)
        assert testsdk is not None
