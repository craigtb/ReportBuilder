var gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src(['./node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/angular-material/angular-material.min.js',
        './node_modules/lodash/lodash.min.js'])
        .pipe(gulp.dest('./src/main/resources/static/vendor/js'));

    gulp.src(['./node_modules/angular-material/angular-material.min.css'])
        .pipe(gulp.dest('./src/main/resources/static/vendor/css'));

    // gulp.src([//'./node_modules/ux-navigation/dist/fonts/**/*',
    //     './node_modules/uxicon/fonts/**/*'])
    //     .pipe(gulp.dest('./src/main/resources/static/vendor/css/fonts'));
    //
    // gulp.src(['./styleguide/images/**/*',])
    //     .pipe(gulp.dest('./src/main/resources/static/vendor/images'));
});

gulp.task('default', ['copy']);