import requireDir from "requiredir";
import exec from "gulp-exec";
import gulp from "gulp";
import config from "./gulp-oconfig";

// the main issue with this as far as i can see is that we're separating theme gulp scripts
// from the "site" level... but really, all of the themes should be working the same way...

global.config = config;
global.theme_directory = `./wp-content/themes/${global.config.theme}`;

requireDir("./gulp-tasks");

gulp.task("default", ["watch-bs"]);
gulp.task("build", ["sass", "scripts"]);
