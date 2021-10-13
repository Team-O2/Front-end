module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ['o2-server.s3.ap-northeast-2.amazonaws.com', '', 'o2-server.s3.amazonaws.com'],
  },
};
