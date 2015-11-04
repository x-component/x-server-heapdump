'use strict';

var log = require('x-log');

module.exports = function(server){
	if (/memory/.test(process.env.NODE_ENV)) {
		var memwatch = require('memwatch');
		memwatch.on('stats', function(stats) { log && log.info('memwatch stats',stats); });
		memwatch.on('leak' , function(info)  { log && log.info('memwatch leak',info);   });
		log && log.info('Started memwatch logging');
	}
}
