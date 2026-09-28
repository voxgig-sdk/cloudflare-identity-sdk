<?php
declare(strict_types=1);

// CloudflareIdentity SDK exists test

require_once __DIR__ . '/../cloudflareidentity_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareIdentitySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
