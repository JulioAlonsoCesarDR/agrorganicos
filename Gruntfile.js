module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	 
	grunt.initConfig({
	    php: {
	        dist: {
	            options: {
	                port: 80,
	                keepalive: true
	            }
	        }
	    },
	    'ftp-deploy': {
	    	build: {
	    		auth: {
	    			host: 'ftp.zoraba.mx',
	    			port: 21,
	    			authKey: 'key1'
	    		},
	    		src: './',
	    		dest: '/httpdocs',
	    		exclusions: [
	    			'./.DS_Store',
	    			'./Thumbs.db',
	    			'./node_modules',
	    			'.ftppass',
	    			'./bower.json',
	    			'./package.json',
	    			'./README.md',
	    			'./.htaccess'
	    		]
	    	}
	    }
	});
	 
	grunt.registerTask('default', ['php']);
	grunt.registerTask('deploy', ['ftp-deploy']);
};