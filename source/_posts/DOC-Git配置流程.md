---
title: Git配置流程
date: 2019-08-25 20:00:00
tags: Git
categories: 技术文档
keywords: 
description: 
top_img: 
comments: 
cover: https://i.loli.net/2019/10/14/J3N8wOX9h1RTC6j.jpg
---


# 安装Git客户端

> [官方网站](https://git-scm.com/ )

# 生成ssh key

```bash
ssh-keygen -t rsa -C "你在github注册的邮箱"
```

> `回车一直按到底`
> 到ssh目录找到`id_rsa.pub`文件，拷贝全部内容
> 登录`github账户`后点击`右上角用户的小三角`,然后点击`settings`,然后点击`SSHandGPG keys`,然后点击`New SSHkey` 按钮,将我们生成的`sshkey` 文件中的内容粘贴到 Key框里,titile名字可以随便起,然后点击 `Add SSH key`即刻。  





# 查看当前版本号

```bash
git --version
```

# 配置个人用户名和邮箱地址

```bash
git config --global user.name "****"
git config --global user.email *****.com
```

# 查看当前配置用户邮箱信息

```bash
git config  --list
```



# git常用指令

```bash
git init    //初始化

git add .    //添加全部文件
git add 文件名    //添加指定文件

git commit -m "描述信息"    //添加描述信息

git push    //上传代码

git pull    //下载代码

git clone 地址    //克隆项目
```

