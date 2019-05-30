//Khung anh
$(window).load(function () {
    $(".khungAnhCrop img").each(function () {
        $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
    });
});

$(window).resize(function () {
    $(".khungAnhCrop img").each(function () {
        $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
    });
});

$(function () {
    window.setTimeout(function () {
        $('.qcRight').addClass('active');
    }
    , 5000);
});

$(function () {
    $('.qcRight .btnClose').click(function () {
        $(this).parent().parent().removeClass('active');
    });
});

$(function () {
    window.setTimeout(function () {
        $('.qcLeft').addClass('active');
    }
    , 5000);
});

$(function () {
    $('.qcLeft .btnClose').click(function () {
        $(this).parent().parent().removeClass('active');
    });
});

$(function () {
    window.setTimeout(function () {
        $('.qcCenter').addClass('active');
    }
    , 5000);
});

$(function () {
    $('.qcCenter .btnClose').click(function () {
        $(this).parent().parent().removeClass('active');
    });
});