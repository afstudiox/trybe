const fs = require('fs');

module.exports = (fileName, fileContent) => {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return 'ok';
}