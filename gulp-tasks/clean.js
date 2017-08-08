import gulp from "gulp";
import rimraf from "gulp-rimraf";
import del from "del";

gulp.task("clean-css", function() {
  // if(config.production){
  return gulp
    .src(`${global.theme_directory}/css/*.min.css`, { read: false }) // much faster
    .pipe(ignore("theme.css"))
    .pipe(rimraf());
  // }
});

gulp.task("clean-source", function() {
  return del([
    `${global.theme_directory}/src/**/*`,
    `!${global.theme_directory}/src/js`,
    `!${global.theme_directory}/src/js/disney.js`
  ]);
});

// are these needed with the submodule system?
gulp.task("clean-dist", function() {
  return del(["dist/**/*"]);
});

gulp.task("clean-dist-product", function() {
  return del(["dist-product/**/*"]);
});
