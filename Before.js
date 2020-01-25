var twitter = require('twitter');
var fs = require('fs');
var twitter = new twitter({
    consumer_key: "kfiLkug9OvQIYdzv5FtS0Fgtq",
    consumer_secret: "3yr8ebzg0XzeNrykTy2Mgfb3sqtwER1abGmPTu1vYMnU317YR6",
    access_token_key: "1218145243440140288-UrQlS3DPQfOJyXmaiR2PyMo2MhQy2C",
    access_token_secret: "HbbeyXdrDzK8DSw9Hza2JAoul7SZ0WiTF4CcZzDB7mLJa"
});
const params = { screen_name: 'Attend_bot', count: 50 };
console.log('@' + params.screen_name);
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