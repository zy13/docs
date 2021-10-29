## Proxy与表单
```js
import { post } from '../../../common/js/request.js'
import { $, show } from '../../../common/js/dom.js'
import MobileSelect from '../../../common/js/mobileSelect.js'
import layer from '../../../common/js/layer.js'
import Confirm from '../../../components/confirm/confirm'
import wxLogin from '../../../components/wx-login/wx-login'
import SelectBox from '../select-box/select-box.js'

export default class User {
  constructor() {
    this.win = window
    this.inputs = document.querySelectorAll('.right input')
    this.selectBoxs = document.querySelectorAll('.selectBox')
    this.radios = document.querySelectorAll('.radios .radio')
    this.selectMobiles = document.querySelectorAll('.info .selectMobile')
    this.submitBtn = document.querySelector('.submit-btn')
    this.selbox = new SelectBox()
    this.layer = layer
    this.wxLogin = wxLogin
    this.post = {}
    this.init()
  }
  init() {
    this.proxyPost()
    this.checkInput()
    this.checkRadio()
    this.checkSelectBox()
    this.checkSelectMobile()
    this.submit()
  }
  proxyPost() {
    new Proxy(this.post, {
      get (target, key, receiver) {
        return Reflect.get(...arguments)
      },
      set (target, key, newValue, receiver) {
        Reflect.set(...arguments)
      }
    })
  }
  checkInput() {
    this.inputs.forEach(input => {
      const key = input.getAttribute('name')
      this.post[key] = input.value
      input.onchange = e => {
        this.post[key] = e.target.value
      }
    })
  }
  checkRadio() {
    this.radios.forEach(radio => {
      let isActive = radio.classList.contains('active')
      if (isActive) {
        this.post['sex'] = radio.dataset.sex
      }
      radio.onclick = e => {
        const el = e.currentTarget
        isActive = el.classList.contains('active')
        if (!isActive) {
          el.classList.add('active')
          el.nextSibling && el.nextSibling.classList.remove('active')
          el.previousSibling && el.previousSibling.classList.remove('active')
        }
        this.post['sex'] = el.dataset.sex
      }
    })
  }
  checkSelectBox() {
    this.selectBoxs.forEach(select => {
      const key = select.getAttribute('data-key')
      this.post[key] = select.getAttribute('data-value')
      select.onclick = e => {
        this.selbox.open(key, res => {
          this.post[key] = res.vals
          if (res.other) {
            this.post[key + '_other'] = res.other
          }
          if (select.firstChild) {
            select.firstChild.textContent = res.names
            return
          }
          select.textContent = res.names
        })
      }
    })
  }
  checkSelectMobile() {
    this.selectMobiles.forEach(select => {
      this.initCity(select, res => {
        this.post['province_id'] = res[0].id
        this.post['city_id'] = res[1].id
      })
    })
  }
  initCity(cur, fn) {
    const ids = JSON.parse(cur.dataset.id)
    const provinceId = ids[0]
    const cityId = ids[1]
    let cityData = []
    let curIndex = [0, 0]
    this.post['province_id'] = provinceId
    this.post['city_id'] = cityId
    post('/user/m/area').then(rs => {
      cityData = JSON.stringify(rs.result.list).replace(/"title":/g, '"value":')
      cityData = cityData.replace(/"children":/g, '"childs":')
      cityData = JSON.parse(cityData)
      for (let i = 0; i < cityData.length; i++) {
        if (cityData[i] === provinceId) {
          curIndex[0] = i
          for (let j = 0; j < cityData[i].childs.length; j++) {
            if (cityData[j] === cityId) {
              curIndex[1] = j
              break
            }
          }
          break
        }
      }
      new MobileSelect({
        trigger: '#areas',
        wheels: [{
          data: cityData
        }],
        position: [curIndex[0], curIndex[1]],
        callback: (indexArr, data) => {
          fn(data)
        }
      })
    })
  }
  validate() {
    const regMobile = /^1[3456789]\d{9}$/
    const regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    if (this.post.mobile && !regMobile.test(this.post.mobile)) {
      this.layer.open({
        content: '手机号码格式不正确',
        skin: 'msg',
        time: 1.5
      })
      return false
    }
    if (this.post.email && !regEmail.test(this.post.email)) {
      this.layer.open({
        content: '邮箱格式不正确',
        skin: 'msg',
        time: 1.5
      })
      return false
    }
    return true
  }
  submit() {
    this.submitBtn.onclick = e => {
      const data = {}
      if (!this.validate()) {
        return false
      }
      Object.keys(this.post).forEach(key => {
        if (this.post[key]) {
          data[key] = this.post[key]
        }
      })
      post('/user/pc/updateinfo', {
        post: data
      }).then(rs => {
        if (rs.result.error || rs.result.code === 400) {
          const content = rs.result.error ? rs.result.error.message : rs.result.msg
          this.layer.open({
            content: content,
            skin: 'msg',
            time: 1.5
          })
          return false
        }
        if (rs.code === 201) {
          // 微信登陆二维码
          const wrapper = $('.code_wrapper')
          show(wrapper)
          wxLogin.open(rs.result.data.state)
        } else {
          // window.location.href = '/kw-mine'
          new Confirm({
            content: '保存成功',
            type: 1,
            time: 1500
          })
          this.win.setTimeout(() => {
            this.win.location.href = '/kw-mine'
          }, 1500)
        }
      })
    }
  }
}

```

## pc端实现微信登录
* [https://open.weixin.qq.com/cgi-bin/frame?t=home/web_tmpl&lang=zh_CN](https://open.weixin.qq.com/cgi-bin/frame?t=home/web_tmpl&lang=zh_CN)
* 模板
```pug
#wx-login-wrap
  .code_box
    .code_wrap
      #login_container
    .code_close
```
* 脚本
```js
const wxLoginQr = {
  loginContainer: document.querySelector('#login_container'),
  loginWrap: document.querySelector('#wx-login-wrap'),
  loginClose: document.querySelector('#wx-login-wrap .code_close'),
  getDomain: function() {
    const { origin } = window.location
    const domain = origin.indexOf('localhost') > -1 ? 'http://dev-rh.keywa.cc' : origin
    return domain
  },
  open: function(state) {
    let appid = ''
    const proAppid = 'wx0ad137c7969eba43'
    const devAppid = 'wx987b4bde141a153c'
    const testAppid = 'wxbf0f5617ee8a923d'
    const domain = this.getDomain()
    if (domain.indexOf('dev') > -1) {
      appid = devAppid
    } else if (domain.indexOf('test') > -1) {
      appid = testAppid
    } else {
      appid = proAppid
    }
    console.log(domain, appid)
    const scope = 'snsapi_login'
    const api = '/api/wechat/pc/callback'
    const redirectUri = domain + api
    const iframe = document.createElement('iframe')
    const src = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    iframe.width = '300px'
    iframe.height = '400px'
    iframe.src = src
    this.loginWrap.style.display = 'block'
    if (!this.loginContainer.hasChildNodes()) {
      this.loginContainer.appendChild(iframe)
    }
  },
  close: function() {
    this.loginClose.onclick = () => {
      this.loginContainer.innerHTML = ''
      this.loginWrap.style.display = 'none'
    }
  }
}

module.exports = wxLoginQr

```

## 视频直播 - 阿里云播放器
* [https://player.alicdn.com/aliplayer/index.html](https://player.alicdn.com/aliplayer/index.html)
```js
// 引入视频样式和脚本
// link(rel="stylesheet",href="https://g.alicdn.com/de/prismplayer/2.7.4/skins/default/aliplayer-min.css")
// script(type="text/javascript",charset="utf-8",src="https://g.alicdn.com/de/prismplayer/2.7.4/aliplayer-min.js")
const aliplay = new Aliplayer(
  {
    id: "player-con",
    source: source,
    cover: cover,
    liveRetry: 1,
    width: "100%",
    height: "100%",
    autoplay: false,
    preload: false,
    language: "zh-cn",
    isLive: isLive,
    ...global.setLiveTime,
    format: 'm3u8',
    controlBarVisibility: "click",
    Definition: "LD,SD",
    skinLayout: [
      { name: "bigPlayButton", align: "cc" },
      {
        name: "H5Loading",
        align: "cc"
      },
      { name: "errorDisplay", align: "tlabs", x: 0, y: 0 },
      { name: "infoDisplay" },
      { name: "tooltip", align: "blabs", x: 0, y: 56 },
      { name: "thumbnail" },
      {
        name: "controlBar",
        align: "blabs",
        x: 0,
        y: 0,
        children: [
          { name: "progress", align: "blabs", x: 0, y: 44 },
          { name: "playButton", align: "tl", x: 15, y: 12 },
          { name: "timeDisplay", align: "tl", x: 10, y: 7 },
          { name: "fullScreenButton", align: "tr", x: 10, y: 12 }
        ]
      }
    ]
  },
  (player) => {
    const limitTime = 5 * 60
    global.player = player
    let num = 0

    const tryEle = $('.try-prompt')
    const coverEle = $('.not-play')
    const coverImgEle = $('.live-cover')
    const errorPrompt = $('.error-prompt')
    const numEle = $('.play-num')

    // hide(errorPrompt)
    // show(coverEle)

    player.on('pause', () => {
      tryEle && hide(tryEle)
      if ((num > 2 && global.sources.length) || player.getStatus() === 'error') {
        if (global.sources.length) {
          player.dispose()
          AliPlayerInit(global.sources.shift(), cover, isLive)
          show(errorPrompt)
        }
      }
      if (+player.getCurrentTime() >= +limitTime && global.try) {
        hideVideo()
        show(coverEle)
        show(coverImgEle)
        numEle && show(numEle)
        $('.try').innerHTML = '重新试看'
        addClass($('.try'), 'retry')
      }
    })

    playEvent(() => {
      player.play()
    }, isLive)

    errorPrompt && click(errorPrompt, () => {
      if (window.liveDetail.status !== 3) {
        hide(errorPrompt)
        player.play()
      }
    })

    player.on('ended', () => {
      // 播放结束
      !isLive && player.seek && player.seek(0)
      hideVideo()
      show(coverEle)
      show(coverImgEle)
      numEle && show(numEle)
      tryEle && hide(tryEle)
    })

    player.on("play", () => {
      // 播放
      hide($('.not-play'))
    });

    player.on('playing', () => {
      // 播放中
      tryEle && show(tryEle)
      showVideo()
      hide(coverEle)
      hide(coverImgEle)
      numEle && hide(numEle)
      if (player.getStatus() === 'loading') {
        num++
      } else {
        num = 0
      }
      if ((num > 2 && global.sources.length) || player.getStatus() === 'error') {
        if (global.sources.length > 0) {
          player.dispose()
          AliPlayerInit(global.sources.shift(), cover, isLive)
          show(errorPrompt)
        }
      }
      if (+player.getCurrentTime() >= +limitTime && global.try) {
        limitTimeEvent(limitTime)
      }
    })

    player.on("ready", () => {
      // 初始化
      !isLive && seek && player.seek(seek)
    })
    
    player.on('error', (errorMsg) => {
      // 错误
      // const code = errorMsg.paramData.error_code
      // console.log(errorMsg, 'player error!!!!')
      if (global.sources.length > 0) {
        player.dispose()
        AliPlayerInit(global.sources.shift(), cover, isLive)
        show(errorPrompt)
      }
    })

    // 播放位置变化触发
    player.on('timeupdate', () => {
      if (+player.getCurrentTime() >= +limitTime && global.try) {
        limitTimeEvent(limitTime)
      }
    })

    // 拖拽完成触发
    player.on('completeSeek', () => {
      if (+player.getCurrentTime() >= +limitTime && global.try) {
        limitTimeEvent(limitTime)
      }
    })

    // 开始拖拽
    player.on('startSeek', () => {
      if (+player.getCurrentTime() >= +limitTime && global.try) {
        player.off('startSeek')
        limitTimeEvent(limitTime)
      }
    })

    function limitTimeEvent(limitTime) {
      player.seek(+limitTime)
      player.pause()
    }

    // if (window.liveDetail.autoPlay) {
    //   setTimeout(() => {
    //     player.play()
    //   }, 20)
    // }
  });
aliplay.on("error", error => {
  console.log(error, "aliplay error")
})
```

## 微信支付
```js
import {getMerchantsInfo, addMallOrder, orderPay, payLive} from 'api/wx.js'
import { getWxConfig } from 'api/wx'
import 'common/style/layer.css'
import layer from 'common/js/layer.js'

export async function pay (params = {}, type) {
  // await wxpay(params, type)
  return new Promise((resolve, reject) => {
    getWxConfig({
      url: window.location.href.split('#')[0]
    }).then(rs => {
      wx.config({
        appId: rs.result.appId,
        debug: false,
        timestamp: rs.result.timestamp,
        nonceStr: rs.result.nonceStr,
        signature: rs.result.signature,
        jsApiList: ['chooseWXPay']
      })
      // 获取调起微信支付所需参数
      wxPayment(params, type).then(res => {
        if (res.error) {
          layer.open({
            content: res.error.message,
            skin: 'msg',
            time: 1.5
          })
          return
        }
        const {result} = res
        const payInfo = result.pay_sign
        payReady(payInfo, result.order_id).then(orderId => {
          resolve(orderId)
        }).catch(err => {
          reject(err)
        })
      }).catch(err => {
        reject(err)
      })
    }).catch(error => {
      layer.open({
        content: 'config' + error,
        skin: 'msg',
        time: 1.5
      })
    })
  })
}

function wxPayment (params, type) {
  /* type
    1: 商城商品下单
    2: 商城商品订单支付
    3: 直播购买
  */
  return new Promise((resolve, reject) => {
    if (type === 1) {
      addMallOrder(params).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else if (type === 2) {
      orderPay(params).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else if (type === 3) {
      payLive(params).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    } else {
      getMerchantsInfo(params).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })
}

function payReady (payInfo, orderId) {
  // 调起微信支付
  return new Promise((resolve, reject) => {
    wx.ready(() => {
      wx.chooseWXPay({
        timestamp: payInfo.timestamp,
        nonceStr: payInfo.nonceStr,
        package: payInfo.package,
        signType: payInfo.signType,
        paySign: payInfo.paySign,
        success: resSuccess => {
          if (resSuccess.errMsg === 'chooseWXPay:ok') {
            let msg = '支付成功'
            layer.open({
              content: msg,
              skin: 'msg',
              time: 1.5
            })
            resolve(orderId)
          } else {
            layer.open({
              content: resSuccess.errMsg,
              skin: 'msg',
              time: 1.5
            })
          }
        },
        fail: resFail => {
          reject(resFail)
        },
        cancel: (msg) => {
          reject(msg)
        }
      })
    })
  })
}

```

## 微信分享

```js
/**
 * 1.现在腾讯规定不可以自定按钮进行分享，只能点击右上角进行分享。
 * 2.分享的地址域名，必须和当前域名相同如：当前页面域名为http://www.test.com。分享的链接必须在这个域名下如：http://www.test.com/index.html，不然不能实现自定义。
 * 3.导入微信的js  <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
 * 4.wx.config里面必须初始化，调用你需要使用的微信接口。
 */

/**
 * 默认分享也是首页
 */
import { $, addClass } from 'common/js/dom.js'
import { getWxConfig } from 'api/wx'
import { getUrlParam } from 'common/js/request.js'
export default (options) => {
  return new Promise((resolve) => {
    getWxConfig({
      url: options.link
    }).then(rs => {
      const dataInfo = rs.result.user
      const companyType = dataInfo.company_type ? dataInfo.company_types.find(item => +item.id === +dataInfo.company_type).title : ''
      const occupation = dataInfo.occupation ? dataInfo.occupations.find(item => +item.id === +dataInfo.occupation).title : ''

      window.localStorage.setItem('locationInfo', rs.result.coordinate.coordinate)
      window.gio && window.gio('identify', dataInfo.openid, dataInfo.unionid)
      const visitor = {
        'openId': dataInfo.openid,
        'nickname': dataInfo.nickname,
        'nickName': dataInfo.nickname,
        'sex': dataInfo.sex,
        'city': dataInfo.city,
        'province': dataInfo.province,
        'country': dataInfo.country,
        'headimgurl': dataInfo.headimgurl,
        'avatarUrl': dataInfo.headimgurl,
        'unionId': dataInfo.unionid,
        'grade': dataInfo.grade,
        'companyName': dataInfo.companyname,
        companyType,
        occupation
      }
      // 匹配行业与职位
      let occupationLabel = dataInfo.occupations.find(item => {
        return item.id === dataInfo.occupation
      })
      let companyTypeLabel = dataInfo.company_types.find(item => {
        return item.id === dataInfo.company_type
      })
      visitor.occupation = occupationLabel ? occupationLabel.title : ''
      visitor.companyType = companyTypeLabel ? companyTypeLabel.title : ''

      window.gio && window.gio('setVisitor', visitor)
      window.gio && window.gio('setUserId', dataInfo.id)
      wx.config({
        appId: rs.result.appId,
        debug: false,
        timestamp: rs.result.timestamp,
        nonceStr: rs.result.nonceStr,
        signature: rs.result.signature,
        jsApiList: [
          'translateVoice',
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'chooseImage',
          'showOptionMenu',
          'getLocation'
        ]
      })

      // 设置用户信息 到 本地存储
      window.localStorage.setItem('phoneLength', dataInfo.mobile.length)
      window.localStorage.setItem('isPostNote', dataInfo.is_post_note)
      window.localStorage.setItem('nickName', dataInfo.nickname)
      window.localStorage.setItem('grade', dataInfo.grade)
      window.localStorage.setItem('email', dataInfo.email)

      // 配置自定义选项
      // 分享图
      let defaultShareImageUrl = ''
      if (options.imgUrl && options.imgUrl !== '') {
        const reg = /^http/
        if (reg.test(options.imgUrl)) {
          defaultShareImageUrl = options.imgUrl
        } else {
          defaultShareImageUrl = `${window.location.origin}${options.imgUrl}`
        }
      } else {
        defaultShareImageUrl = `${window.location.origin}/public/images/shareDefault.png`
      }

      // 配置分享链接

      const userId = rs.result.user.id || 0
      // 添加邀请参数 有call参数的话,去除
      // 取参数
      let params = getUrlParam() || {}
      params.inviter = userId
      // 重新拼接
      let newHref = options.link.split('?')[0] + '?'
      for (let key in params) {
        if (key === 'code') delete params[key]
      }
      let cur = 0
      for (let key in params) {
        cur++
        if (cur === 1) {
          newHref += `${key}=${params[key]}`
        } else {
          newHref += `&${key}=${params[key]}`
        }
      }
      // 拼接完成
      options.link = newHref
      // console.log(options, 'finally options')
      // console.log(defaultShareImageUrl, 'WxConfigImgUrl')

      const shareOptions = {
        title: options.title, // 分享标题
        desc: options.desc, // 分享描述
        link: options.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: defaultShareImageUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
          options.success && options.success()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
          options.cancel && options.cancel()
        }
      }

      const pyqShareOptions = { ...shareOptions }
      const wxhyShareOptions = { ...shareOptions }
      /**
      * 自定义统计事件：
      */
      // 投票活动添加分享统计 朋友圈||微信好友
      if (/vote/.test(options.link)) {
        pyqShareOptions.link = options.link + '&ADTAG=112.tp.pyq'
        wxhyShareOptions.link = options.link + '&ADTAG=112.tp.wxhy'
      }

      // 会员购买
      if (/members-detail/.test(options.link)) {
        pyqShareOptions.link = options.link + '&ADTAG=fx.hytc.pyq'
        wxhyShareOptions.link = options.link + '&ADTAG=fx.hytc.wxhy'
      }

      // 推荐海报
      if (options.link.indexOf('poster-individual') !== -1) {
        const arr = options.link.split('poster-individual')
        pyqShareOptions.link = arr[0] + 'index' + arr[1] + '&ADTAG=yhyq.wxfx'
        wxhyShareOptions.link = arr[0] + 'index' + arr[1] + '&ADTAG=yhyq.wxfx'
      }

      // 邀请好友
      if (options.link.indexOf('my-invitation') !== -1) {
        const arr = options.link.split('my-invitation')
        pyqShareOptions.link = arr[0] + 'index' + arr[1] + '&ADTAG=yhyq.wxfx'
        wxhyShareOptions.link = arr[0] + 'index' + arr[1] + '&ADTAG=yhyq.wxfx'
      }

      /**
       * 二级分享统计下钻
       */
      if (options.friendCount) {
        // 朋友
        wxhyShareOptions.link = wxhyShareOptions.link + '&CKTAG=mta_share.wechat_friend'
      }

      if (options.momentsCount) {
        // 朋友圈
        pyqShareOptions.link = pyqShareOptions.link + '&CKTAG=mta_share.wechat_moments'
      }

      // console.log(shareOptions, 'shareOptions')
      // console.log(wxhyShareOptions, 'wxhyShareOptions')
      // console.log(pyqShareOptions, 'pyqShareOptions')

      window.subscribe = +rs.result.user.subscribe
      window.localStorage.setItem('userId', rs.result.user.id)
      rs.result.user.nickname && window.localStorage.setItem('nickname', rs.result.user.nickname)
      if (rs.result.noreadnum > 0) {
        // 更新底部提示状态
        // $('#footer .find em') && addClass($('#footer .find em'), 'red-doc doc-footer')
        $('#footer .mine em') && addClass($('#footer .mine em'), 'red-doc doc-footer')
      }
      wx.ready(function () {
        // console.log(shareOptions.link, 'shareOptions')
        wx.showOptionMenu()
        // 分享到朋友圈
        wx.onMenuShareTimeline(pyqShareOptions)
        // 分享给朋友
        wx.onMenuShareAppMessage(wxhyShareOptions)
        // 分享给QQ
        wx.onMenuShareQQ(shareOptions)
        // 分享微博
        wx.onMenuShareWeibo(shareOptions)
        // 获取网络状态
        wx.getNetworkType({
          success: res => {
            rs.result.networkType = res.networkType
            resolve(rs.result)
          },
          fail: res => {
            resolve(rs.result)
          }
        })
      })
      // resolve(rs.result)
    })
  })
}

```

## node端实现文件上传
```js
const fs = require('fs')
const { baseUrl } = require('../config/common.js')
const { fileLimit, maxFileSize } = require('../config/common.js')
const FormData = require('form-data')

class UploadController {
  static async common (ctx, next) {
    const {path, mimetype, size} = ctx.req.file
    const pathUrl = ctx.request.path.replace('/api', '')
    const accessToken = ctx.session.accessToken || ''
    const host = baseUrl.split('//')[1]
    const protocol = baseUrl.split('//')[0]

    if (fileLimit.indexOf(mimetype) === -1) {
      ctx.body = {
        code: 400,
        msg: '文件类型错误！'
      }
    } else if (size > maxFileSize) {
      ctx.body = {
        code: 400,
        msg: '文件大小超过限制!'
      }
    } else {
      const form = new FormData({
        maxDataSize: maxFileSize
      })

      form.append('token', accessToken)
      form.append('pic', fs.createReadStream(path.replace('\\','/')))

      await new Promise(function(resolve, reject){
        form.submit({
          host: host,
          path: pathUrl,
          protocol: protocol,
          headers: form.getHeaders({
            'Cookie': ctx.request.header.cookie
          })
        }, function (err, res) {
          try{
            fs.unlink(path)
            res.setEncoding('utf8')
            res.on('data', function(chunk) {
              ctx.body = JSON.parse(chunk)
              resolve(ctx.body)
            })
            res.on('end', function(){
              console.log('res end')
            })
          } catch (e) {
            console.log(e)
          }
        })
      })
    }
  }
}

module.exports = UploadController

```