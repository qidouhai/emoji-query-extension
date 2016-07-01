var fetch = require('node-fetch');
var urlencode = require('urlencode');

module.exports = function(q, cb){
  console.log('start query words');
  q = urlencode(q,'utf8');
  var emoji = 'http://emoji.getdango.com/api/emoji?q=';
  var trans = `http://fanyi.youdao.com/openapi.do?keyfrom=emoji-test&key=703668665&type=data&doctype=jsonp&version=1.1&q=${q}`;
  // set timeout.
  var opt = {
    timeout: 5000
  };

  fetch(trans, opt)
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(!json) return cb(null, []);
      if(json.errorCode) return cb(new Error('Translation error'));
      if(json.translation && json.translation.length > 0){
        var translation = json.translation[0];
        console.log('get translation then fetch emojis');
        return fetch(emoji + urlencode(translation), opt);
      }else{
        return cb(null,[]);
      }
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.results){
        var emojis = json.results.map(function(i){
          return i.text;
        });
        cb(null, emojis);
      }else{
        return cb(null,[]);
      }
    })
    .catch(cb);
};
