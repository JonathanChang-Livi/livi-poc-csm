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
          './useAuth': './components/auth.ts',
          './useUser': './components/user.ts',
          './authContext': './context/authContext.ts',
          './userContext': './context/userContext.ts',
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