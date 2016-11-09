const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('default', ['webpack', 'copy-static', 'watch-static']);

gulp.task('webpack', () => {
  return gulp.src('src/index.js')
    .pipe(webpack({
      watch: true,
      output: {
        filename: '[name].js',
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
              plugins: ['transform-decorators-legacy']
              //plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-static', () => {
  return gulp.src('src/static/**/*')
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch-static', () => {
  gulp.watch('src/static/**/*', function() {
    gulp.run('copy-static');
  });
});
