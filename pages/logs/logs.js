//logs.js
const util = require('../../utils/util.js')

class LogListPage{
  data = {
    logs: []
  }

  onLoad(){
    const logs = (wx.getStorageSync("logs") || [])
        .map( log => util.formatTime(new Date(log)))
        
    this.setData({
      logs: logs
    })
  }
}


Page(new LogListPage())
