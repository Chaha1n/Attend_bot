var twitter = require('./Twitter.js')();
const fs = require('fs');

//メンションされた時の処理
require("./Mention.js")(twitter);
//フォロワーリストの取得
const params = { screen_name: 'Attend_bot', count: 50 };
require('./GetList.js')(twitter,params);

//自動でフォローバック
require('./followers.js').AutoFollow(twitter);