var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		cleanCSS       = require('gulp-clean-css'),
		bourbon        = require('node-bourbon');

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
	browserSync({
		proxy: "test.loc/portf",
		notify: true
	});
});

// Компиляция stylesheet.css
gulp.task('sass', function() {
	return gulp.src('css/*.sass')
		.pipe(sass({
			includePaths: bourbon.includePaths
		}).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('**/*.css', browserSync.reload);
	gulp.watch('css/**/*.sass', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);