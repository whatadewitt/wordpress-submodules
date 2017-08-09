import gulp from "gulp";
import watch from "gulp-watch";

gulp.task("watch", ["theme", "sass", "scripts"], () => {
  // `npm run develop`
  gulp.watch([`${global.theme_directory}/sass/**/*.scss`], ["sass"]);
  gulp.watch(`${global.theme_directory}/src/js/**/*.js`, ["scripts"]);
  gulp.watch(
    [
      `${global.theme_directory}/js/**/*.js`,
      `${global.theme_directory}/src/**/*.php`,
      `${global.theme_directory}/src/**/*.twig`
    ],
    global.browserSync ? global.browserSync.reload : gutil.noop
  );
});
