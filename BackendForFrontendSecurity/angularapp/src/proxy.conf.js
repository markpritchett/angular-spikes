const PROXY_CONFIG = [
  {
    context: ["/weatherforecast", "/user", "/auth", "/signin-oidc"],
    target: "https://localhost:7031",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
