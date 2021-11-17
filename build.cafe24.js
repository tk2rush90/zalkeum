const {copyFileSync, readdirSync, statSync, unlinkSync, mkdirSync, rmdirSync, constants} = require("fs");
const {join} = require("path");

const dist = join(__dirname, './dist/zalkeum-frontend');
const dest = join(__dirname, '../zalkeum-backend/frontend');

function removeExistingSource(dir) {
  const contents = readdirSync(dir);

  contents.forEach(content => {
    const path = join(dir, content);
    const stat = statSync(path);

    if (stat.isFile()) {
      console.log(`Remove file: ${path}`)

      unlinkSync(path);
    } else {
      removeExistingSource(path);

      console.log(`Remove directory: ${path}`);

      rmdirSync(path);
    }
  });
}

function copyContents(dir, dest) {
  const contents = readdirSync(dir);

  contents.forEach(content => {
    const path = join(dir, content);
    const stat = statSync(path);
    const destination = join(dest, content);

    if (stat.isFile()) {
      console.log(`Copy file: ${path}`)

      copyFileSync(path, destination, constants.COPYFILE_FICLONE);
    } else {
      console.log(`Copy directory: ${path}`)

      mkdirSync(destination);
      copyContents(path, destination);
    }
  });
}

removeExistingSource(dest);
copyContents(dist, dest);
