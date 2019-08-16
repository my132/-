//index.js
//获取应用实例

const WXAPI = require('../../api/main.js')
const WXDATA=require('../../data/data.js')
Page({
  data: {
    date:'',//出生日期
    first_num:'',//先天数
    life_num:'',//灵数(命数)
    constellation_num:'',//星座数
    excellence_num:'',//卓越数(天赋数)
    is_e_c_e_num_contents:'',//拥有卓越数显示
    life_num_contents:'',//灵数内容
    excellence_num_contents :'',//卓越数内容

  },
  //日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
//获取灵数
  getdata:function(){
   
    let num = this.data.date.replace(/[^0-9]/ig, "");
    let arry = num.replace(/0/g, "").split("");
    let arryeval=0
    let zuoyue = null
    for (var i = 0; i < arry.length; i++) {
      zuoyue += parseInt(arry[i]) ;
    }
    if(zuoyue==29){
      arryeval=11
    }else{
      arryeval = zuoyue
    }
  
   console.log("卓越数为"+arryeval)


//计算灵数
    let arry1 = arryeval.toString().split("");
let lingshu=null
    for (var z = 0; z < arry1.length; z++) {
      lingshu += parseInt(arry1[z]);
   
    }
   
    if (lingshu >9) {
      let xinling=null
      let newling = lingshu.toString().split("")
      for (var s = 0; s < newling.length; s++) {
        xinling += parseInt(newling[s]);
      }
      lingshu = xinling
    }
    console.log("灵数是" + typeof (lingshu)+lingshu )
     this.setData({
       life_num: lingshu,
       excellence_num: arryeval,
     })

    switch (this.data.life_num) {
      case 1:
        this.setData({
          life_num_contents: WXDATA.one.content
        })
        break;
      case 2:
        this.setData({
          life_num_contents: WXDATA.two.content
        })
console.log(this.data.life_num_contents)
        break;
      case 3:
        this.setData({
          life_num_contents: WXDATA.three.content
        })
        console.log(this.data.life_num_contents)
        break;
      case 4:
        this.setData({
          life_num_contents: WXDATA.four.content
        })
        break;
      case 5:
        this.setData({
          life_num_contents: WXDATA.five.content
        })
        break;
      case 6:
        this.setData({
          life_num_contents: WXDATA.six.content
        })
        break;
      case 7:
        this.setData({
          life_num_contents: WXDATA.seven.content
        })
        break;
      case 8:
        this.setData({
          life_num_contents: WXDATA.eight.content
        })
        break;
      case 9:
        this.setData({
          life_num_contents: WXDATA.nine.content
        })
        break;
    }

    switch (this.data.excellence_num) {
      case 11:
        this.setData({
          excellence_num_contents: WXDATA.eleven.content,
          is_e_c_e_num_contents: WXDATA.ten.content,
        })
        break;
      case 22:
        this.setData({
          excellence_num_contents: WXDATA.twenty_two.content,
              is_e_c_e_num_contents: WXDATA.ten.content,
        })
        break;
      case 33:
        this.setData({
          excellence_num_contents: WXDATA.thirty_three.content,
              is_e_c_e_num_contents: WXDATA.ten.content,
        })
        break;
  
    }



 
    
  },
  onLoad: function () {

  },

})
