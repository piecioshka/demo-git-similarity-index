#!/usr/bin/env node

const { getSimilarityIndexForFiles } = require('git-similarity-index');

(async function () {
  const similarityIndex = await getSimilarityIndexForFiles(
    'example.txt',
    'example.md',
  );
  console.log(similarityIndex); // 63.64
})();
