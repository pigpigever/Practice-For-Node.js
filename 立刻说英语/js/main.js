
$(document).ready(function () {
    //监听窗口大小变化
    $(window).resize(function () {
        var width = $(this).width(),
            height = $(this).height()
        if (width >= 768 && width <= 992){
            $('#section-2 .row > div').eq(0).addClass('text-center')
            $('#section-2 .row > div').eq(2).addClass('text-center')
        }
    })

    //section-4动画效果
    $("#section-4").on("click", ".lists li",
    function() {
      $(this).animate({
        width: "520px"
      },
      300).siblings().animate({
        width: "45px"
      },
      300)
    })
})
