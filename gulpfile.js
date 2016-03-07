var gulp              = require('gulp');
var browserify	      = require('gulp-browserify');
var webserver	      = require('gulp-webserver');
var spacebars	      = require('spacebars-compiler');



gulp.task('templates', function(done)
{
	// Compile templates
	spacebars.directory({
		dir       : 'templates',
		output	  : 'lib/templates.js',
		recursive : true,
		prefix    : ''
	});
	done();
});

//Browserify output
gulp.task('browserify', function()
{
	// Single entry point to browserify 
	return gulp.src('lib/index.js')
		.pipe(browserify())
		.pipe(gulp.dest('html'));
});


//Opens a webserver in the output dir
gulp.task('serve', function()
{
	return gulp.src('html')
		.pipe(webserver({
			port             : 3000,
			livereload       : false,
			directoryListing : false,
			open             : true
		}));
});


// Default task
gulp.task('default', gulp.series(['templates','browserify','serve']));
