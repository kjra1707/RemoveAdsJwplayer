var _interval, _timer = 0;
_interval = setInterval(function (e) {
    _timer += 200;
    if (typeof jwplayer == 'function') {
        jwplayer().onAdPlay(function () {
            console.log('Đã bỏ qua ADS');
            jwplayer().skipAd();
        });
        clearInterval(_interval);
    }
    if (_timer / 1000 == 5) {
        clearInterval(_interval);
    }
}, 200);