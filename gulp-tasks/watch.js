import gulp from "gulp";
import watch from "gulp-watch";

gulp.task("watch", ["sass"], () => {
  // if (!globalconfig.prod) { // assumption will be that this will be run via npm script such as
  // `npm run develop`
  gulp.watch(["./sass/**/*.scss"], ["sass"]);
  // gulp.watch([basePaths.dev + 'js/**/*.js','js/**/*.js','!js/theme.js','!js/theme.min.js'], ['scripts'])
  // }
});
