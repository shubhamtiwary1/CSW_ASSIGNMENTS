$("#submit").click(function(){
    console.log($("#em").val().length);
    if (($("#in1").val() == "") || ($("#in2").val() == "")) {
        alert("No Input");
    }
    let a = 0;
    console.log($("#em").val().length);
    for (i = 0; i < $("#em").val().length; i++) {
        if ($("#em").val()[i] == "@") {
            a = 1;
        }
    }
    if (a == 0) {
        alert("Invalid Input");
    }
});