import gulp from "gulp";
import pump from "pump";
import uglify from "gulp-uglify";
import gutil from "gulp-util";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import plumber from "gulp-plumber";

// this is simplified with http2, because it's multiplexed, we can load files individually...
gulp.task("scripts", ["theme"], () => {
  return gulp
    .src(`${global.theme_directory}/src/js/*.js`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env", "es2015"]
      })
    )
    .pipe(global.config.prod ? uglify() : gutil.noop())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(`${global.theme_directory}/js/`));
});
