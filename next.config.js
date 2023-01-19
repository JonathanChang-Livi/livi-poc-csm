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
          'csm': `csm@https://livi-poc-csm.vercel.app/_next/static/${isServer ? 'server' : 'chunks'}/remoteEntry.js`
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './provider': './components/provider',
          './useAuthState': './hooks/auth',
          './useUserState': './hooks/user',
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