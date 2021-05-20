(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{466:function(t,a,s){"use strict";s.r(a);var n=s(1),i=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/3G",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),s("OutboundLink")],1)]),s("p",[t._v("3G（3rd-Generation）, 第三代移动通信技术，规范名称IMT-2000（International Mobile Telecommunications-2000 ）, 是指支持高速数据传输的蜂窝网络移动电话技术。3G服务能够同时发送声音及信息（邮箱、即时通信等）。3G的代表特征是提供高速数据业务，速率一般在几百kbps以上。")]),t._m(1),t._m(2),s("p",[t._v("标准\nWCDMA\nCDMA2000\nTD-SCDMA")]),t._m(3),s("p",[t._v("Android的四层架构，包括Linux2.6内核层、核心库层、应用框架层framework、应用层")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[s("a",{attrs:{href:"http://www.androiddevtools.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android中文网"),s("OutboundLink")],1),s("br"),s("a",{attrs:{href:"https://blog.csdn.net/naipeng/article/details/72722682",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android开发环境的搭建步骤"),s("OutboundLink")],1)]),s("p",[t._v("SDK(Standar Develop Kits, 标准开发工具集)\nADT(Android Develop kits, 安卓开发工具集)")]),t._m(14),s("p",[t._v("SDK(Software Development Kit，软件开发工具包)")]),t._m(15)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"什么是3g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是3g","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是3G")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("蜂窝网络（Cellular Network）：又称移动网络（mobile network），是一种移动通信硬件架构，分为模拟蜂窝网络和数字蜂窝网络。由于构成网络覆盖的各通信基地台的信号覆盖呈六边形，从而使整个网络像一个蜂窝而得名。\nkbsp(千兆特每秒)：用于表示数据传输速率（码率）")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("视频教程笔记")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"android的framework简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android的framework简介","aria-hidden":"true"}},[this._v("#")]),this._v(" Android的framework简介")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("framework层提供了许多应用程序开发时需要的API，比如Activity、Service、Notification等")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("framework功能")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" 用Java语言去编写一些模块封装成框架，供"),s("span",{attrs:{class:"token constant"}},[t._v("APP")]),t._v("层开发使用\n"),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" 用Java Native Interface调用core lib层的本地方法，"),s("span",{attrs:{class:"token constant"}},[t._v("JNI")]),t._v("的库在Dalvik虚拟机启动时加载进去。Dalvik会直接去寻找这个"),s("span",{attrs:{class:"token constant"}},[t._v("JNI")]),t._v("方法调用\n\n两种方法的结合达到了Java方法和操作系统的互相通信\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("framework包含的API")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Activity Manager`")])]),t._v("：用来管理应用程序生命周期并提供常用的导航回退功能\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Window Manager`")])]),t._v("：提供一些常用的访问手机屏幕的方法，比如屏幕的透明度、亮度、背景\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Content Providers`")])]),t._v("：使得应用程序可以访问两一个应用程序的数据（如联系人的数据库），或者共享它们的数据\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`View System`")])]),t._v("：用来构建应用程序界面的"),s("span",{attrs:{class:"token constant"}},[t._v("API")]),t._v("，包括列表、网络、文本框、按钮，甚至可以嵌入web浏览器\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Notification Manager`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 使得应用程序在状态栏中显示自定义的显示信息\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Package Manager`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 提供对系统安装包的访问，包括安装、卸载应用程序，查询permission相关信息，查询Application相关消息等。\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`TelePhony Manager`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 主要提供了一系列用于访问与手机通讯录相关的状态和信息的方法，查询电信网络状态信息，"),s("span",{attrs:{class:"token constant"}},[t._v("SIM")]),t._v("卡信息。\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Resource Manager`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 提供非代码资源的访问，如本地字符串，图形，和布局文件\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Location Manager`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 提供设备的地址位置的获取方式，如"),s("span",{attrs:{class:"token constant"}},[t._v("GPS")]),t._v("导航用到的位置服务。\n"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`XMPP Service`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 可扩展通讯和表示协议，前身为Jabber，提供即使通信服务。例如推送功能Google Talk。\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"两种虚拟机的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种虚拟机的比较","aria-hidden":"true"}},[this._v("#")]),this._v(" 两种虚拟机的比较")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"dalvik-vm-和-jvm比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dalvik-vm-和-jvm比较","aria-hidden":"true"}},[this._v("#")]),this._v(" Dalvik VM 和 JVM比较")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("区别")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("1 DalvikVM是针对手机开发的虚拟机，主要目的是避免版权问题而重写的JAVA虚拟机，以及由于安卓系统是基础移动设备的，内存比较小，处理器比较弱，对程序的执行进行进一步优化\n\n2 编译后的文件\nJVM：.java=>.class=>.jar\nDalvikVM: .java=>.class=>.dex=>.odex\n\n3 基于的框架\nJVM：基于栈的架构（栈是连续的内存结构）\nDalvikVM: 基于寄存器的架构（寄存器存在于CPU中，访问速度要快）\nDalvikVM比普通虚拟机的执行效率要高\n\n头信息：编译的版本，常量，字段、方法、属性，\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"sdk的下载-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk的下载-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" SDK的下载&简介")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" 安装"),s("span",{attrs:{class:"token constant"}},[t._v("JDK")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Java Development Kit"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" 安装Eclipse\n"),s("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" 下载并安装AndroinSDK\n"),s("span",{attrs:{class:"token number"}},[t._v("4")]),t._v(" 为Eclipse安装"),s("span",{attrs:{class:"token constant"}},[t._v("ADT")]),t._v("插件\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("创建Android模拟器")]),s("li",[t._v("ddms简介")]),s("li",[t._v("platform-tools简介&常见adb指令")]),s("li",[t._v("Android项目的目录结构")]),s("li",[t._v("Android下apk安装的过程")]),s("li",[t._v("常见adb指令介绍")]),s("li",[t._v("创建模拟器遇到的常见的错误")]),s("li",[t._v("电话拨号器")]),s("li",[t._v("点击时间的4种写法")]),s("li",[t._v("短信发送器")]),s("li",[t._v("相对比距&单位简介")]),s("li",[t._v("线性布局&布局的组合")]),s("li",[t._v("表格布局&绝对布局")]),s("li",[t._v("帧布局")]),s("li",[t._v("测试相关的概念")]),s("li",[t._v("Android下的junit测试框架配置")]),s("li",[t._v("logcal简介")]),s("li",[t._v("保存文件到手机内存")]),s("li",[t._v("Android下手机的访问权限")]),s("li",[t._v("保存文件到SD卡")]),s("li",[t._v("分析setting源码获取SD卡大小")]),s("li",[t._v("sharedpreference")]),s("li",[t._v("xml文件的序列号")]),s("li",[t._v("采用pull解析xml文件")]),s("li",[t._v("采用断点调试方式观察pull解析流程")]),s("li",[t._v("Android下创建一个sqlite数据库")]),s("li",[t._v("sql语句实现数据库的增删改查")]),s("li",[t._v("系统api实现数据库的增删改查&sqlite3的使用")]),s("li",[t._v("数据库的事务")]),s("li",[t._v("listview的入门")]),s("li",[t._v("采用layoutInflater打气孔穿件一个view对象")]),s("li",[t._v("常用数据适配器ArrayAdapter")]),s("li",[t._v("常用数据适配器simpleAdapter")]),s("li",[t._v("数据适配总结")]),s("li",[t._v("内容提供者简介")]),s("li",[t._v("内容提供者详解")]),s("li",[t._v("短信的备份")]),s("li",[t._v("插入一条记录到系统短信应用")]),s("li",[t._v("内容观察者")]),s("li",[t._v("获取系统的联系人信息")]),s("li",[t._v("保存联系人到系统")]),s("li",[t._v("读取系统联系人的一个小细节")]),s("li",[t._v("网络图片查看器")]),s("li",[t._v("anr产生的原理&如何避免")]),s("li",[t._v("Android消息机制的入门")]),s("li",[t._v("网络html查看器")]),s("li",[t._v("字符串乱码")]),s("li",[t._v("采用get方式提交数据到服务器")]),s("li",[t._v("采用post方式提交数据")]),s("li",[t._v("提交数据到服务器中乱码的问题")]),s("li",[t._v("采用httpclient提交数据到服务器")]),s("li",[t._v("异步http框架简介和实现原理")]),s("li",[t._v("异步http框架post提交数据到服务器")]),s("li",[t._v("上传文件到服务器")]),s("li",[t._v("smartImageview&常见开源代码")]),s("li",[t._v("多线程下载的原理")]),s("li",[t._v("多线程断点下载的原理")]),s("li",[t._v("段线程Java代码移植到Android")]),s("li",[t._v("多线程下载文本界面的更新")]),s("li",[t._v("显式意图激活另一个Activity")]),s("li",[t._v("隐式意图激活另一个Activity")]),s("li",[t._v("隐式意图的配置")]),s("li",[t._v("隐式意图和显式意图的使用")]),s("li",[t._v("在不同Activity之间数据传递")]),s("li",[t._v("Activity的生命周期")]),s("li",[t._v("Activity的启动模式")]),s("li",[t._v("Activity横竖屏切换的生命周期")]),s("li",[t._v("开启新的Activity获取它的返回值")]),s("li",[t._v("请求码和结果码的作用")]),s("li",[t._v("利用广播实现ip拨号")]),s("li",[t._v("短信窃听器")]),s("li",[t._v("自定义广播时间&发送自定义广播&广播接受者的优先级")]),s("li",[t._v("采用服务执行长期后台的操作")]),s("li",[t._v("采用服务窃听电话&服务的生命周期")]),s("li",[t._v("Android进程优先级&为什么使用服务")]),s("li",[t._v("服务的生命周期（混合开启）")]),s("li",[t._v("采用aidl绑定远程服务")]),s("li",[t._v("代码注册广播接受者&利用广播调用服务的方法")]),s("li",[t._v("加载大图片到内存")]),s("li",[t._v("获取图片exif信息")]),s("li",[t._v("从gallery获取图片")]),s("li",[t._v("图片画画板")]),s("li",[t._v("图片的旋转")]),s("li",[t._v("图片的平移&镜面")]),s("li",[t._v("图片的合成")]),s("li",[t._v("图片的颜色处理")]),s("li",[t._v("多媒体播放器")]),s("li",[t._v("多媒体播放api")]),s("li",[t._v("人脸识别")]),s("li",[t._v("mediaplayer的生命周期")]),s("li",[t._v("soundpoo简介")]),s("li",[t._v("surfaceView的生命周期")]),s("li",[t._v("播放在线视频")]),s("li",[t._v("视频播放器进度的处理")]),s("li",[t._v("调用系统照相机和录像")]),s("li",[t._v("采用camera拍照")]),s("li",[t._v("常见对话框")]),s("li",[t._v("notification入门")]),s("li",[t._v("菜单")]),s("li",[t._v("Android下的样式")]),s("li",[t._v("Android下的主题")]),s("li",[t._v("代码编写")]),s("li",[t._v("HTML创建UI")]),s("li",[t._v("帧动画")]),s("li",[t._v("代码创建常见tween动画")]),s("li",[t._v("xml文件定义动画")]),s("li",[t._v("传感器简介")]),s("li",[t._v("9path图形")]),s("li",[t._v("杀死进程")]),s("li",[t._v("apk安装")]),s("li",[t._v("应用程序的反编译")]),s("li",[t._v("动态创建")]),s("li",[t._v("用framework创建 一个选项卡")]),s("li",[t._v("fragment的向下兼容")]),s("li",[t._v("fragment的生命周期")]),s("li",[t._v("fragment的生命周期")]),s("li",[t._v("fragment的之间的通讯")]),s("li",[t._v("应用程序国际化")])])}],!1,null,null,null);a.default=i.exports}}]);