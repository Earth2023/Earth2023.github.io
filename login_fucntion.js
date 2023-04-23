function dl() {
        const a = document.getElementById("username").value;
        const b = document.getElementById("password").value;
        if (a == "administrator" && b == "administrator") {
            alert("你好，管理员！")
        }
        else if (a == "Earth2023" && b == "Earth2023") {
            alert("你好，Earth2023！")
        }
        else {
            alert("用户，抱歉，不认识您。")
        }
    }