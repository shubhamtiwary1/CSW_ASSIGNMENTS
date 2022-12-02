let a = 0;
$("#btn1").click(function(){
    $("#tbd").append('<tr id="Row' + a + '"><td>Row ' + a++ + '</td></tr>');
});
$("tr").dblclick(function(){
    $(this).css({"color":"red"});
});
$("#btn2").click(function(){
    let x = $('#inp').val();
    let id = '#Row'+x;
    console.log(id);
    $(id).remove();  
});