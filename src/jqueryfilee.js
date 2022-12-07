import $ from 'jquery'

$(document).ready(function () {
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $(".xl1").hide();
    $("#t1").show();
    $(".but1").click(function () {
        $("#p1").show();
        $("#p2").hide();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide();
        $("#t1").hide();
    });
    $(".but2").click(function () {
        $("#p1").hide();
        $("#p2").show();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide();

        $("#t1").hide();
    });
    $(".but3").click(function () {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").show();
        $("#p4").hide();

        $("#t1").hide();
        $("#p5").hide();
    });
    $(".but4").click(function () {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").hide();
        $("#p4").show();
        $("#p5").hide();

        $("#t1").hide();
    });
    $(".but5").click(function () {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").hide();

        $("#t1").hide();
        $("#p4").hide();
        $("#p5").show();
    });
});