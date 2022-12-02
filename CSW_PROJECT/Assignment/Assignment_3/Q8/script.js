$("#btn").click(function(){
    $("tr").hide();
    let val = $(".choose :selected").val();
    let x = "."+val;
    $(x).show();
    console.log(x);
});