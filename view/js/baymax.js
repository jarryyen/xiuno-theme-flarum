$(function() {
    //前进
    $(".win-forward").click(function() {
        window.history.forward(1);
    });
    //后退
    $(".win-back").click(function() {
        window.history.back(-1);
    });
    //返回顶部
    $(".win-backtop").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $('.win-backbottom').click(function(){
      $('html,body').animate({
          scrollTop:$('#post_create_dl').offset().top
      }, 500);
    });
    //刷新
    $(".win-refresh").click(function() {
        window.location.reload();
    });
    //打印
    $(".win-print").click(function() {
        window.print();
    });
    //关闭
    $(".win-close").click(function() {
        window.close();
    });
    //全选
    $('.checkall').click(function() {
        var e = $(this);
        var name = e.attr("name");
        var checkfor = e.attr("checkfor");
        var type;
        if (checkfor != '' && checkfor != null && checkfor != undefined) {
            type = e.closest('form').find("input[name='" + checkfor + "']");
        } else {
            type = e.closest('form').find("input[type='checkbox']");
        };
        if (name == "checkall") {
            $(type).each(function(index, element) {
                element.checked = true;
            });
            e.attr("name", "ok");
        } else {
            $(type).each(function(index, element) {
                element.checked = false;
            });
            e.attr("name", "checkall");
        }
    });
    //显示下拉菜单
    $('.Dropdown-toggle').click(function() {
        $(this).closest('.ButtonGroup, .Dropdown').addClass("open");
    });
    //关闭下拉菜单
    $(document).bind("click", function(e) {
        if ($(e.target).closest(".ButtonGroup.open, .Dropdown.open").length == 0) {
            $(".ButtonGroup, .Dropdown").removeClass("open");
        }
    });
    //关闭警告框
    $('.alert .close').each(function() {
        $(this).click(function() {
            $(this).closest('.alert').remove();
        });
    });
    //单选
    $('.radio label').each(function() {
        var e = $(this);
        e.click(function() {
            e.closest('.radio').find("label").removeClass("active");
            e.addClass("active");
        });
    });
    //多选
    $('.checkbox label').each(function() {
        var e = $(this);
        e.click(function() {
            if (e.find('input').is(':checked')) {
                e.addClass("active");
            } else {
                e.removeClass("active");
            };
        });
    });
    //静止在顶部或尾部
    $(".fixed").each(function() {
        var e = $(this);
        var style = e.attr("data-style");
        var top = e.attr("data-offset-fixed");
        if (top == null) {
            top = e.offset().top;
        } else {
            top = e.offset().top - parseInt(top);
        };
        if (style == null) {
            style = "fixed-top";
        };
        $(window).bind("scroll", function() {
            var thistop = top - $(window).scrollTop();
            if (style == "fixed-top" && thistop < 0) {
                e.addClass("fixed-top");
            } else {
                e.removeClass("fixed-top");
            };
            var thisbottom = top - $(window).scrollTop() - $(window).height();
            if (style == "fixed-bottom" && thisbottom > 0) {
                e.addClass("fixed-bottom");
            } else {
                e.removeClass("fixed-bottom");
            };
        });
    });
    //图片自适应
    var w = $(".Post-body").width();//容器宽度
    $(".Post-body img").each(function(){//如果有很多图片，我们可以使用each()遍历
        var img_w = $(this).width();//图片宽度
        var img_h = $(this).height();//图片高度
        if(img_w>w){//如果图片宽度超出容器宽度--要撑破了
            var height = (w*img_h)/img_w; //高度等比缩放
            $(this).css({"width":w,"height":height});//设置缩放后的宽度和高度
        }
    });
    //显示隐藏发帖框
    var h = $(document).height();
	$(".overlay").css({"height": h });
	$(".action").click(function(){
		$(".overlay").css({'display':'block'}).animate({'opacity':'0.8'});
		$(".destroy").stop(true).css({'display':'block'}).animate({'margin-top':'40px','margin-bottom':'10px','opacity':'1'},500);
	});
	$(".closediv").click(function(){
		$(".destroy").stop(true).css({'display':'none'}).animate({'margin-top':'-292px','opacity':'0'},500);
		$(".overlay").css({'display':'none'}).animate({'opacity':'0'});
	});
})
//Off Canvas 导航
$(function(){function a(){e.toggleClass(j),d.toggleClass(i),f.toggleClass(k),g.toggleClass(l)}function b(){e.addClass(j),d.animate({left:"0px"},n),f.animate({left:o},n),g.animate({left:o},n)}function c(){e.removeClass(j),d.animate({left:"-"+o},n),f.animate({left:"0px"},n),g.animate({left:"0px"},n)}var d=$(".pushy"),e=$("body"),f=$("#offcanvas"),g=$(".push"),h=$(".site-overlay"),i="pushy-left pushy-open",j="pushy-active",k="offcanvas-push",l="push-push",m=$(".menu-btn, .pushy a"),n=200,o=d.width()+"px";if(cssTransforms3d=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}())m.click(function(){a()}),h.click(function(){a()});else{d.css({left:"-"+o}),f.css({"overflow-x":"hidden"});var p=!0;m.click(function(){p?(b(),p=!1):(c(),p=!0)}),h.click(function(){p?(b(),p=!1):(c(),p=!0)})}});