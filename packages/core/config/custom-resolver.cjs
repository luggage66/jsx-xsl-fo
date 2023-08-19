function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
  /** @type {(testPath: string, snapshotExtension: string) => string} */
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace(/\/dist\//, '/testSnapshots/') + snapshotExtension;
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    const regexp = new RegExp(escapeRegExp(snapshotExtension) + "$");
    return snapshotFilePath.replace(/\/testSnapshots\//, "/dist/").replace(regexp, "");
  },

  testPathForConsistencyCheck: 'some/__tests__/example.test.js',
};