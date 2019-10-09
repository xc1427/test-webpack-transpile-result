#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const decodeMappings = require('./decodeMappings');

const mapFileContentRaw = fs.readFileSync(path.resolve(__dirname, '../../public/dist.js.map'));
const mapFileContent = JSON.parse(mapFileContentRaw);
const { sourcesContent } = mapFileContent;

for (let i = 0; i < sourcesContent.length; i += 1) {
  const contentChunk = sourcesContent[i];
  fs.writeFileSync(path.resolve(__dirname, `../../sourcemap-analysis-result/sourcesContent_${i}.js`), contentChunk);
}

const mappings = decodeMappings(mapFileContent.mappings, mapFileContent.sources, mapFileContent.names);
fs.writeFileSync(
  path.resolve(__dirname, '../../sourcemap-analysis-result/dist.js.map.json'),
  JSON.stringify({ ...mapFileContent, mappings }, null, 2)
);