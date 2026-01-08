---
description: 最近ChatGPT爆火，作为我们程序员我们当然也想要上手来使用一番，下面账号注册，手机认证，服务器上API使用等方便来说明
title: ChatGPT的注册与使用
cover: https://tse4-mm.cn.bing.net/th/id/OIP-C.qTTe7-BftCKF5U8oWLHQRgHaEK?rs=1&pid=ImgDetMain
categories: 
   - 学习
   - 工具
   - ChaGPT
tags: 
  -  ChaGPT
sticky: 4
outline: [2,3]
top: 1
recommend: 1
date: 2025-01-12
---
![ChatGPT](images/2134756.png)

- 最近ChatGPT爆火，作为我们程序员我们当然也想要上手来使用一番，下面账号注册，手机认证，服务器上API使用等方便来说明
- ChatGPTAPI：[https://platform.openai.com/docs/models/overview](https://platform.openai.com/docs/models/overview)
- 聊天：[https://chat.openai.com/chat](https://chat.openai.com/chat)

# 一 准备工作
## 1.1 网络环境准备工作
代理流量： [SakuraC3`at](https://sakuracat-link.com/#/register?code=ZjWXKfTK)

- 注册账号

![image.png](images/1679820600061-45cc9764-8da6-4531-8453-c8bb2c71cdc7.png)

- 购买流量包

![image.png](images/1679820657195-b5b199b8-eb5e-4e18-8615-393a08c71cab.png)
个人建议购买这个套餐（看自己的需求）
![image.png](images/1679820677885-e3186010-0314-41ba-a7d1-fa1072745e0e.png)

- 工具

百度网盘：[https://pan.baidu.com/s/1cTK6_uYj2VwAftkWdcEb8w?pwd=sacc](https://pan.baidu.com/s/1cTK6_uYj2VwAftkWdcEb8w?pwd=sacc)
Gitub：[https://github.com/Fndroid/clash_for_windows_pkg](https://github.com/Fndroid/clash_for_windows_pkg)
下载安装完毕之后，我们打开购买的流量包页面
![image.png](images/1679820951428-69801c29-e0a7-4664-a830-60d32a92b775.png)
![image.png](images/1679820965054-f01bc322-fc37-454c-a561-e578aaca1855.png)
导入到Clash中，点击下载
![image.png](images/1679820993571-8122d6cc-b92a-47bf-982a-72f931b5d26d.png)
选择代理节点，看网络延迟，看自己的选择
![image.png](images/1679821083484-df177534-3e6c-4315-9c69-0c968e6a7324.png)
开启代理，访问服务，注意关闭时请不要直接关闭，先关闭代理，再关程序
![image.png](images/1679821151730-d92f90a3-0225-47d8-911b-df794c3dfc43.png)

- 测试一下

![image.png](images/1679821252595-9ac03258-5ab3-4a0f-9d58-3aa3752bad7d.png)
好的我们的网络环境，就搭建再这，下面我们来看看账号的注册的准备工作

## 1.2 账号注册准备工作
账号注册是需要国外手机的验证，因此我们需要一个需要虚拟账号
网站：[Get a virtual phone number. Temporary number. SMS service activation](https://sms-activate.org/getNumber)
点击注册，充值2美元，比较坑的是支付宝最低2美元
![image.png](images/1679821610677-c3906b6a-0950-4f62-b5cf-957601380b58.png)

## 1.3 程序开发准备工作
前提：如果你只是向玩玩ChatGPT可以省掉这一步
关于ChatGPT的api调用，国内可能无法调用，一种方式代理，一种方式外国服务器
我就选择的是外国服务器，我就是来玩玩他们的API文档，这里推荐阿里云的服务器
这里我也参考网络上的其他配置，就是太麻烦了，甲骨文，微软等等，果断放弃了
地址：[轻量应用服务器_web服务器_个人建站_弹性计算-阿里云](https://www.aliyun.com/product/swas?spm=5176.19720258.J_3207526240.34.d1fa76f49USCWZ)
看自己的需求吧
![image.png](images/1679822107744-dfc83892-da60-4c63-8ea8-acb6dc7a3187.png)
![image.png](images/1679822151098-7b2052f3-50be-40c6-985a-e76388ada461.png)
付钱，配置一下，SSH工具可以连接就行了，到这我们的准备工作就完了，下面开始注册，当然这种也有缺点，无法工具中调试

# 二 注册账号

- 第一步代理服务开启

![image.png](images/1679822442092-b397e900-ac1e-494b-9563-2682b7f7b5eb.png)

- 进入网站进行注册

地址：[https://chat.openai.com/auth/login](https://chat.openai.com/auth/login)
![image.png](images/1679822544049-6f1f83c3-2fed-46c4-bd14-97ed2de18fe9.png)
这里我们选择微软账号注册，没有微软装好可以先注册一个
![image.png](images/1679822592144-43ec5266-8b29-4434-a684-46fc87d18af9.png)
需要账号与密码，进行登录，登录成功之后，来到手机号验证界面
![image.png](images/1679822694519-b29c8ce8-020c-4872-bf0f-f9bccd62e29a.png)
谁便填写，关键是手机号验证
![image.png](images/1679822748884-588b4de0-1356-4123-89c4-34d41fcfd6ae.png)
这个是时候，来到我们前面装备的工作的虚拟手机号注册，购买手机号
输入openAI
![image.png](images/1679822855498-da68d909-e850-42ec-b3d8-e2a11deed3b3.png)
请记住国旗，我这里选择的巴西，看球的都熟悉这个国旗，加入购物车
![image.png](images/1679822966325-9d3d91f4-7997-46ef-a348-7fa7b07e6f0f.png)
点击复制手机号，来到验证界面，进行手机号验证
![image.png](images/1679823023418-62440316-f830-4f97-b060-a499d8da17d5.png)
进行验证，等待验证码，粘贴完成认证
![image.png](images/1679823097321-7aea2ba8-6a15-4c14-b5b7-9f35209379ac.png)
注册成功，来到聊天页面，我们就可以聊天了
![image.png](images/1679823219047-42051a68-5566-4219-aa45-26606a9b1060.png)

# 三 程序开发
API文档：[https://platform.openai.com/docs/models/overview](https://platform.openai.com/docs/models/overview)
注意他的调用不会是免费的，有5美元的免费额度，自己玩的话够用了
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12426173/1679823415954-865d028f-fb99-4040-9bec-103b3dee254d.png#
API KEY 调用时验证身份
![image.png](images/1679823473336-495012a6-daba-4416-926d-f0e049acce83.png)
服务器上测试是否能够调用

```java
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Organization: org-gMZJtnznaLIomJ2vTWYWFSLo"

```
调用成功，之后就可以集成在自己的程序中，具体的使用参考API文档
![image.png](images/1679823609373-1e9af9b7-e560-420a-b9a5-a231c2305229.png)
