# CloudflareIdentity SDK utility: make_context

from projectname_sdk.core.context import CloudflareIdentityContext


def make_context_util(ctxmap, basectx):
    return CloudflareIdentityContext(ctxmap, basectx)
