const path = require('path')
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  future: {
    webpack5: true,
  },
}

module.exports = {
  ...withAntdLess({
    lessVarsFilePath: './styles/antd-variables.less', // optional 
    webpack(config) {
      return config
    }
  }),
  ...nextConfig
}