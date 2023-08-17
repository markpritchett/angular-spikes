using Microsoft.AspNetCore.Mvc;

namespace webapi.Auth;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public ActionResult Index()
    {
        var isAuthenticated = User?.Identity?.IsAuthenticated ?? false;

        if (!isAuthenticated)
        {
            return Ok(new UserInfo(isAuthenticated, null, null));
        }

        if (User?.Identity?.Name is null)
        {
            return Ok(new UserInfo(isAuthenticated, null, null));
        }

        return Ok(new UserInfo(isAuthenticated, User.Identity.Name, User.Identity.Name.GetInitials()));
    }
}

public record UserInfo(bool IsAuthenticated, string? Name, string? Initials);

public static class StringExtensions
{
    public static string GetInitials(this string value)
       => string.Concat(value
          .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
          .Where(x => x.Length >= 1 && char.IsLetter(x[0]))
          .Select(x => char.ToUpper(x[0])));
}
