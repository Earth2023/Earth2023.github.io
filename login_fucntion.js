﻿var callback = function (args) {
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
        'sitekey': '6Lcf0Z0mAAAAAEygikGp6EX1JRgynQZFYymwGHZP',
        'theme': 'light',
        'size': 'compact',
        'callback': callback,
        'expired-callback': expiredCallback,
        'error-callback': errorCallback
    });
};

function getResponseFromRecaptcha() {
    var responseToken = grecaptcha.getResponse(widgetId);
    if (responseToken.length == 0) {
        alert("人机验证失败。")
        return 0;
    } else {
        dl();

    }
};
function dl() {
        const a = sha512(document.getElementById("username").value);
        const b = sha512(document.getElementById("password").value);
        if (a == "df09aec85d056853f2d9da9c8627db3507f39820594efe303980ac45339f80e2e1430f0f7e639635e7f6b12d185367a3938eaa7b0f2f84cbd857a7375617affc" && b == "df09aec85d056853f2d9da9c8627db3507f39820594efe303980ac45339f80e2e1430f0f7e639635e7f6b12d185367a3938eaa7b0f2f84cbd857a7375617affc") {
            alert("你好，管理员！")
        }
        else if (a == "57f8810c2880a7ff0977cf37e8b664abe4ef36f523cf959f612e3356e794135902238865daee0a0140e845aae2ded173d51048798f91779a9613ffded26743fd" && b == "57f8810c2880a7ff0977cf37e8b664abe4ef36f523cf959f612e3356e794135902238865daee0a0140e845aae2ded173d51048798f91779a9613ffded26743fd") {
            alert("你好，Earth2023！")
        }
        else {
            alert("您的密码或账号有误，请重新输入。")
        }
    }