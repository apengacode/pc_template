var gulp = require('gulp')
var sftp = require('gulp-sftp-up4')
const conf = require('./project.config')

const argsMap = {}
;(function (...args) {
  const args1 = args[0].slice(2)
  while (args1.length >= 0) {
    const key = args1.shift()
    if (!key) break
    argsMap[key.replace(/\-/gi, '')] = args1.shift()
  }
})(process.argv)
console.log(argsMap, conf)
const srcDist = ['./dist/**']

gulp.task('ftp', function (done) {
  gulp.src(srcDist).pipe(
    sftp({
      ...conf.default,
      // host: '192.168.1.60', // 服务器公网ip
      // user: 'root',
      // pass: 'haiking@nanjing',
      // port: 22,
      remotePath: '/home/www/dist'
    })
  ).on('error', () => { /* Ignore compiler errors */ })

  done()
})

gulp.task(
  'default',
  gulp.series(gulp.parallel('ftp'), function (done) {
    done()
  })
)
