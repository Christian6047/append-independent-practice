$(".to-pack-button").click(function() {
    var userin = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "**Im going to pack " + userin + "**");
});

$(".course-button").click(function() {
    var userin = $(".course-list").val();
    $(".course-list").append("<li>" + "**I'm Excited for " + userin + "**");
});