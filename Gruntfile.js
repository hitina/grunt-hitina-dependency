/*
 * grunt-hitina-dependency
 * https://github.com/hitina/grunt-hitina-dependency
 *
 * Copyright (c) 2015 hu-bo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        hitina_dependency: {
            conf: {
                dependencies: [
                    {
                        "name": "numberBox",
                        "src": "app/numberBox.js",
                        "template": "tmpl/numberBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "moneyBox",
                        "src": "app/moneyBox.js",
                        "template": "tmpl/moneyBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "dateInput",
                        "src": "app/dateInput.js",
                        "template": "tmpl/dateInput.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "emailBox",
                        "src": "app/emailBox.js",
                        "template": "tmpl/emailBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "label",
                        "src": "app/label.js",
                        "template": "tmpl/label.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "fileBox",
                        "src": "app/fileBox.js",
                        "template": "tmpl/fileBox.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "textBox",
                        "src": "app/textBox.js",
                        "template": "tmpl/textBox.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {

                        "name": "UIComponent",
                        "src": "app/UIComponent.js",
                        "template": "",
                        "dependencies": []
                    },
                    {
                        "name": "calendar",
                        "src": "app/calendar.js",
                        "template": "tmpl/calendar.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "draggable",
                        "src": "app/draggable.js",
                        "template": "",
                        "dependencies": []
                    },
                    {
                        "name": "showDialog",
                        "src": "app/showDialog.js",
                        "template": "",
                        "dependencies": ["draggable"]
                    },
                    {
                        "name": "dataGrid",
                        "src": "app/dataGrid.js",
                        "template": "tmpl/dataGrid.tmpl",
                        "dependencies": ["UIComponent", "pagination"]
                    },
                    {
                        "name": "advancedDataGrid",
                        "src": "app/advancedDataGrid.js",
                        "template": "tmpl/advancedDataGrid.tmpl",
                        "dependencies": ["dataGrid"]
                    },
                    {
                        "name": "editableGrid",
                        "src": "app/editableGrid.js",
                        "template": "tmpl/editableGrid.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "loop",
                        "src": "app/loop.js",
                        "template": "tmpl/loop.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "listGroup",
                        "src": "app/listGroup.js",
                        "template": "tmpl/listGroup.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "combo",
                        "src": "app/combo.js",
                        "template": "tmpl/combo.tmpl",
                        "dependencies": ["UIComponent"]
                    },
                    {
                        "name": "dateBox",
                        "src": "app/dateBox.js",
                        "template": "tmpl/dateBox.tmpl",
                        "dependencies": ["combo", "dateInput", "calendar"]
                    },
                    {
                        "name": "comboBox",
                        "src": "app/comboBox.js",
                        "template": "tmpl/comboBox.tmpl",
                        "dependencies": ["combo", "listGroup"]
                    },
                    {
                        "name": "codeList",
                        "src": "app/codeList.js",
                        "template": "",
                        "dependencies": ["comboBox"]
                    },
                    {
                        "name": "pagination",
                        "src": "app/pagination.js",
                        "template": "tmpl/pagination.tmpl",
                        "dependencies": []
                    }
                ],
                parse: function () {
                    var content = arguments[0];
                    if (content) {
                        return "(function($){$.extend($.spark.tmpl.defaults," + JSON.stringify(content) + ");})(jQuery);";
                    } else {
                        return "";
                    }
                }
            }
        },
        concat: {
            dist: {
                dest: 'dest/spark-ui.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dest/spark-ui.js',
                dest: 'dest/spark-ui.min.js'
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['hitina_dependency', 'concat','uglify']);

};
