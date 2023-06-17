var callback = function (args) {
    console.log(args)
    console.log('验证成功');
};
var expiredCallback = function (args) {
    console.log(args)
    console.log('验证过期');
};
var errorCallback = function (args) {
    console.log(args)
    console.log('验证失败');
};

var widgetId;
var onloadCallback = function () {
    widgetId = grecaptcha.render('robot', {
        'sitekey': '6Lfy650mAAAAAMgXobC2bGFQWqXPXJMiXbmn5h1a',
        'theme': 'light',
        'size': 'normal',
        'callback': callback,
        'expired-callback': expiredCallback,
        'error-callback': errorCallback
    });
};

function getResponseFromRecaptcha() {
    var responseToken = grecaptcha.getResponse(widgetId);
    if (responseToken.length == 0) {
        document.write("<h2>人机验证失败。</h2>")
        return 0;
    } else {
        dl();

    }
};
function dl() {
        const a = sha512(document.getElementById("username").value);
        const b = sha512(document.getElementById("password").value);
        if (a == "df09aec85d056853f2d9da9c8627db3507f39820594efe303980ac45339f80e2e1430f0f7e639635e7f6b12d185367a3938eaa7b0f2f84cbd857a7375617affc" && b == "df09aec85d056853f2d9da9c8627db3507f39820594efe303980ac45339f80e2e1430f0f7e639635e7f6b12d185367a3938eaa7b0f2f84cbd857a7375617affc") {
            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
                const repeatedGreetings = async () => {
                    document.write("<h2>你好，Administrator！</h2>")
                    await sleep(3000)
                    window.open("https://www.earth2023.top/", "_self")
                }
            repeatedGreetings()
        }
        else if (a == "57f8810c2880a7ff0977cf37e8b664abe4ef36f523cf959f612e3356e794135902238865daee0a0140e845aae2ded173d51048798f91779a9613ffded26743fd" && b == "57f8810c2880a7ff0977cf37e8b664abe4ef36f523cf959f612e3356e794135902238865daee0a0140e845aae2ded173d51048798f91779a9613ffded26743fd") {
            const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
                const repeatedGreetings = async () => {
                    document.write("<h2>你好，Earth2023！</h2>")
                    await sleep(3000)
                    window.open("https://www.earth2023.top/", "_self")
                }
            repeatedGreetings()
        }
        else {
            alert("您的密码或账号有误，请重新输入。")
        }
    }