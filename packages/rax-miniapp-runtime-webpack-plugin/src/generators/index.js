const { generateAppJS, generateAppCSS } = require('./app');
const generateConfig = require('./config');
const {
  generatePageCSS,
  generatePageJS,
  generatePageJSON,
  generatePageXML,
} = require('./page');
const { generateRootTmpl } = require('./root');
const {
  generateElementJS,
  generateElementJSON,
  generateElementTemplate,
} = require('./element');
const generateRender = require('./render');
const generatePkg = require('./pkg');
const {
  ensureWrapperFolder,
  generateWrapperJS,
  generateWrapperTemplate,
  generateWrapperJSON,
  buildComponentWrapperTemplate
} = require('./componentWrapper');

module.exports = {
  generateAppCSS,
  generateAppJS,
  generateConfig,
  generatePageCSS,
  generatePageJS,
  generatePageJSON,
  generatePageXML,
  generateRootTmpl,
  generateElementJS,
  generateElementJSON,
  generateElementTemplate,
  generateRender,
  generatePkg,
  ensureWrapperFolder,
  generateWrapperJS,
  generateWrapperTemplate,
  generateWrapperJSON,
  buildComponentWrapperTemplate
};
