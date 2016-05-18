/**
 * Created by tzr4032369 on 2016/4/13.
 */


/**
 * 获取时间
 */
function getTime() {
    var date = new Date();
    var year = ("0000" + date.getFullYear()).substr(-4);
    var month = ("00" + (date.getMonth() + 1)).substr(-2);
    var day = ("00" + date.getDay()).substr(-2);
    var hour = ("00" + date.getHours()).substr(-2);
    var minute = ("00" + date.getMinutes()).substr(-2);
    var second = ("00" + date.getSeconds()).substr(-2);
    var millisecond = ("000" + date.getMilliseconds()).substr(-3);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + "." + millisecond;
}
/**
 * 控制台输出
 * @param message 消息
 * @param colour 颜色
 */
var consoleText = document.getElementById("console-text");
function log(message, colour) {
    var date = new Date();
    var p = document.createElement("p");
    p.innerHTML = getTime() + " ";
    var span = document.createElement("span");
    span.innerHTML = message;
    span.style.color = colour;
    p.appendChild(span);
    consoleText.appendChild(p);
    console.log("%c" + message, "background-color:" + colour);
    consoleText.scrollTop = consoleText.scrollHeight;
}