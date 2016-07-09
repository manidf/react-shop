var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('live-server', function() {
	var server = new LiveServer('server/main.js')
	server.start();
})

gulp.task('copy', function(){
	gulp.src(['app/*.css'])
		.pipe(gulp.dest('./.tmp'))
})

gulp.task('bundle',['copy'], function() { // transform JSX to JS
	return browserify({
		// pass the starting point
		entries: 'app/main.jsx',
		debug: true,
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'))
})

gulp.task('serve', ['bundle', 'live-server'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		port: 9001
	})
	gulp.watch(['./.tmp/*.js', './.tmp/*.css', './.tmp/*.html']).on('change', browserSync.reload);
})
