const fs = require("fs");

const [, , ...args] = process.argv;

const retrievedFileName = args[0];
const formattedFileName =
  retrievedFileName.charAt(0).toUpperCase() + retrievedFileName.slice(1);
const newFolderPath = `src/components/${formattedFileName}`;

const jsFilePath = `${newFolderPath}/${formattedFileName}.js`;
const cssFilePath = `${newFolderPath}/${formattedFileName}.css`;
const testFilePath = `${newFolderPath}/${formattedFileName}.test.js`;

const newFileList = [jsFilePath, cssFilePath, testFilePath];

const getNewFolder = async (path) => {
  await fs.mkdir(path, (err) => handleResults(err, path));
};

const getNewFile = async (path) => {
  await new fs.open(path, "w", (err) => handleResults(err, path));
};

const generateStorageUsingPath = async (func, path) => {
  return !fs.existsSync(path) ? func(path) : handleError(true, path);
};

const handleError = (err, path) => {
  const redColor = "\x1b[31m";
  console.error(redColor, `Could not create ${path}`);
  resetLogColor();
  process.exit(1);
};

const handleSuccess = (path) => {
  const greenColor = "\x1b[32m";
  console.log(greenColor, `File: ${path} was successfully created`);
  resetLogColor();
};

const resetLogColor = () => {
  const originalColor = "\x1b[0m";
  console.log(originalColor, " ");
};

const handleResults = (err, path) => {
  return err !== null ? handleError(err, path) : handleSuccess(path);
};

const createFolder = generateStorageUsingPath(getNewFolder, newFolderPath);

createFolder.then((_) =>
  newFileList.forEach((file) => generateStorageUsingPath(getNewFile, file))
);
