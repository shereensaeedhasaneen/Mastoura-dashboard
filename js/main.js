$(function() {

  /*$('.js-check-all').on('click', function() {

  	if ( $(this).prop('checked') ) {
	  	$('th input[type="checkbox"]').each(function() {
	  		$(this).prop('checked', true);
        $(this).closest('tr').addClass('active');
        $('.approave-btn').prop('disabled',false)
	  	})
  	} else {
  		$('th input[type="checkbox"]').each(function() {
	  		$(this).prop('checked', false);
        $(this).closest('tr').removeClass('active');
        $('.approave-btn').prop('disabled',true)
	  	})
  	}

  });

  $('tbody tr th[scope="row"] input[type="checkbox"]').on('click', function() {
   //$(this).prop('checked' , true)
    if ( $(this).closest('tr').hasClass('active') ) {
      $(this).closest('tr').removeClass('active');
    } else {
      $(this).closest('tr').addClass('active');
    }
  });

    
  $(" tbody tr th input[type='checkbox']").change(function(){
    var a = $("tbody tr th input[type='checkbox']");

    if(a.length/2 == a.filter(":checked").length){
        //alert('all checked');
        $('.js-check-all').prop('checked', true);
    }

    else{
      $('.js-check-all').prop('checked', false);
    }

    if(a.filter(":checked").length!=0){
      $('.approave-btn').prop('disabled',false)
    }
    else{
      $('.approave-btn').prop('disabled',true)
    }
});*/

/******######### check on click #############**************/
/*$(".clickable").click(function(e){
  //if (e.target.type != 'checkbox'){
    var cb = $(this).closest('tr').find("input[type=checkbox]");
    cb.trigger('click');
    var a = $("tbody tr th input[type='checkbox']");
    if(a.length/2 == a.filter(":checked").length){
        //alert('all checked');
        $('.js-check-all').prop('checked', true);
    }

    else{
      $('.js-check-all').prop('checked', false);
      console.log(a.filter(":checked").length);
    }
 // }
});*/


/**############# get selected option to change backgroun #############*/


 $('select.status').change(function(){
    var selected_text = $(this).find(":selected").text();
    //if( $('ul.list').css('visibility') == 'hidden'){
      //$('.nice-select ul').css('visibility','visible');
    //}
    if(selected_text=='تمت الموافقه'){
      $(this).closest("div").removeClass();
      $(this).closest("div").addClass('green');
  //   $('.nice-select ul').css('visibility','hidden')
    }
    else if(selected_text=='قيد الدراسه'){
      $(this).closest("div").removeClass();
      $(this).closest("div").addClass('orange');
     // $('ul.list').css('visibility','hidden')
    }
    else if(selected_text=='مرفوض'){
      $(this).closest("div").removeClass();
      $(this).closest("div").addClass('red');
     // $('ul.list').css('visibility','hidden')
    }

    else{
      $(this).closest("div").removeClass();
      $(this).closest("div").addClass('orange');
    }
  
 })

/****************** to close niceselect after choose option ***********/

/*$('.nice-select ul li').click(function() {
  //alert('clicke')
    $(this).closest('.nice-select ul').css('visibility','hidden') ;
  });*/
  
  

  
/****************** Approve Button Function ***********/

/*$('.approave-btn').click(function(){
  $.each($("tbody tr th input[type='checkbox']:checked"), function(){
    $(this).closest('tr').find('td.approve').html('');
      $(this).closest('tr').find('td.approve').append('<div class="dark-red" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> تعيين  </div>');
  });
})*/


/******* href on table row click *************/
$('*[data-href]').on('click', function() {
  window.location = $(this).data("href");
});
});