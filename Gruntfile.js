module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            js: {
                files: {
                    'dist/js/datetime.picker.js': [
                        'src/js/mobiscroll.core.js',
                        'src/js/mobiscroll.frame.js',
                        'src/js/mobiscroll.scroller.js',
                        'src/js/mobiscroll.util.datetime.js',
                        'src/js/mobiscroll.datetimebase.js',
                        'src/js/mobiscroll.datetime.js',
                        //'src/js/mobiscroll.frame.ios.js',
                        'src/js/mobiscroll.i18n.zh.js'
                    ],
                    'dist/js/jquery.min.js': [
                        'src/js/jquery.min.js'
                    ]
                }
            },
            css: {
                files: {
                    'dist/css/datetime.picker.css': [
                        'src/css/mobiscroll.animation.css',
                        'src/css/mobiscroll.icons.css',
                        'src/css/mobiscroll.frame.css',
                        'src/css/mobiscroll.frame.ios.css',
                        'src/css/mobiscroll.scroller.css',
                        'src/css/mobiscroll.scroller.ios.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/js/datetime.picker.min.js': ['dist/js/datetime.picker.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/datetime.picker.min.css': ['dist/css/datetime.picker.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

}