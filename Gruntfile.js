module.exports = function (grunt) {
	'use strict';
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sprite:{
			all: {
				src: 'img/sprites/*.png',
				destImg: 'assets/sprite-compiled.png',
				cssFormat: 'scss', 		
				destCSS:'sass/modules/_sprites.scss'
			}
		},
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
		uglify: {
			js: {
				files: {
					'js/ebook.js': ['js/scroll.js']
				}
			}
		},
		watch: {
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass']
            },
            sprite: {
                files: ['img/*.png'],
                tasks: ['sprite']
            }
        }
	});

    grunt.registerTask('build', ['compass' ,'uglify']);
	grunt.registerTask('default', ['compass', 'watch']);
};