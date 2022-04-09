# 如何简单的在 windows 11 中安装安卓应用程序 APK

<!-- How to simply install APK in Windows -->

首先必须要有一个新版的 **windows 11** 系统，可以去系统更新检测一下有没有可选更新可以下载

2 月 16 日之后可能已经将补丁放到每月更新里面，所以会有看起来没有相同的版本号，但实际可安装的情况

>~~*( Windows11 正式版于 2 月 16 日，微软正式推出 Windows 11的第一个重大更新  **KB5010414**（内部版本 22000.527），安装了这个可选更新后才支持运行安卓 APP。与典型的每月更新不同，是一个可选的更新，点击“获取更新”按钮才会下载，而不会主动下载安装。至此之后的 Windows 正式版已支持安装安卓子系统）*~~
>
>所以我们第一步先去点一下系统的**检查更新**，~~以防没有 **KB5010414** 更新，可能在可选更新里面，也可以看更新历史记录来确认已更新~~

要安装安卓子系统你的设备必须满足以下**特定要求**:

## [设备要求](https://support.microsoft.com/zh-cn/windows/install-mobile-apps-and-the-amazon-appstore-f8d0abb5-44ad-47d8-b9fb-ad6b1459ff6c)

确保你的设备已安装 Windows 11。若要查看电脑所需的最低要求，请转到 [Windows 11 规范和系统要求](https://www.microsoft.com/windows/windows-11-specifications)。若要在设备上使用移动应用，你的电脑还需要满足以下要求：

|设备|要求|
|-|-|
|操作系统|Windows 11 版本 22000.120 或更高版本|
|处理器|英特尔酷睿 i3 第 8 代(最低)或更高版本 / AMD 锐龙 3000(最低)或更高版本 / 高通骁龙8c(最低)或以上|
|内存|8 GB(最低要求) 16 GB(推荐)|
|存储类型|固态硬盘|
|处理器架构|x64 或 ARM64|
|虚拟机平台|需要启用此设置。有关详细信息，请转到[在 Windows 11 电脑上启用虚拟化](https://support.microsoft.com/zh-cn/windows/%E5%9C%A8%E7%94%B5%E8%84%91windows-11%E8%99%9A%E6%8B%9F%E5%8C%96-c5578302-6e43-4b4b-a449-8ced115f58e1)。|

### 更换系统区域至美国

点击设置-时间和语言-语言和区域-国家或地区-更换为**美国**

## 正式安装

### Wsa Toolbox

首先安装一个 **WSA 工具箱**，虽然上架了微软商店，但是搜索不到，可以点击下方链接直接去下载

作者的仓库地址
[makazeu/WsaToolbox](https://github.com/makazeu/WsaToolbox)
(本仓库的作用是用来收集反馈以及发布新版本)(注：不是开源)

[![Microsoft Store](https://img.shields.io/badge/download-%E4%B8%8B%E8%BD%BD%20WSA%20%E5%B7%A5%E5%85%B7%E7%AE%B1-magenta.svg?label=Microsoft%20Store&logo=Microsoft&style=for-the-badge&color=11a2f8)](https://www.microsoft.com/zh-cn/p/wsa-toolbox/9ppsp2mkvtgt "Microsoft Store")

<!-- [![Wsa Toolbox](./photo/Microsoft-Store/WSA-toolbox.png#gh-light-mode-only)](https://www.microsoft.com/zh-cn/p/wsa-toolbox/9ppsp2mkvtgt#gh-light-mode-only) -->
[![Wsa Toolbox](./photo/Microsoft-Store/WSA-toolbox-dark.png#gh-dark-mode-only)](https://www.microsoft.com/zh-cn/p/wsa-toolbox/9ppsp2mkvtgt#gh-dark-mode-only)

打开 **WSA 工具箱**，点击 **WSA 应用商店页面**，因为现在直接用网页打开没有下载的权限，也无法唤起应用，导致无法下载，所以现在使用 **WSA 工具箱**打开下载安卓子程序的链接

<!-- ![Wsa Toolbox home](./photo/WSA-Toolbox/WSA-toolbox-wsa-store.png#gh-light-mode-only) -->
![Wsa Toolbox home](./photo/WSA-Toolbox/WSA-toolbox-wsa-store-dark.png#gh-dark-mode-only)

### Windows Subsystem for Android™

点击安装，安装 **windows 安卓子系统**(无论下载安卓子系统还是下载亚马逊应用商店都会自动安装另一个)

<!-- ![wsa](./photo/Microsoft-Store/Windows-Subsystem-for-Android™.png#gh-light-mode-only) -->
![wsa](./photo/Microsoft-Store/Windows-Subsystem-for-Android™-dark.png#gh-dark-mode-only)

[![Microsoft Store](https://img.shields.io/badge/download-%E4%B8%8B%E8%BD%BD%20%E9%80%82%E7%94%A8%E4%BA%8E%20Android%E2%84%A2%EF%B8%8F%20%E7%9A%84%20Windows%20%E5%AD%90%E7%B3%BB%E7%BB%9F-magenta.svg?label=Microsoft%20Store&logo=Microsoft&style=for-the-badge&color=11a2f8)](https://www.microsoft.com/zh-cn/p/windows-subsystem-for-android-with-amazon-appstore/9p3395vx91nr "Microsoft Store")

[![Microsoft Store](https://img.shields.io/badge/download-%E4%B8%8B%E8%BD%BD%20Amazon%20Appstore-magenta.svg?label=Microsoft%20Store&logo=Microsoft&style=for-the-badge&color=11a2f8)](https://www.microsoft.com/zh-cn/p/amazon-appstore/9njhk44ttksx "Microsoft Store")

<!-- [![Microsoft Store](https://img.shields.io/badge/download-%E8%8E%B7%E5%8F%96%20%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97-magenta.svg?label=Microsoft%20Store&logo=Microsoft&style=for-the-badge&color=11a2f8)](ms-windows-store://pdp/?productid=9NJHK44TTKSX "Microsoft Store") -->

### APK Installer

有了安卓子系统就可以安装安卓应用了，不过想自己安装是需要 ADB 命令的

所以我们可以安装一个方便的 **APK 安装程序**,***安装完成后就可以直接双击安装 APK 文件了***

你可以点击下载安装 **APK 安装程序**,这个软件本身也在 GitHub 中开源
[Paving-Base/APK-Installer](https://github.com/Paving-Base/APK-Installer)

[![Microsoft Store](https://img.shields.io/badge/download-%E4%B8%8B%E8%BD%BD%20APK%20%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F-magenta.svg?label=Microsoft%20Store&logo=Microsoft&style=for-the-badge&color=11a2f8)](https://apps.microsoft.com/store/detail/9P2JFQ43FPPG "Microsoft Store")

也可以在微软商店里面搜索 **APK 安装程序**，找到由 **wherewhere** 开发的这个版本，虽然商店里面有很多安装程序，但那些安装程序要么是英文的，要么有特别多的广告，每次安装都显示广告，那些软件的样子和这个一模一样，估计都是套壳加了个广告

<!-- [![APK-Installer](./photo/Microsoft-Store/APK-Installer.png#gh-light-mode-only)](https://apps.microsoft.com/store/detail/9P2JFQ43FPPG#gh-light-mode-only) -->
[![APK-Installer](./photo/Microsoft-Store/APK-Installer-dark.png#gh-dark-mode-only)](https://apps.microsoft.com/store/detail/9P2JFQ43FPPG#gh-dark-mode-only)
