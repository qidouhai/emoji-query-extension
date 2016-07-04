// var fetch = require('node-fetch');
var request = require('superagent');
var urlencode = require('urlencode');
var fetch = require('fetch-jsonp');

function wrapper_request(url,cb){
  request.get(url)
    .withCredentials()
    .timeout(5000)
    .end(cb);
};

function show(data){
  console.log(data);
};

// function
module.exports = function(q, cb){
  console.log('start query words');
  q = urlencode(q,'utf8');
  var emoji = 'http://emoji.getdango.com/api/emoji?q=';
  var trans = `http://fanyi.youdao.com/openapi.do?keyfrom=emoji-test&key=703668665&type=data&doctype=jsonp&callback=show&version=1.1&q=${q}`;

  fetch(trans)
    .then(function(res){
      console.log(res);
      return res.json();
    })
    .then(function(json){
      console.log(json);
      cb(null,[]);
    })
    .catch(function(err){
      cb(err);
    })
  // wrapper_request(trans,function(err,res){
  //   if(err) return cb(err);
  //   if(!res.ok) return cb(null,[]);
  //   console.log(res.body);
  //   var json = res.body;
  //   if(!json) return cb(null, []);
  //   if(json.errorCode) return cb(new Error('Translation error'));
  //   if(json.translation && json.translation.length > 0){
  //     var translation = json.translation[0];
  //     console.log('get translation then fetch emojis');
  //     wrapper_request(emoji + urlencode(translation), function(err,res){
  //       if(err) return cb(err);
  //       if(!res.ok) return cb(null,[]);
  //       if(res.body.results){
  //         var emojis = res.body.results.map(function(i){
  //           return i.text;
  //         });
  //         cb(null, emojis);
  //       }else{
  //         return cb(null,[]);
  //       }
  //     })
  //   }else{
  //     return cb(null,[]);
  //   }
  // });

  // fetch(trans, opt)
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .then(function(json){
  //     if(!json) return cb(null, []);
  //     if(json.errorCode) return cb(new Error('Translation error'));
  //     if(json.translation && json.translation.length > 0){
  //       var translation = json.translation[0];
  //       console.log('get translation then fetch emojis');
  //       return fetch(emoji + urlencode(translation), opt);
  //     }else{
  //       return cb(null,[]);
  //     }
  //   })
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .then(function(json){
  //     if(json.results){
  //       var emojis = json.results.map(function(i){
  //         return i.text;
  //       });
  //       cb(null, emojis);
  //     }else{
  //       return cb(null,[]);
  //     }
  //   })
  //   .catch(cb);
};
