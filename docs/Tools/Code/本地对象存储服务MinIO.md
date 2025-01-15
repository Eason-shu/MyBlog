---
description: MinIO是一个对象存储解决方案，它提供了与Amazon Web Services S3兼容的API，并支持所有核心S3功能。 MinIO有能力在任何地方部署 - 公有云或私有云，裸金属基础设施，编排环境，以及边缘基础设施。
title: 本地对象存储服务MinIO
cover: https://www.zmz2001.com:8000/back-programme/Minio/Minio.png
categories: 
   - 学习
   - 工具
   - MinIO
tags: 
  -  MinIO
sticky: 4
outline: [2,3]
top: 1
recommend: 2
date: 2025-01-13
---


# 本地对象存储服务MinIO （Window）

- 中文文档：https://www.minio.org.cn/docs/minio/windows/index.html

- MinIO是一个对象存储解决方案，它提供了与Amazon Web Services S3兼容的API，并支持所有核心S3功能。 MinIO有能力在任何地方部署 - 公有云或私有云，裸金属基础设施，编排环境，以及边缘基础设施。

## 1.1 环境准备

- 准备一个空的[文件夹](https://so.csdn.net/so/search?q=文件夹&spm=1001.2101.3001.7020)，用来存放minio相关的内容；
- 这里是在D盘创建一个minio的文件夹；
- 后续所有跟MinIO相关的内容，都是基于此文件夹

![image-20250115103115868](images/image-20250115103115868.png)

## 1.2 下载安装

- https://www.minio.org.cn/download.shtml#/windows

- https://link.csdn.net/?from_id=140205289&target=https%3A%2F%2Fdl.minio.org.cn%2Fserver%2Fminio%2Frelease%2Fwindows-amd64%2Fminio.exe

  ![image-20250115103312833](images/image-20250115103312833.png)

- 命令

注意：

- 一定要定位到文件夹下；
- D:\Code-Environment\minio\data 这个必须要填写，用来指定MinIO
- 在本地的存储路径； 这里用到data这个文件夹路径，可以提前创建好，没有创建的话也不要紧，执行上述命令时会自动帮我们创建

```bash
.\minio.exe server D:\Code-Environment\minio\data
```

![image-20250115103547399](images/image-20250115103547399.png)

![image-20250115103605893](images/image-20250115103605893.png)

- 说明：
- API 列出了客户端可以访问MinIO S3 API的网络接口和端口; WebUI
- 列出了网络接口和端口，客户端可以通过这些接口和端口访问MinIO网页端的控制台。
- 9000端口为服务端口号 9001端口为控制台端口号

## 1.3 Web访问

在浏览器中地址栏输入【http://127.0.0.1:9000】（以自己启动minio服务时的WebUI 端口为准，每次启动服务随机生成），访问本地的MinIO服务控制台

![image-20250115103703688](images/image-20250115103703688.png)

- 输入账号与密码，进入页面

![image-20250115103749208](images/image-20250115103749208.png)

## 1.4 指定端口号启动服务】

前面启动服务时，像控制台地址【http://127.0.0.1:9001】中的端口号，每次会自动生成，且不利于记忆。因此我们可以指定***控制台端口号 9001；服务端口号9000；***

```bash
.\minio.exe server D:\minio\data --console-address "127.0.0.1:9001" --address "127.0.0.1:9000"
```

## 1.5 设置用户名密码(cmd操作)

- 设置账号（至少3位）：setx MINIO_ROOT_USER name
- 设置密码（至少8位）：setx MINIO_ROOT_PASSWORD password

修改用户名：

```xml
setx MINIO_ROOT_USER  admin
1
```

修改密码：

```xml
setx MINIO_ROOT_PASSWORD  admin
```

重启服务

## 1.6 启动脚本

```
cmd /c "cd /d D:\Code-Environment\minio&& .\minio.exe server  --address "127.0.0.1:9000" --console-address "127.0.0.1:9001"  D:\Code-Environment\minio\data"
```

- 注意：

【D:\minio\bin】：minio.exe服务的存放路径；
【.\minio.exe server 】：启动服务
【 --address “127.0.0.1:9000”】：指定服务端口号；
【 --console-address “127.0.0.1:9001”】：指定控制台端口号； 【 D:\minio\data 】：数据的存放路径；

*保存后，更改这个文档的后缀名位.bat；双击运行这个文件，可以看到我们的服务已经正常启动了；*

- 后台运行：在【start.bat】文件的最前面，加上下列命令

```
@echo off
if "%1" == "h" goto begin
mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:begin
REM
cmd /c "cd /d D:\Code-Environment\minio&& .\minio.exe server  --address "127.0.0.1:9000" --console-address "127.0.0.1:9001"  D:\Code-Environment\minio\data"
```

- 保存后，双击运行，cmd窗口只是一闪而过，打开任务管理器，会发现minio服务是启动的，但是原来的cmd窗口已经被隐藏了

![image-20250115104736009](images/image-20250115104736009.png)

## 1.7 基本操作

### 1.7.1 存储桶管理

- 桶：用来组织管理文件对象，类似于文件夹或者目录；MinIO中的桶可以存放任意数量个文件，也可以存放目录文件夹；点击【Create Bucket】，创建桶

输入桶的名称，命名规则：

- 长度必须介于3（最小）到63（最大）个字符之间；
-  只能由小写字母、数字、点（.）和连字符（-）组成；
-  不得包含两个相邻的句点或与连字符相邻的句点；
-  不得格式化为IP地址（例如192.168.5.4）；
-  不能以前缀xn–开头；
-  不能以后缀-s3alias结尾；
-  Bucket名称在分区内必须唯一；
- 这里创建名为【ssdl】的存储桶，其他都采用默认，点击【Create Bucket】创建即可；

![image-20250115105154116](images/image-20250115105154116.png)

![image-20250115105207621](images/image-20250115105207621.png)

### 1.7.2 对象管理

- 对象，就是二进制数据，包括各种图片、各类文档，以及音频、视频等等；

![image-20250115110017502](images/image-20250115110017502.png)

![image-20250115110040529](images/image-20250115110040529.png)

![image-20250115110308026](images/image-20250115110308026.png)



