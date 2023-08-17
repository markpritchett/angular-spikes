using Microsoft.IdentityModel.Tokens;

namespace webapi.Auth;

public static class Extensions
{
    public static void AddAuth(this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthentication(options =>
        {
            options.DefaultScheme = Constants.Cookies;
            options.DefaultChallengeScheme = Constants.Oidc;
        })
        .AddCookie(Constants.Cookies, options =>
        {
            options.Cookie.Name = builder.Configuration["Auth:CookieName"];
            options.Cookie.SameSite = SameSiteMode.Strict;
        })
        .AddOpenIdConnect(Constants.Oidc, options =>
        {
            options.Authority = builder.Configuration["Auth:Authority"];
            options.ClientId = builder.Configuration["Auth:ClientId"];
            options.ClientSecret = builder.Configuration["Auth:ClientSecret"];

            options.ResponseType = "code";
            options.ResponseMode = "query";
            options.SignedOutCallbackPath = "/";
            options.GetClaimsFromUserInfoEndpoint = true;
            options.MapInboundClaims = false;
            options.SaveTokens = true;

            options.Scope.Clear();

            foreach (var scope in builder.Configuration.GetSection("Auth:Scopes").Get<string[]>()!)
            {
                options.Scope.Add(scope);
            }

            options.TokenValidationParameters = new TokenValidationParameters
            {
                NameClaimType = "name",
                RoleClaimType = "role"
            };
        });
    }
}
