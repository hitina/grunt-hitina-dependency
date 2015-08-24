/*
 * grunt-hitina-dependency
 * https://github.com/hitina/grunt-hitina-dependency
 *
 * Copyright (c) 2015 hu-bo
 * Licensed under the MIT license.
 */

'use strict';
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        hitina_dependency: {
            conf: {
                dependencies: [
                /**
                 * adam core dependencies
                 */
                    {
                        "name": "prototype",
                        "src": "js/core/prototype.js"
                    }, {
                        "name": "global",
                        "src": "js/core/global.js"
                    },
                    {
                        "name": "class",
                        "src": "js/core/class.js"
                    },
                    {
                        "name": "core-base",
                        "src": "js/core/base.js"
                    },
                    {
                        "name": "ajax",
                        "src": "js/core/ajax.js",
                        "dependencies": ["core-base"]
                    },
                    {
                        "name": "dataCenter",
                        "src": "js/core/dataCenter.js",
                        "dependencies": ["core-base"]
                    }, {
                        "name": "controller",
                        "src": "js/core/controller.js",
                        "dependencies": ["core-base"]
                    }, {
                        "name": "controller-business",
                        "src": "js/core/controller-business.js",
                        "dependencies": ["controller"]
                    },

                /**
                 * adam ui dependencies
                 */
                    {
                        "name": "ui-base",
                        "src": "js/ui/base.js"
                    },
                    {
                        "name": "textBox",
                        "src": "js/ui/textBox.js",
                        "template": "tmpl/textBox.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "numberBox",
                        "src": "js/ui/numberBox.js",
                        "template": "tmpl/numberBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "moneyBox",
                        "src": "js/ui/moneyBox.js",
                        "template": "tmpl/moneyBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "dateInput",
                        "src": "js/ui/dateInput.js",
                        "template": "tmpl/dateInput.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "emailBox",
                        "src": "js/ui/emailBox.js",
                        "template": "tmpl/emailBox.tmpl",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "label",
                        "src": "js/ui/label.js",
                        "template": "tmpl/label.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "fileBox",
                        "src": "js/ui/fileBox.js",
                        "template": "tmpl/fileBox.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "calendar",
                        "src": "js/ui/calendar.js",
                        "template": "tmpl/calendar.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "draggable",
                        "src": "js/ui/draggable.js"
                    },
                    {
                        "name": "showDialog",
                        "src": "js/ui/showDialog.js",
                        "dependencies": ["draggable"]
                    },
                    {
                        "name": "dataGrid",
                        "src": "js/ui/dataGrid.js",
                        "template": "tmpl/dataGrid.tmpl",
                        "dependencies": ["ui-base", "pagination"]
                    },
                    {
                        "name": "advancedDataGrid",
                        "src": "js/ui/advancedDataGrid.js",
                        "template": "tmpl/advancedDataGrid.tmpl",
                        "dependencies": ["dataGrid"]
                    },
                    {
                        "name": "editableGrid",
                        "src": "js/ui/editableGrid.js",
                        "template": "tmpl/editableGrid.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "loop",
                        "src": "js/ui/loop.js",
                        "template": "tmpl/loop.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "listGroup",
                        "src": "js/ui/listGroup.js",
                        "template": "tmpl/listGroup.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "combo",
                        "src": "js/ui/combo.js",
                        "template": "tmpl/combo.tmpl",
                        "dependencies": ["ui-base"]
                    },
                    {
                        "name": "dateBox",
                        "src": "js/ui/dateBox.js",
                        "template": "tmpl/dateBox.tmpl",
                        "dependencies": ["combo", "dateInput", "calendar"]
                    },
                    {
                        "name": "comboBox",
                        "src": "js/ui/comboBox.js",
                        "template": "tmpl/comboBox.tmpl",
                        "dependencies": ["combo", "listGroup"]
                    },
                    {
                        "name": "codeList",
                        "src": "js/ui/codeList.js",
                        "template": "",
                        "dependencies": ["comboBox"]
                    },
                    {
                        "name": "pagination",
                        "src": "js/ui/pagination.js",
                        "template": "tmpl/pagination.tmpl"
                    },

                /**
                 *  ui dataRenderer + dataAdapter
                 */
                    {
                        "name": "dataRenderer-dc",
                        "src": "js/ui/dataRenderer-dc.js"
                    },
                    {
                        "name": "textBox-dataAdapter",
                        "src": "js/ui/textBox-dataAdapter-dc.js",
                        "dependencies": ["textBox"]
                    },
                    {
                        "name": "label-dataAdapter",
                        "src": "js/ui/label-dataAdapter-dc.js",
                        "dependencies": ["label"]
                    },
                    {
                        "name": "codeList-dataAdapter",
                        "src": "js/ui/codeList-dataAdapter-dc.js",
                        "dependencies": ["codeList"]
                    },
                    {
                        "name": "comboBox-dataAdapter",
                        "src": "js/ui/comboBox-dataAdapter-dc.js",
                        "dependencies": ["comboBox"]
                    },
                    {
                        "name": "dataGrid-dataAdapter",
                        "src": "js/ui/dataGrid-dataAdapter-dc.js",
                        "dependencies": ["dataGrid"]
                    },
                    {
                        "name": "editableGrid-dataAdapter",
                        "src": "js/ui/editableGrid-dataAdapter-dc.js",
                        "dependencies": ["editableGrid"]
                    },
                /**
                 * 拼音搜索支持
                 */
                    {
                        "name": "pinyin",
                        "src": "js/ui/pinyin.js"
                    }
                ],
                parse: function () {
                    var content = arguments[0], componentNames = [];
                    if (content) {
                        for (var name in content) {
                            componentNames.push(name);
                        }
                        return "(function($){" +
                            "if($.spark && $.spark.ui){" +
                            "$.spark.ui.components=" + JSON.stringify(componentNames) + ";"+
                            "$.spark.ui.templates = $.extend({},$.spark.ui.templates," + JSON.stringify(content) + ");" +
                            "}" +
                            "})(jQuery);";
                    } else {
                        return "";
                    }
                }
            }
        },
        concat: {
            dist: {
                dest: 'dest/adam.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! adam v0.1-Alpha <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dest/adam.js',
                dest: 'dest/adam.min.js'
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['hitina_dependency']);
};