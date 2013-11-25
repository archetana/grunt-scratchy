/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

var scratchy = require('scratchy');

module.exports = function(grunt) {

  'use strict';

  grunt.registerMultiTask('scratchy', 'Extracts scratchy docs', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pattern: this.filesSrc,
      output: this.data.dest
    });

    grunt.verbose.writeflags(options, 'Options');

    scratchy.extract(options);

    /**
    // Clean specified files / dirs.
    this.filesSrc.forEach(function(filepath) {
      //clean(extract, options);
    });
    */
  });

};
