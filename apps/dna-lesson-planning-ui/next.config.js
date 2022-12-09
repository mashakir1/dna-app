// @ts-nocheck

const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require('path');
const nextTranslate = require('next-translate');
const withMDX = require('@next/mdx')();

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, './styles')],
    additionalData: `@import "styles/variables.scss";`,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withNx(nextTranslate(withBundleAnalyzer(withMDX(nextConfig))));
