module.exports = {

	js: ['./client/**/*.js'],

	app: ['./client/app.js'],

	less: ['./less/*.less'],

	test: ['./test/specs/**/*.js'],

	json: ['./docs/raw/*.json'],

	public: {
		js: ['./public/javascript/**/*.js'],
		css: ['./public/stylesheets/**/*.css'],
		html: ['./public/**/*.html']
	},

	documentation: {
		index: './templates/index.html',
		template: './templates/doc.html',
		data: './docs/raw/'
	}
};
