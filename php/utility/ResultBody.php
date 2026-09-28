<?php
declare(strict_types=1);

// CloudflareIdentity SDK utility: result_body

class CloudflareIdentityResultBody
{
    public static function call(CloudflareIdentityContext $ctx): ?CloudflareIdentityResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
