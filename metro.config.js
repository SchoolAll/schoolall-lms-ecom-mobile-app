// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

if (process.env.STORYBOOK === "1"){
    config.resolver.resolverMainFields.unshift("sbmodern")
}

module.exports = withNativeWind(config, { input: './global.css' });
