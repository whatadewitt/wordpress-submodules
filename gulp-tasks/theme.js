import { exec } from "child_process";
import gulp from "gulp";

gulp.task("theme", cb => {
  if (!global.theme_name) {
    exec("wp theme list", (err, stdout, stderr) => {
      global.theme_name = stdout.match(/[\w-]+(?=.*\sactive)/m).pop();
      global.theme_directory = `./site/wp-content/themes/${global.theme_name}`;
      cb();
    });
  } else {
    cb();
  }
});
