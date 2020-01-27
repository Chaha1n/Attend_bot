module.exports = function (twitter) {
    var date = new Date();
    var cronJob = require('cron').CronJob;
    const PostTime = '0 0 7-9 * * 1-5';

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getUTCHours + 9;

    new CronJob({
        cronTime: PostTime,
        onTick: function () {
            twitter.post('statuses/update', {
                status: month+"月 "+day+"日 "+hour+"時 00 分です。出席してください。"
            }, (err, tweet, response) => {
                if (err) {
                    return console.log(err);
                }
            })
        },
        start:true
    })
}