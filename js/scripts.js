$(document).ready(function(){
  var stress = 0
  $("form#morning-routine").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress]:checked").each(function(){
      var stressmode = $(this).val();
      stress += 1;
      $('#stress-responses').append(stressmode + "<br>");
    });
    $("#high-stress-responses").show();
    $("input:checkbox[name=high-stress]:checked").each(function(){
      var highstressmode = $(this).val();
      stress += 2;
      $('#high-stress-responses').append(highstressmode + "<br>");
    });
    $("#coping-method-responses").show();
    $("input:checkbox[name=coping-method]:checked").each(function(){
      var copingmethodmode = $(this).val();
      stress -=1;
      $('#coping-method-responses').append(copingmethodmode + "<br>");
    });
    $('#morning-routine').hide();
    console.log(stress)
    if (stress <= 1) {
      $(".stress").show();
    }
    if ((stress >= 2) && (stress <= 10)) {
      $(".stress2").show();
    }
    if ((stress >= 11) && (stress <= 18)) {
      $(".stress3").show();
    }
  });
});
