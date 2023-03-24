/** @type {import('next').NextConfig} */

const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withReactSvg = require("next-react-svg");
const nextConfig = {
  reactStrictMode: true,
  include: path.resolve(__dirname, "."),
  pwa: {
    disable: true,
    dest: "public",
    skipWaiting: false,
    runtimeCaching,
  },
  i18n: {
    localeDetection: false,
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
};

// const withSentry = (nextConfig) => {
//   const SentryWebpackPluginOptions = {
//     url: "https://sentry.io/",
//     org: "",
//     project: "",
//     authToken: process.env.SENTRY_AUTH_TOKEN,
//     silent: true,
//   };

//   if (process.env.SENTRY_AUTH_TOKEN) {
//     return withSentryConfig(nextConfig, SentryWebpackPluginOptions)
//   }

//   return nextConfig
//   return withSentryConfig(nextConfig, SentryWebpackPluginOptions);
// };

module.exports = (phase) => {
  return withPlugins([withBundleAnalyzer, withReactSvg], withPWA(nextConfig))(
    phase,
    { defaultConfig: {} }
  );
};
