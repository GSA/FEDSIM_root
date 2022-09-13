/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.theme = "./assets/sass";
uswds.paths.dist.css = "./_assets/css";

uswds.paths.dist.img = "./_assets/img";
uswds.paths.dist.fonts = "./_assets/fonts";
uswds.paths.dist.js = "./_assets/js";

uswds.sprite.projectIconsOnly = false;	

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;