const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/auth/facebook", "logout"],
    createProxyMiddleware({
      target: "http://localhost:4444",
    })
  );
};
