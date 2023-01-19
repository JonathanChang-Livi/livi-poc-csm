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
          './provider': './components/provider',
          './hooks/useAuthState': './hooks/auth',
          './hooks/useUserState': './hooks/user',
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