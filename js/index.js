function readyFn(jQuery) {
    $("#products .color").click(function () {
        let section = $(this).closest(".split-columns");
        let index = section.find(".color").index($(this));
        section.find(".color").removeClass("selected");
        section.find(".picture").removeClass("selected");
        section.find(".color").eq(index).addClass("selected");
        section.find(".picture").eq(index).addClass("selected");
    });

    $(".materials .material").click(function name() {
        let index = $(".materials .material").index($(this));
        $(".materials .material, .materials .description").removeClass("selected");
        $(".materials .material").eq(index).addClass("selected");
        $(".materials .description").eq(index).addClass("selected");
    });

    $("[data-anchor]").click(function () {
        let target = $(this).data("anchor");
        $('html,body').animate({scrollTop: $("#" + target).offset().top},'slow');
    });
}

$(document).ready(readyFn);