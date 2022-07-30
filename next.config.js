/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    return Object.assign({}, config, {
      module: Object.assign({}, config.module, {
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            loader: "emit-file-loader",
            options: {
              name: "dist/[path][name].[ext]",
            },
          },
          {
            test: /\.md$/,
            loader: "raw-loader",
          },
        ]),
      }),
    });
  },
};

module.exports = nextConfig;
