/**
 * HTTP static server configuration for static gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path   = require('path'),
    extend = require('extend'),
    config = require('spa-gulp/config');


// base config
// each profile inherits all options from the "default" profile
module.exports = extend(true, {}, config, {
    default: {
        // listening port
        port: 'auto',

        // option to enable live reloading for different resources
        // true value activates only specific reload instead of the whole page
        live: {
            css: true,
            js:  true,
            img: true
        },

        // false to prevent watch task creation
        // otherwise array of globs to monitor
        watch: [
            path.join(config.default.target, '**', '*'),
            '!' + path.join(config.default.target, '**', '*.md')
        ],

        // info channels
        notifications: {
            popup: {
                info: {
                    icon: path.join(__dirname, 'media', 'info.png')
                },
                warn: {
                    icon: path.join(__dirname, 'media', 'warn.png')
                },
                fail: {
                    icon: path.join(__dirname, 'media', 'fail.png')
                }
            }
        }
    }
});