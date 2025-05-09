module.exports = {
  commands: require('@callstack/repack/commands/rspack'),
  project: {
    ios: {
      sourceDir: './ios',
    },
    android: {
      sourceDir: './android',
    },
  },
  assets: ['./assets/fonts'],
  dependencies: {
    'react-native-screen-corner-radius': {
      platforms: {
        android: null,
      },
    },
  },
};
