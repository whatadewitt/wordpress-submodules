import gulp from "gulp";
import rimraf from "gulp-rimraf";
import del from "del";
import ignore from "gulp-ignore";

gulp.task("clean-css", ["theme"], () => {
  return gulp
    .src(
      [
        `${global.theme_directory}/css/*.css`,
        `${global.theme_directory}/css/*.map`
      ],
      { read: false } // much faster
    )
    .pipe(ignore("child-theme.css")) // would i even want to ignore this?
    .pipe(rimraf());
});

// not sure why i'd want to do this...
gulp.task("clean-source", ["theme"], function() {
  // return del([
  //   `${global.theme_directory}/src/**/*`,
  //   `!${global.theme_directory}/src/js`,
  //   `!${global.theme_directory}/src/js/disney.js`
  // ]);
});

// are these needed with the submodule system?
gulp.task("clean-dist", function() {
  return del(["dist/**/*"]);
});

gulp.task("clean-dist-product", function() {
  return del(["dist-product/**/*"]);
});
