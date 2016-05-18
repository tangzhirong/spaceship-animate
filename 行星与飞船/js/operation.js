/**
 * Created by tzr4032369 on 2016/4/13.
 */

/**
 * 操作面板
 */
(function() {
    //按钮事件
    var buttonClick = function() {
        var orbit = this.parentNode.dataset.id - 0;
        var message = this.dataset.type;
        switch(message) {
            case 'create':
                if(this.dataset.status == 'create') {
                    commander.createSpaceShip(orbit);
                    this.dataset.status = 'created';
                    this.innerHTML = '自爆销毁';
                    this.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.disabled = false;
                    this.nextElementSibling.nextElementSibling.nextElementSibling.disabled = false;
                } else {
                    commander.destroy(orbit);
                    this.dataset.status = 'create';
                    this.innerHTML = '创建飞船';
                    this.nextElementSibling.disabled = true;
                    this.nextElementSibling.dataset.status = 'start';
                    this.nextElementSibling.innerHTML = '飞行';
                    this.nextElementSibling.nextElementSibling.disabled = true;
                    this.nextElementSibling.nextElementSibling.value = 1;
                    this.nextElementSibling.nextElementSibling.nextElementSibling.disabled = true;
                }
                break;
            case 'drive':
                if(this.dataset.status == 'start') {
                    commander.start(orbit);
                    this.dataset.status = 'stop';
                    this.innerHTML = '停止';
                } else {
                    commander.stop(orbit);
                    this.dataset.status = 'start';
                    this.innerHTML = '飞行';
                }
                break;
            case 'rate':
                var value = this.previousElementSibling.value - 0;
                commander.setRate(orbit, value);
                break;
        }
    };
    //绑定按钮事件
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClick);
    }
})();