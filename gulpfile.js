var gulp = require('gulp');
var typescript = require('gulp-tsc');
var concat = require('gulp-concat');
var template = require('gulp-template');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject-string');
var tap = require('gulp-tap');
var insert = require('gulp-insert');
var path = require('path');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var rename = require("gulp-rename");


gulp.task('updateWorker',['clean'], () =>{
   gulp.src('src/Workers/*.ts')
        .pipe(typescript())
        //.pipe(uglify())
        .pipe(insert.transform(function (contents, file) {
            var comment = path.basename(file.path).substring(0, (path.basename(file.path).length - 3)) + "={js:`";
            return comment + contents;
        }))
        .pipe(inject.prepend("public "))
        .pipe(inject.append("`};"))
        .pipe(concat('workers.service.ts'))
        .pipe(inject.prepend(`import { Injectable } from '@angular/core'; @Injectable() export class WorkersService {  constructor() { }`))
        .pipe(inject.append('};'))
        .pipe(gulp.dest('src/app/services'))
}
);
gulp.task('clean',()=>{
    return gulp.src('src/app/services/workers.service.ts')
    .pipe(clean());
});




gulp.task('updatedWorker',['clean'],()=>{
    gulp.src(['src/model/moviemodel.ts','src/Workers/**/*.ts'])
    .pipe(concat('mainWorker.ts'))
    .pipe(replace(/export /g,' '))
    .pipe(replace(/import(.*?)*;/g,' '))
    .pipe(gulp.dest('src/subworkers/dist/'))
    .pipe(typescript())
    .pipe(gulp.dest('src/subworkers/dist/'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('src/dist'))
    // .pipe(insert.transform(function (contents, file) {
    //         var comment = path.basename(file.path).substring(0, (path.basename(file.path).length - 3)) + "={js:`";
    //         return comment + contents;
    //     }))
    // .pipe(inject.prepend("public "))
    // .pipe(inject.append("`};"))
    // .pipe(rename({ basename: 'workers.',suffix:'service.',extname:'ts' }))
    // .pipe(inject.prepend(`import { Injectable } from '@angular/core'; @Injectable() export class WorkersService {  constructor() { }`))
    // .pipe(inject.append('};'))
    // .pipe(gulp.dest('src/app/services'))
});



// gulp.task('watcher', function() {
//     gulp.watch('src/Workers/*.ts',['updateWorker']);
// });
// gulp.task('default', function() {
//     gulp.start(['watcher']);
//     // content
// });