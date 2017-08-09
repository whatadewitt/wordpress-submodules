import gconfig from "../gulp.config";
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import gutil from "gulp-util";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import debug from "gulp-debug";

gulp.task("sass", ["theme"], () => {
  const stream = gulp
    .src(`${global.theme_directory}/sass/child-theme.scss`)
    .pipe(debug())
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceComments: "map"
      })
    )
    .pipe(
      autoprefixer({
        remove: true,
        flexbox: true
      }).on("error", sass.logError)
    )
    .pipe(!global.config.prod ? sourcemaps.write(".") : gutil.noop())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(`${global.theme_directory}/css`))
    .pipe(global.browserSync ? global.browserSync.stream() : gutil.noop());

  return stream;
});
