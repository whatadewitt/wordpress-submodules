import gulp from "gulp";
import modernizr from "gulp-modernizr";

gulp.task("modernizr", ["sass"], () => {
  const customizrSettings = {
    options: [
      "setClasses",
      "addTest",
      "prefixedCSS",
      "html5printshiv",
      "testProp",
      "fnBind",
      "prefixes"
    ],
    tests: [
      "canvas",
      "cors",
      "eventlistener",
      "flash",
      "fullscreen",
      "geolocation",
      "json",
      "svg",
      "touchevents",
      "video",
      "webgl",
      "cssanimations",
      "cssfilters",
      "flexbox",
      "fontface",
      "cssmask",
      "mediaqueries",
      "es5",
      "sizes",
      "srcset",
      "inlinesvg"
    ]
  };

  // Generate modernizr file
  gulp
    .src([
      `!${global.theme_directory}/css/*min.css`,
      `${global.theme_directory}/css/*.css`,
      `${global.theme_directory}/js/*.js`
      // these should be completed at the plugin level...
      // "wp-content/plugins/**/*.js",
      // "wp-content/plugins/**/*.css"
    ])
    .pipe(modernizr(customizrSettings)) // should we minify?
    .pipe(gulp.dest(`${global.theme_directory}/js`));
});
