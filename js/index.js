function readyFn(jQuery) {
    $("#products .color").click(function () {
        console.log($(this));
        let section = $(this).closest(".split-columns");
        console.log(section);
        let index = section.find(".color").index($(this));
        section.find(".color").removeClass("selected");
        section.find(".picture").removeClass("selected");
        section.find(".color").eq(index).addClass("selected");
        section.find(".picture").eq(index).addClass("selected");
    });

    $("[data-anchor]").click(function () {
        let target = $(this).data("anchor");
        $('html,body').animate({scrollTop: $("#" + target).offset().top},'slow');
    });
}

$(document).ready(readyFn);