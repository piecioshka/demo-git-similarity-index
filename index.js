#!/usr/bin/env node

const {
  getSimilarityIndex,
  getLinesBytes,
  getSimilarityIndexForText,
  getSimilarityIndexForFiles,
} = require('git-similarity-index');

(function () {
  const toBytes = (text) => Buffer.from(text).toJSON().data;

  const firstPattern = 'a\n';
  const secondPattern = 'a\nb';
  const similarityIndex = getSimilarityIndex(
    getLinesBytes(toBytes(firstPattern)),
    getLinesBytes(toBytes(secondPattern)),
    toBytes(secondPattern).length,
  );
  console.log('getSimilarityIndex', similarityIndex); // 66.67
})();

(function () {
  const firstPattern = 'a\nb\nc\n';
  const secondPattern = 'a\nb\nc\nd';
  const similarityIndex = getSimilarityIndexForText(
    firstPattern,
    secondPattern,
  );
  console.log('getSimilarityIndexForText', similarityIndex); // 85.71
})();

(async function () {
  const similarityIndex = await getSimilarityIndexForFiles(
    'mocks/file1.txt',
    'mocks/file2.md',
  );
  console.log('getSimilarityIndexForFiles', similarityIndex); // 63.64
})();
