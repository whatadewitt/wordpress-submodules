import gulp from "gulp";
import pump from "pump";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import gutil from "gulp-util";

// todo: let's look at this and see if we can come up with a naming scheme...
gulp.task("scripts", cb => {
  const scripts = [
    `${global.theme_directory}/js/modernizr.js`,
    `${global.theme_directory}/js/tether.js`, // Must be loaded before BS4
    `${global.theme_directory}/js/bootstrap4/bootstrap.js`,
    `${global.theme_directory}/js/skip-link-focus-fix.js`,
    `${global.theme_directory}/js/slick.js`,
    `${global.theme_directory}/js/disney.js` // Theme js functions
  ];

  /* Gulp uglify wants you to use pump to debug
   * which line is problematic during minification:
   * https://www.npmjs.com/package/gulp-uglify
   */
  pump(
    [
      gulp.src(scripts).pipe(concat("theme.min.js")),
      config.prod ? uglify() : gutil.noop(),
      gulp.dest("./js/")
    ],
    cb
  );

  gulp.src(scripts).pipe(concat("theme.js")).pipe(gulp.dest("./js/"));
});
