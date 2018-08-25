// 沙箱 自执行函数
// 这种模式 最终不也是会有一个 或者几个 全局变量吗
// 不也是 全局变量污染 了吗?
// 全局变量污染:大量增加全局变量
// 使用沙箱(沙盒) 最终还是会增加一个全局变量 这种有没有问题
(function(window){
    let numPlugin = {}
    // let num;
    // let age;
    // let skill;
    numPlugin.install = function (Vue) {
        Vue.component('num-component', {
            data: function () {
                return {
                    num: 0
                }
            },
            template: `
            <div>
                <input type="button" value="add" @click="num++">
                <span>{{num}}</span>
            </div>
            `
        })
    }

    // 暴露出去
    window.numPlugin = numPlugin;
})(window)

