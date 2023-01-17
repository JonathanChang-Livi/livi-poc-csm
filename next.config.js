/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'csm',
        remotes: {
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './hook/auth': './components/auth',
          './hook/user': './components/user',
          './context/auth': './context/authContext',
          './context/user': './context/userContext',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig