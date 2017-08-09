import gutil from "gulp-util";

var portNumber = gutil.env.portNumber;
if (portNumber === undefined) {
  //using port number defined in docker-sample unless otherwise stated.
  portNumber = "8084";
}

module.exports = {
  prod: !!gutil.env.prod,
  docker: !!gutil.env.docker

  // browser-sync watched files
  // automatically reloads the page when files changed
  // browserSyncWatchFiles: ["./css/*.min.css", "./js/*.min.js", "./**/*.php"],

  // browser-sync options
  // see: https://www.browsersync.io/docs/options/
  // browserSyncOptions: {
  //   proxy: "localhost:" + portNumber,
  //   port: 3030,
  //   notify: false,
  //   ui: false,
  //   ghost: false,
  //   open: "local"
  // }
};
