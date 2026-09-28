<?php
declare(strict_types=1);

// CloudflareIdentity SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareIdentityMakeContext
{
    public static function call(array $ctxmap, ?CloudflareIdentityContext $basectx): CloudflareIdentityContext
    {
        return new CloudflareIdentityContext($ctxmap, $basectx);
    }
}
