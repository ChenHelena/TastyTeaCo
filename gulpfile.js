// 引入套件 及 套件API
// eslint-disable-next-line no-undef
const gulp = require('gulp');
// 任務一
function copyfile() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
}
// 輸出任務
// eslint-disable-next-line no-undef
exports.default = gulp.series(copyfile);