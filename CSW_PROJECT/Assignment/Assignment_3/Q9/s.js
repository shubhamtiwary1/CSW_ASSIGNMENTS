let b = 0;
let s1 = 0;
let s2 = 0;
$("#r").click(function () {
    b = Math.floor(Math.random() * 3) + 1;
    if (b == 1) {
        $("#out").html('<img src="Screenshot 2022-11-19 161610.png" alt="paper" width="10%">');
        $("#result").text("You Lose!!");
        $("#span2").text(++s2);
    }
    else if (b == 2) {
        $("#out").html('<img src="Screenshot 2022-11-19 161653.png" alt="Scisser" width="10%">');
        $("#result").text("You Win!!");
        $("#span1").text(++s1);
    }
    else {
        $("#out").html('<img src="Screenshot 2022-11-19 161541.png" alt="Rock" width="10%">');
        $("#result").text("Tie");
    }
});
$("#p").click(function () {
    b = Math.floor(Math.random() * 3) + 1;
    if (b == 1) {
        $("#out").html('<img src="Screenshot 2022-11-19 161610.png" alt="paper" width="10%">');
        $("#result").text("Tie");
    }
    else if (b == 2) {
        $("#out").html('<img src="Screenshot 2022-11-19 161653.png" alt="Scisser" width="10%">');
        $("#result").text("You Lose!!");
        $("#span2").text(++s2);
    }
    else {
        $("#out").html('<img src="Screenshot 2022-11-19 161541.png" alt="Rock" width="10%">');
        $("#result").text("You Win!!");
        $("#span1").text(++s1);
    }
});
$("#s").click(function () {
    b = Math.floor(Math.random() * 3) + 1;
    if (b == 1) {
        $("#out").html('<img src="Screenshot 2022-11-19 161610.png" alt="paper" width="10%">');
        $("#result").text("You Win!!");
        $("#span1").text(++s1);
    }
    else if (b == 2) {
        $("#out").html('<img src="Screenshot 2022-11-19 161653.png" alt="Scisser" width="10%">');
        $("#result").text("Tie");
    }
    else {
        $("#out").html('<img src="Screenshot 2022-11-19 161541.png" alt="Rock" width="10%">');
        $("#result").text("You Lose!!");
        $("#span2").text(++s2);
    }
});
