

  $(".row").on("change", ".sm-input-file", function() {
    var name = event.target.files[0].name;
    //$('.span-text').text(name);
    $(this).closest('.file-input-container').find('.span-text').text(name);
    $(this).closest('.file-input-container').find('.span-text').attr('href','img/'+name);
  });

$('.add-row').on('click' , function(){
    var numItems = $('.sm-input-file').length;
    $('.container-files').append(`<div class="row mb-3">
                                <div class="col-8">
                                <div class="file-input-container">
                                    <label class="for-sm-input-file" for="sm-ip-${numItems+1}">
                                        <svg id="Group_101" data-name="Group 101" xmlns="http://www.w3.org/2000/svg" width="38.316" height="45.979" viewBox="0 0 38.316 45.979">
                                        <path id="Path_301" data-name="Path 301" d="M101.653,857.25,92.4,848H71v38.316h30.653Z" transform="translate(-67.168 -844.168)" fill="#df2024"/>
                                        <path id="Path_302" data-name="Path 302" d="M96.821,847H73.832A3.833,3.833,0,0,0,70,850.832v38.316a3.833,3.833,0,0,0,3.832,3.831h30.653a3.833,3.833,0,0,0,3.832-3.831V858.5Zm7.663,42.148H73.832V850.832H92.99V858.5a3.833,3.833,0,0,0,3.832,3.831h7.663Z" transform="translate(-70 -847)" fill="#aa1518"/>
                                        </svg>
                                    </label>
                                    <input type="file" class="sm-input-file" id="sm-ip-${numItems+1}"/>
                                    <a target="_blank" class="span-text">لم يتم اختيار الملف</a>
                                    </div>
                                </div>
                                <div class="col-2 d-flex justify-content-end align-items-center">
                                <!--<input type="file" class="sm-input-file" id="edit-attach"/>-->
                                <label class="edit" for="sm-ip-${numItems+1}">تعديل </label>
                                </div>
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                <button class="delete">حذف </button>
                                </div>
                            </div>`);

  // to hide empty div
    var numItems = $('.sm-input-file').length;
    if(numItems>=1){
        $('.empty-container').css('display' , 'none');
    }
})


/*$(".row").on("click", ".delete", function() {
    $(this).closest('.row').remove();

    // to diplay empty div
    var numItems = $('.sm-input-file').length;
    if(numItems==0){
        $('.empty-container').css('display' , 'block');
    }
  });*/

  $('.row').on('click',".delete",function(){
    Swal.fire({
      title: 'هل انت متأكد من حذف هذا الملف',
      //showDenyButton: true,
      icon:'error',
      showCancelButton: true,
      cancelButtonText:'الغاء',
      confirmButtonText: 'حذف',
    }).then((result) => {
      if (result.isConfirmed) {
        $(this).closest('.row').remove();

        // to diplay empty div
        var numItems = $('.sm-input-file').length;
        if(numItems==0){
            $('.empty-container').css('display' , 'block');
        }
        //Swal.fire('تم الحذف بنجاح', '', 'success')
        Swal.fire({
              //position: 'top-end',
            icon: 'success',
            title: 'تم الحذف بنجاح',
            showConfirmButton: false,
            timer: 1400})
      } 
    })
  })
  

  