const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
 
  i18n,
  images: {
    domains: [
      "127.0.0.1",
      "localhost",
      "googleusercontent.com",
      "maps.googleapis.com",
      "chawkbazarapi.redq.io",
      "graph.facebook.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
      "18.141.64.26",
      "via.placeholder.com",
      "pickbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com",
      "picsum.photos",
      "cdninstagram.com",
      "scontent.cdninstagram.com",
      "vcdn1-giaitri.vnecdn.net"
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
