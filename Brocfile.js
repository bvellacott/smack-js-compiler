var browserify = require('broccoli-browserify');
var uglify = require('broccoli-uglify-sourcemap')
var esTranspiler = require('broccoli-babel-transpiler')
var pickFiles = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var concat = require('broccoli-concat');
var env = require('broccoli-env').getEnv()
var rename = require('broccoli-stew').rename;

// Tests
var testsStatic = pickFiles('./tests', {
  include: ['tests.html', 'tests-min.html', 'lib/*', 'css/*', 'testCode/*'],
  destDir: '.'
});

var tests = pickFiles('./tests', {
  include: ['tests.js', 'tests.html', 'tests-min.html', 'browserTestHeader.js', 'browserTestFooter.js'],
  destDir: '.'
});

tests = esTranspiler(tests);

tests = concat(tests, {
  // header: "var module = {};",
  headerFiles: ['browserTestHeader.js'],
  outputFile: './tests.js',
  inputFiles: ['./tests.js'],
  footerFiles: ['browserTestFooter.js'],
  // footer: "module.exports(QUnit.test, $, Smack);",
  sourceMapConfig: { enabled: false },
});

// Library
const antlr4 = pickFiles('node_modules/antlr4', {
   destDir: './antlr4'
});

var tool = pickFiles('./dev', {
  destDir: './dev'
});

tool = esTranspiler(new mergeTrees([tool, antlr4], { overwrite: true }));

tool = browserify(tool, {
  entries: ['./dev/browserEntry.js'],
  debug: true
});

tool = concat(tool, {
  outputFile: '/smack-compiler.js',
  inputFiles: ['*.js'],
  sourceMapConfig: { enabled: false },
});

tool = pickFiles(tool, {
  include: ['smack-compiler.js', 'smack-compiler.map'],
});

var toolMin = rename(tool, 'smack-compiler.js', 'smack-compiler-min.js');

toolMin = uglify(toolMin, {
   mangle: true,
   compress: true
});

var all = mergeTrees([
  toolMin,
  tool,
  tests,
  testsStatic
]);

module.exports = all;
