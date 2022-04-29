# 警联锁小程序 AuthCode 获取示例


# 运行

1. 修改 pages/index/index.js 中 appid 与 appsecret 
2. 运行后， 在警联锁成功返回后会在控制台中打印出返回的 code 值


# 说明 

1. 示例中 appsecret 存储到了本地，实际开发中需要在服务器中计算并返回签名值

# 代码说明

## 拉起小程序

```
  var reqValue = "appid=" + appid
    reqValue += "&randstr=" + randstr
    reqValue += "&timestamp="  + timestamp
    reqValue += "&sign=" + sign
    wx.navigateToMiniProgram({
      appId: 'wx8b506d4dcabedcd8',
      path: "/pages/authcode/authcode?" + reqValue,
      envVersion: 'trial',
    })
```

## 小程序获取code


```
// app.js
App({
 onShow(options){
     console.log("onShow args = " + JSON.stringify(options))
    if (options.scene == "1038"){
	   if (options.referrerInfo && options.referrerInfo.appId == "wx8b506d4dcabedcd8"){
	      console.log("jls return: " + JSON.stringify(options.referrerInfo))
      }
    }
 },
})
```
