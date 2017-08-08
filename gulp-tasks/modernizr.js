import gulp from "gulp";
import modernizr from "gulp-modernizr";

gulp.task("modernizr", ["sass"], () => {
  // Generate modernizr file
  gulp
    .src([
      `!${global.theme_directory}/css/*min.css`,
      `${global.theme_directory}/css/*.css`,
      `${global.theme_directory}/js/*.js`,
      "wp-content/plugins/**/*.js", // these should be completed at the plugin level...
      "wp-content/plugins/**/*.css"
    ])
    .pipe(modernizr(customizrSettings))
    .pipe(gulp.dest(basePaths.dev + "js"));
});
