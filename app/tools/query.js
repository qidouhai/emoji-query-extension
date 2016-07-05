var request = require('superagent');
var urlencode = require('urlencode');
var jsonp = require('jsonp');

module.exports = function(q, cb){
  q = urlencode(q,'utf8');
  var emojiUrl = 'http://emoji.getdango.com/api/emoji?q=';
  var translateUrl = `https://fanyi.youdao.com/openapi.do?keyfrom=emoji-test&key=703668665&type=data&doctype=jsonp&callback=_jp&version=1.1&q=${q}`;

  jsonp(translateUrl, {
    timeout: 5000,
    name: '_jp'
  }, function(err, data){
    if(err) return cb(err);
    if(data.errorCode) return cb(new Error(`tanslation error, code: ${data.errorCode}`));
    if(data.translation && data.translation.length > 0){
      var translation = data.translation[0];
      // console.log(translation);
      request.get(emojiUrl + urlencode(translation))
        .timeout(5000)
        .accept('json')
        .end(function(err, res){
          if(err) return cb(err);
          var emojis = res.body.results.map(function(item){
            return item.text;
          });
          return cb(null, emojis);
        })
    }else{
      return cb(null,[]);
    }
  });
};
