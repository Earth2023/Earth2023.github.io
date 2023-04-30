function dl() {
        const a = hex_md5(document.getElementById("username").value);
        const b = hex_md5(document.getElementById("password").value);
        if (a == "e04c3da731abdee912f54229fc322f5e" && b == "e04c3da731abdee912f54229fc322f5e") {
            alert("你好，管理员！")
        }
        else if (a == "826167ec9d56522f4ea3289e3f279e73" && b == "826167ec9d56522f4ea3289e3f279e73") {
            alert("你好，Earth2023！")
        }
        else {
            alert("您的密码或账号有误，请重新输入。")
        }
    }