import requireDir from "requiredir";
import gulp from "gulp";
import config from "./gulp.config";

// the main issue with this as far as i can see is that we're separating theme gulp scripts
// from the "site" level... but really, all of the themes should be working the same way...

global.config = config;

requireDir("./gulp-tasks");

gulp.task("default", ["watch-bs"]);
// gulp.task("build", ["sass", "scripts"]);
