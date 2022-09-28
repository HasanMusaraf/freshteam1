module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'style.css' : 'style.scss',
            'task2.css' : 'task2.scss',
            '/Users/mmusaraf/freshteam/Task/Input_Fields/style1.css' : '/Users/mmusaraf/freshteam/Task/Input_Fields/style1.scss'

          }
        },
      },
      watch: {
        css: {
          files: 'style.scss',
          files: 'task2.scss',
          files: '/Users/mmusaraf/freshteam/Task/Input_Fields/style1.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }