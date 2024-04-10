import {ExpoConfig, ConfigContext} from "expo/config"

export default ({config}: ConfigContext): ExpoConfig => ({
    ...config, 
    "name": "schoolall-lms-ecom-mobile-app",
    "slug": "schoolall-lms-ecom-mobile-app",
    "version": "1.0.0",

    "scheme": "schoolall-lms-ecom-mobile-app",
    "web": {
        "bundler": "metro",
        "output": "static",
        "favicon": "./assets/favicon.png"
    },
    "plugins": ["expo-router", "expo-localization"],
    "experiments": {
        "typedRoutes": true,

        "tsconfigPaths": true
    },

    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
        "supportsTablet": true
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#ffffff"
        },
    },
    extra:{
        storybookEnabled: process.env.STORYBOOK === "1"
    }
})