using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace webapi.Auth;

[ApiController]
[Route("[controller]")]
[ApiExplorerSettings(IgnoreApi = true)]
public class AuthController : ControllerBase
{
    [HttpGet("Login")]
    public ActionResult Login(string returnUrl = "/")
    {
        return new ChallengeResult(Constants.Oidc, new AuthenticationProperties() { RedirectUri = returnUrl });
    }

    [HttpGet("Logout")]
    [Authorize]
    public async Task<ActionResult> Logout()
    {
        await HttpContext.SignOutAsync();

        return new SignOutResult(Constants.Oidc, new AuthenticationProperties
        {
            RedirectUri = "/"
        });
    }
}
