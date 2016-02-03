/* ---------------------------------------
    CONFIG
   --------------------------------------- */

// Project paths
var app               = './app/';
var build             = './build/';
var dist              = './dist/';
var node_modules      = './node_modules/';
var bower_components  = './bower_components/';

module.exports = {
  styles: {
    source: app+'**/*.scss',
    build: build,
    dist: dist,
    sass: {
      includePaths: [
        bower_components+'bourbon/app/assets/stylesheets',
        bower_components+'neat/app/assets/stylesheets',
        app+'styles/'
      ]
    }
  },

  javascript: {
    source: app+'js/**/*',
    build: build+'js/',
    dist: dist+'js/'
  },

  images: {
    source: app+'assets/**/*',
    build: build+'assets/',
    dist: dist+'assets/'
  },

  templates: {
    source: [app+'**/*.html','!'+app+'_layouts/*','!'+app+'_chunks/*'],
    build: build,
    dist: dist
  },

  watch: {
    source: {
      styles : app+'**/*.scss',
      templates : app+'**/*.html',
      javascript : app+'js/**/*'
    }
  },

  connect: {
    server: build
  },

  cname: {
    cname: 'www.glitch.show',
    dist: dist
  },

  clean: {
    all: [build, dist, './.sass-cache/'],
    build: build,
    dist: dist
  },

  dist: {
    deploy: dist
  }
}
