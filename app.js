// app.js
App({
  onLaunch() {
  },
  onShow(options){
    console.log("onShow args = " + JSON.stringify(options))
    if (options.scene == "1038"){
	   if (options.referrerInfo && options.referrerInfo.appId == "wx8b506d4dcabedcd8"){
	      console.log("jls return: " + JSON.stringify(options.referrerInfo))
      }
    }
  },
  globalData: {
    userInfo: null
  }
})
