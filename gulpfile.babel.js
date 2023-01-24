import gulp from "gulp";
import del from "del";
//import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

//sass.compiler = require("node-sass");
const sass = require("gulp-sass")(require("node-sass"));

const routes = {
  css: {
    watch: "src/scss/base/*",
    src: "src/scss/base/styles.scss",
    dest: "dist/base/css",
  },
  tenxnineteen: {
    watch: "src/scss/tenxnineteen/*",
    src: "src/scss/tenxnineteen/styles.scss",
    dest: "dist/tenxnineteen/css",
  },
  besthorrorscenes: {
    watch: "src/scss/besthorrorscenes/*",
    src: "src/scss/besthorrorscenes/styles.scss",
    dest: "dist/besthorrorscenes/css",
  },
  posterclone: {
    watch: "src/scss/poster-clone/*",
    src: "src/scss/poster-clone/styles.scss",
    dest: "dist/posterclone/css",
  },
};

const styles = () =>
  gulp
    .src(routes.css.src, { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const tenxnineteen = () =>
  gulp
    .src(routes.tenxnineteen.src, { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.tenxnineteen.dest));

const besthorrorscenes = () =>
  gulp
    .src(routes.besthorrorscenes.src, { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.besthorrorscenes.dest));

const posterclone = () =>
  gulp
    .src(routes.posterclone.src, { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.posterclone.dest));

const watch = () => {
  gulp.watch(routes.css.watch, styles);
  gulp.watch(routes.tenxnineteen.watch, tenxnineteen);
  gulp.watch(routes.besthorrorscenes.watch, besthorrorscenes);
  gulp.watch(routes.posterclone.watch, posterclone);
};

const clean = () =>
  del([
    "dist/css",
    "dist/base/styles.css",
    "dist/tenxnineteen/styles.css",
    "dist/besthorrorscenes/styles.css",
    "dist/posterclone/styles.css",
  ]);

const prepare = gulp.series([clean]);

const assets = gulp.series([
  styles,
  tenxnineteen,
  besthorrorscenes,
  posterclone,
]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);
