var glob = require("glob")
var fs = require("fs")

glob("**/*.html", function (er, files) {
  var links = [];
  var filesArr = files.toString().split(",");
  filesArr.forEach(function(f) {
  	links.push('<br><a href="' + f + '">' + f + '</a>');
  });
  fs.writeFileSync('sitemap.html', links);
});