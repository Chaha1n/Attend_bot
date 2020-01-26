module.exports = function(twitter,params){;
    var fs = require('fs');
    console.log('@' + params.screen_name);
    //直近50人のフォロワー一覧を取得
    twitter.get('followers/list', params,
        function (error, followers, responce) {
            if (error) {
                console.log(error);
            }
            else {
                fs.writeFileSync("followers.json", JSON.stringify(followers) + "\n", "utf-8");
                console.log(responce);
            }
        }
    );
}