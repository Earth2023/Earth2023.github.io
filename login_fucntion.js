function dl() {
        const a = document.getElementById("username").value;
        const b = document.getElementById("password").value;
        if (a == "administrator" && b == "administrator") {
            alert("你好，管理员！")
        }
        else if (a == "2ca688d20df46f23b682215bd2ccd7e59227e7594d6596c91ca835c095287fa6" && b == "2ca688d20df46f23b682215bd2ccd7e59227e7594d6596c91ca835c095287fa6") {
            alert("你好，Earth2023！")
        }
        else {
            alert("用户，抱歉，不认识您。")
        }
    }