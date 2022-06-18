

function check_stat_player() {
    var url = "https://api.minetools.eu/ping/eheh.pl";
    $(".fa-signal").removeClass("red");
    $(".fa-signal").addClass("warning");
    $("#online-players").text("Pinging");
    $.getJSON(url, function (api) {
        $(".fa-signal").removeClass("warning");
        if (api.error) {
            $("#online-players").text("Offline");
            $(".fa-signal").addClass("red");
            return false;
        }
        $("#online-players").text(api.players.online);
        $("#sep-players").show();
        $("#max-players").text(api.players.max);
    });
}


function open_red(uri) {
    window.location.href = uri;
}




window.onload = function () {
    $("#sep-players").hide();
    check_stat_player();

    $(".fa-arrows-rotate").click(function () {
        check_stat_player();
    })
};