const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/auth", "/auth/google", "/auth/facebook", "/products"],
    createProxyMiddleware({
      target: "http://localhost:4444",
    })
  );
};
