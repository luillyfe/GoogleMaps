module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    serve: {
      'path': '/Users/luillyfe/Documents/Maps'
    }
  });

  // Load the plugin that provides the "serve" task.
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['serve']);
};