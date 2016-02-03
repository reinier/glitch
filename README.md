# Static website boilerplate

Boilerplate for static websites with support for publishing to github-pages.

## Inside this boilerplate
- [Sass](http://sass-lang.com) parser with:
  - [Bourbon](http://bourbon.io)
  - [Neat](http://neat.bourbon.io)
  - [Bitters](http://bitters.bourbon.io)
- [Swig](http://paularmstrong.github.io/swig/) template parsing with [markdown support](https://github.com/mvhenten/swig-marked)
- Local development server
- Live reload
- Deploy to [gh-pages](https://pages.github.com)
- Optimize images

## Development instructions

### Needed on your computer:
- Node

### Run when starting:
- `npm install`

### Run when developing:
- `gulp work` when you want to kickstart Sublime Text and Google Chrome    
or    
- `gulp` and manually go to local test server [localhost:8080](http://localhost:8080)

### Run to deploy to gh-pages branch:
- `gulp publish`
