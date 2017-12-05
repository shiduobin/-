$(document).ready(function () {
    $.nav();
    // 点击锚点跳转过度动画

    $(".nav-a").click(function () {
        var itemID = $(this).attr("href").slice(1, 6);
        $("html,body").animate({scrollTop: $("#" + itemID).offset().top}, 400);
    });

    $(window).scroll(function () {
        $.nav();
    });
});

// 导航与内容联动
$.nav = function () {
    var top = $(document).scrollTop(); // 滚动条距离顶部的距离
    var menu = $("#menu");
    var items = $("#content").find(".item"); // 所有的楼层
    var currentId = '' // 当前楼层ID
    items.each(function () {
        var itemTop = $(this).offset().top; // 元素距离顶部的高度
        if (top > itemTop - 200) {
            currentId = "#" + $(this).attr("id");
        } else {
            return false;
        }
    });
    var currentLink = menu.find(".active");
    if (currentId && currentLink.find("href") != currentId) {
        currentLink.removeClass("active");
        menu.find("[href=" + currentId + "]").addClass("active");
    }
}

