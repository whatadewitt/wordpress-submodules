import gulp from "gulp";

// is this needed with the submodule system?

gulp.task("dist", ["clean-dist"], function() {
  gulp
    .src([
      "**/*",
      "!bower_components",
      "!bower_components/**",
      "!node_modules",
      "!node_modules/**",
      "!src",
      "!src/**",
      "!dist",
      "!dist/**",
      "!dist-product",
      "!dist-product/**",
      "!sass",
      "!sass/**",
      "!readme.txt",
      "!readme.md",
      "!package.json",
      "!gulpfile.js",
      "!CHANGELOG.md",
      "!.travis.yml",
      "!jshintignore",
      "!codesniffer.ruleset.xml",
      "*"
    ])
    .pipe(gulp.dest("dist/"));
});

gulp.task("dist-product", ["clean-dist-product"], function() {
  gulp
    .src([
      "**/*",
      "!bower_components",
      "!bower_components/**",
      "!node_modules",
      "!node_modules/**",
      "!src",
      "!src/**",
      "!dist",
      "!dist/**",
      "!dist-product",
      "!dist-product/**",
      "*"
    ])
    .pipe(gulp.dest("dist-product/"));
});
