var northUSA = {
  init:function(){
    this.bind();
  },
  bind:function(){   
    $('#bangerBtn').on('click',this.submitEvent);
    $('#phoneBanner').on('focus',this.hiddenEvent);
    $('#fromBtn').on('click',this.fromEvent);
    $('#phoneInfoEle').on('focus',this.hiddenEvent);


  },
  hiddenEvent:function(){
    $('.errorBanger').hide();
    $('.errorInfo').hide();

  },
 
  submitEvent:function(){
    var numberEle = $('#phoneBanner');
    var phoneNum = numberEle.val();
    
    if(!phoneNum){
        var titText = '手机号不能为空';
        var errorEle = $('.errorBanger');
        errorEle.text(titText).show();
       
        return 
        }
    var isMobile =northUSA.isMobile(phoneNum);
    if (!isMobile) {
        var titText = '手机号格式错误'
        var errorEle = $('.errorBanger');
        errorEle.text(titText).show();       
        return 
       
        }
    },
  fromEvent:function(){
     var numberEle2 = $('#phoneInfoEle');
     var phoneNum2 = numberEle2.val();
     console.log(phoneNum2)
   
    
    
    if(!phoneNum2){
        var titText2 = '手机号不能为空';
        var errorEle2 = $('.errorInfo');
        errorEle2.text(titText2).show();
       
        return 
    }
    var isMobile2 =northUSA.isMobile(phoneNum2);
    if (!isMobile2) {
        var titText2 = '手机号格式错误'
        var errorEle2 = $('.errorInfo');
        errorEle2.text(titText2).show();       
        return 
       
    }

  },
  isMobile:function(source){
        return /^((\(\d{2,3}\))|(\d{3}\-))?(1[34578]\d{9})$/.test(source);
    }

}




$(function(){
    northUSA.init();
})