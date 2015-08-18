/*
 * grunt-hitina-dependency
 * https://github.com/hitina/grunt-hitina-dependency
 *
 * Copyright (c) 2015 hu-bo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('hitina_dependency', '', function () {
        var file = grunt.file,
            opts = this.data,
            dependencies = opts.dependencies,
            queue = [],
            templates = {},
            sources = [],
            parse = opts.parse;
        for (var i = 0; dependencies && i < dependencies.length; i++) {
            var dependency = dependencies[i],
                name = dependency["name"],
                _dependencies = dependency["dependencies"],
                template = dependency["template"],
                src = dependency["src"],
                index = queue.indexOf(name);
            if (template && template.length > 0 && file.isFile(template)) {
                templates[name] = file.read(template);
            }
            if (src && src.length > 0 && file.isFile(src)) {
                sources[name] = src;
            }
            for (var j = 0; _dependencies && j < _dependencies.length; j++) {
                var item = _dependencies[j];
                if (index == -1) {
                    if (queue.indexOf(item) == -1) {
                        queue.push(item);
                    }
                } else {
                    var t = queue.indexOf(item);
                    if (t == -1) {
                        queue.splice(index + j, 0, item);//增加到name前面
                    } else if (t > index) {//增加到name前面
                        queue.splice(t, 1);
                        queue.splice(index + j, 0, item);
                    }
                }
            }

            if (index == -1) {
                queue.push(name);
            }
        }
        grunt.log.writeln("dependencies queue :" + queue.join(","));
        var content = parse.apply(grunt, [templates]);
        file.write("dest/template.js", content && content.length > 0 ? content.toString() : "");

        var _sources = ["dest/template.js"];
        for (var i = 0; i < queue.length; i++) {
            var source = sources[queue[i]];
            if (source && source.length > 0) {
                _sources.push(source);
            }
        }

        var concatConfig = grunt.config.get("concat");
        if (concatConfig && concatConfig.dist) {
            concatConfig.dist.src = _sources
        }
        grunt.log.writeln("concat config :" + JSON.stringify(concatConfig));
        grunt.config.set("concat", concatConfig);

    });

};
