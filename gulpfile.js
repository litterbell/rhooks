const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

// 实现clean
gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});



// 实现esm ts -> js compiler
gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  // ts -> js esnext -> es5 bable js compiler 在babel前 esnext 垫片 runtime
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 实现 commonjs esm -> cjs
gulp.task('cjs', function () {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

// 实现d.ts 类型声明

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

gulp.task('copyReadme', async function () {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme');