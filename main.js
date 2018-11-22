$(document).ready(function(){
    $("#select1").on("click",function(){
      if ($("#usa").is(":selected")) {
        $("#select2").show();
      }
      if ($("#russia").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#romania").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#brazil").is(":selected")) {
        $("#select2").hide();
      }
      if ($("#uk").is(":selected")) {
        $("#select2").hide();
      }
    });
});
