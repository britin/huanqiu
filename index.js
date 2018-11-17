(function(){
sina();
wechat();
huan();
phone();
more();
lunbo();
})();

// 鼠标放在新浪图标上变色
function sina(){
    $("wbLogo").onmouseover=function(){
        $("wbLogo").style.backgroundPosition="-156px -286px";
    }
    $("wbLogo").onmouseout=function(){
        $("wbLogo").style.backgroundPosition="-120px -286px";
    }
}
function $(id){
    return typeof id==="string"?document.getElementById(id):null;
}
// 鼠标放置在微信图标上显示二维码
function wechat(){
    $("wxLogo").onmouseover=function(){
        var pic=$("wxLogo").getElementsByTagName("img");
        pic[0].style.display="block";
    }
    $("wxLogo").onmouseout=function(){
        var pic=$("wxLogo").getElementsByTagName("img");
        pic[0].style.display="none";
    }
}
// 鼠标放置在环球上
function huan(){
    $("hqtLogo").onmouseover=function(){
        $("hqtLogo").style.backgroundPosition="-308px -286px";
    }
    $("hqtLogo").onmouseout=function(){
        $("hqtLogo").style.backgroundPosition="-264px -286px";
    }
}
// 鼠标放置在手机上
function phone(){
    $("hqaLogo").onmouseover=function(){
        $("hqaLogo").style.backgroundPosition="-396px -286px";
    }
    $("hqaLogo").onmouseout=function(){
        $("hqaLogo").style.backgroundPosition="-352px -286px";
    }
}
// 按下更多出现导航栏
function more(){  
    var tr=true; 
    $("navMore").onclick=function(){
    
        if(tr){
        $("moreNav").style.display="block";
        tr=false;
    }else{
        $("moreNav").style.display="none";
    }
}
   
}
// 轮播图
function lunbo(){
    // var img=document.getElementById('imgCon');
    // var left=document.getElementById('lBtn');
    // var right=document.getElementById('rBtn');
    // function animate(offset){
    //     var newLeft=parseInt(img.style.left)+offset;
    //     img.style.left=newLeft+'px';
    // }
    // left.onclick=function(){
    //     animate(600);
    // }
    // right.onclick=function(){
    //     animate(600);
    // }
        var i=0;
        var currentIndex=0,indicatorIndex=0;
        var lis=$("imgCon").children;
        $("imgCon").appendChild(lis[0].cloneNode(true));
        var size=lis.length;
        $("foucs").children[0].className="f";
        // 监听鼠标进入圆点
        var oli=$("foucs").children;
        for(j=0;j<oli.length;j++){
            (function(){
            // 获取单独的span标签
            var sp=oli[j];
            // 鼠标进入
            sp.onclick=function(){
                for(k=0;k<oli.length;k++){
                    oli[k].className="";
                }
                this.className="f";
                // constant($("imgCon"),-(720*k),60);
                currentIndex=indicatorIndex=j;
            }
            })(j)
        }
        // 自动轮播
        var timer=setInterval(function(){
            // span滚起来
            currentIndex++;
            
        },1000);

    $("lBtn").click(function(){
        i++;
        if(i==size){
            i=0;
        }
        $("imgCon").stop().animate({left:-i*720},500)
        // 排他
        $(".foucs span").eq(i).addClass("f").sublings().removeClass("f")
    })
    $("rBtn").click(function(){
        i--;
        var size=$("imgCon li").size;
        if(i==-1){
            i=size-1;
        }
        $("imgCon").stop().animate({left:-i*720},500)
        $(".foucs span").eq(i).addClass("f").sublings().removeClass("f")
    
    })
}
