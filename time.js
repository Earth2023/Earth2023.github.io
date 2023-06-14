function time () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var element = document.getElementById('time_Label')
    element.innerHTML = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
setInterval('time()', 1000)
