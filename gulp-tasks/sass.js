import gconfig from "../gulp.config";
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import gutil from "gulp-util";

gulp.task("sass", () => {
  const stream = gulp
    .src(`${global.theme_directory}/sass/*.scss`)
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
    .pipe(
      !config.prod // todo: we should be using some sort of environment variable here rather than config
        ? sourcemaps.write(undefined, { sourceRoot: null })
        : gutil.noop()
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./css"));

  return stream;
});
