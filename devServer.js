var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var history = require('connect-history-api-fallback');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

/*app.use(history({
  // verbose: true,
  rewrites: [
    {
      from: /\/assets/,
      to: function (context) {
        var path = context.parsedUrl.pathname;
        return '/bower_components/html/build' + path;
      }
    }
  ],
  disableDotRule: true
}));*/

// app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
