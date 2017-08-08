import gulp from "gulp";
import browserSync from "browser-sync";

bSync = browserSync.create();

gulp.task("browser-sync", function() {
  bSync.init(
    global.config.browserSyncWatchFiles,
    global.config.browserSyncOptions
  );
});

gulp.task("watch-bs", ["browser-sync", "watch", "scripts"], function() {});
