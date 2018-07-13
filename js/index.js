(function () {
    var toTop=document.querySelector(".fanhuidingbu");
    console.log(toTop);
    toTop.onclick=function(){
        var st=document.documentElement.scrollTop;
        var speed=st*30/500;
        var t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }
})()
