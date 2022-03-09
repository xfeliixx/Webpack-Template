let mix = require("laravel-mix");
require("mix-html-builder");

mix
  .setPublicPath("export")
  .copy("src/pages/index.html", "export/")
  .copy("src/assets/images", "export/assets/images")
  .js("src/assets/app.js", "export/js")

  .postCss("src/assets/css/app.css", "export/css", [require("tailwindcss")]);

mix.browserSync({ server: "export" });
