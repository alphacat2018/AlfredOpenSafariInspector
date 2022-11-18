<!--
 * @Author: caidwang hust_wsc@163.com
 * @Date: 2022-11-18 21:00:33
 * @LastEditors: caidwang hust_wsc@163.com
 * @LastEditTime: 2022-11-18 22:53:10
 * @FilePath: /AlfredOpenSafariInspector/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# AlfredOpenSafariInspector
README [EN](README.md)|[中文](README_zh.md)

通过Alfred 工作流打开IOS 模拟器的检查器。

依赖AppleScript的自动化能力实现快速打开IOS 模拟器的检查器。


# 快速上手

下载[Release](https://github.com/caidwang/AlfredOpenSafariInspector/releases/tag/CN_zh)，双击`Open Safari Inspector.alfredworkflow`进行安装。

默认快捷键：
```script
sf
```

![image](https://github.com/alphacat2018/AlfredOpenSafariInspector/blob/master/openSafariWebInspector.gif)



# 安装要求

- node
- Alfred powerpack
- Safari打开了 “开发” 菜单

## node

通过以下脚本安装node
```script
brew install node
```

## Safari 开发 菜单
如果在Safari菜单中找不到 开发 菜单，可以通过 Safari > 偏好 > 高级 > 在菜单栏展示“开发” 打开
<img src='img/Screen Shot 2022-11-18 22.31.39.png'>

# 问题定位
当遇到安装完成后执行快捷键不生效的情况，可以通过以下方式查看日志定位问题
<img src='img/Screen Shot 2022-11-18 at 22.12.37.png'>

打开Alfred的workflow右上角的爬虫按钮，查看运行日志定位错误，常见错误原因：
- /usr/local/bin/node 不存在
  - 解决方案：通过brew安装或通过ln -s 将已有的node版本软连接到对应位置
- applescript执行异常
  - 解决方案：打开mac的脚本编辑器调试applescript或连同日志提交issue。

# 参考&&来源
- https://github.com/alphacat2018/AlfredOpenSafariInspector