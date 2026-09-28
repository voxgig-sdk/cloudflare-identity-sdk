package core

type CloudflareIdentityError struct {
	IsCloudflareIdentityError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareIdentityError(code string, msg string, ctx *Context) *CloudflareIdentityError {
	return &CloudflareIdentityError{
		IsCloudflareIdentityError: true,
		Sdk:              "CloudflareIdentity",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareIdentityError) Error() string {
	return e.Msg
}
