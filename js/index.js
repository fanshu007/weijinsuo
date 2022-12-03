$(function() {
    //获取工具提示的元素 初始化工具提示插件
    // 默认没有初始化需要手动初始化
    $('[data-toggle="tooltip"]').tooltip();

    // 屏幕滚动 让header定制
    // $(window).on('scroll',function(){
    //     var wScrollTop = $(this).scrollTop();
    //     if(wScrollTop>40){
    //         $('#top').hide();
    //         $('header').css({
    //             position:"fixed",
    //             top:0,
    //             // opacity:0.7
    //         })
    //     } else {
    //         $('#top').show();
    //         $('header').css({
    //             position:"static",
    //             opacity:1
    //         })            
    //     }
    // })
    
})
