import gulp from "gulp";
import browserSync from "browser-sync";
import gutil from "gulp-util";
import watch from "gulp-watch";

const bSync = browserSync.create();

gulp.task("browser-sync", () => {
  let portNumber = gutil.env.portNumber;
  if (portNumber === undefined) {
    //using port number defined in docker-sample unless otherwise stated.
    portNumber = "8086";
  }

  // not exactly sure about this setup...
  const files = [
    `${global.theme_directory}/js/*.js`,
    `${global.theme_directory}/css/*.css`,
    `${global.theme_directory}/**/*.php`,
    `${global.theme_directory}/**/*.twig`
  ];

  bSync.init(files, {
    proxy: "localhost:" + portNumber,
    port: 3030,
    notify: true,
    ui: false,
    // ghost: false,
    logFileChanges: true,
    injectChanges: true,
    open: "local",
    logLevel: "debug",
    logConnections: true
  });

  // browsersync to grab other files...
  global.browserSync = bSync;
});

gulp.task("watch-bs", ["theme", "watch", "browser-sync"], () => {});
