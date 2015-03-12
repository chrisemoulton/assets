Package.describe({
  name: 'hybrid:asset-builder',
  summary: 'Resize and optimize assets for web, mobile, and desktop.',
  version: '0.0.1',
  git: 'https://github.com/meteorhybrid/asset-builder'
});

Package.registerBuildPlugin({
  name: "buildAssets",
  use: ['underscore', 'meteor'],
  sources: [
    'plugin/build-assets.js'
  ],
  npmDependencies: {
    "gm": "1.17.0", 
    "mkdirp": "0.5.0"
  }
});