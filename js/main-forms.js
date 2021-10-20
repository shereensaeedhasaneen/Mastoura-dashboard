const pages = Array.from(document.querySelectorAll(".page"));
const nextBtn = document.querySelectorAll(".next-button");
const prevBtn = document.querySelectorAll(".prev-button");
const bullets = document.querySelectorAll(".step .bullet");
var step_counter=1;
// const choices = document.querySelectorAll("input[type='choice']");

let currentBullet = 0;
let index = 0;


/** Switch English Numbers To arabic numbers **/
function toArabicNumber(strNum) {
    var en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var an = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    var cache = strNum;
    for (var i = 0; i < 10; i++) {
        var regex_ar = new RegExp(en[i], 'g');
        cache = cache.toString().replace(regex_ar, an[i]);
    }
    return cache;
  }

  /**  Switch Arabic numbers to english numbers  **/
  function toEnglishNumber(strNum) {
    var en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var an = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    var cache = strNum;
    for (var i = 0; i < 10; i++) {
        var regex_ar = new RegExp(an[i], 'g');
        cache = cache.toString().replace(regex_ar, en[i]);
    }
    return cache;
  }

/* Click Previous button */ 
prevBtn.forEach(button => {
    button.addEventListener("click" , function(){
        changePage('prev');
    });
});
/* Click Next button */ 
nextBtn.forEach(button => {
    button.addEventListener("click" , function(){
        changePage('next');
    });
});
/* Change Pages, bullets , Sidebar */ 
function changePage(button){
    const currentPage = document.querySelector(".page.active");
    const currentSidebar = document.querySelector(".sidebar-content.active");
    // const currentSidebarPhone = document.querySelector(".sidebar-phone.active");
    index = pages.indexOf(currentPage);
    pages[index].classList.remove("active");
    // sidebar[index].classList.remove("active");
    if(button == "next"){
        index ++;
        bullets[currentBullet + 1].classList.add("active");
        currentBullet +=1;
        console.log(index);
        if(index == 2){
            $('.sidebar-phone-2').css('display' , 'block');
        }
        else{
            $('.sidebar-phone-2').css('display' , 'none');
        }
        $('.progress-line-mobile .counter-step-mobile').text(toArabicNumber(++step_counter));
        // $(sidebarPhone[index]).children('.current').slideUP();
        $('.sidebar-phone').slideUp();
        $(window).scrollTop(0);

    }else if(button == "prev"){
        index --;
        bullets[currentBullet].classList.remove("active");
        currentBullet --;
        if(index == 2){
            $('.sidebar-phone-2').attr('style' , 'display: block');
        }
        else{
            $('.sidebar-phone-2').css('display' , 'none');
        }
        $('.progress-line-mobile .counter-step-mobile').text(toArabicNumber(--step_counter));
        $('.sidebar-phone').slideUp();
        $(window).scrollTop(0);
    }
    pages[index].classList.add("active");
    // sidebar[index].classList.add("active");
}

$(document).ready(function(){
    $('select').niceSelect();     
    $('.slidUP').slideUp();
    /** Render days in select */
    $('.page-5 .nice-select.selectDay.wide span').text('١');
    for(var i=1 ; i <= 31 ; i++){
       $('.page-5 .nice-select.selectDay.wide .list').append(`
        <li data-value="${toArabicNumber(i)}" class="option">${toArabicNumber(i)}</li>
        `);
    }
    /** Render months in select */
    $('.page-5 .nice-select.selectMonth.wide span').text('١');
    for(var i=1 ; i <= 12 ; i++){
        $('.page-5 .nice-select.selectMonth.wide .list').append(`
         <li data-value="${toArabicNumber(i)}" class="option">${toArabicNumber(i)}</li>
         `);
     }
     /** Render years in select */
     $('.page-5 .nice-select.selectYear.wide span').text('١٩٨٠');
     for(var i=1980 ; i <= 2021 ; i++){
        $('.page-5 .nice-select.selectYear.wide .list').append(`
         <li data-value="${toArabicNumber(i)}" class="option">${toArabicNumber(i)}</li>
         `);
     }

    /** Page-2 When Click Yes Button **/
    $('button.yes').click(function(){
        $('.page-2 .page-form').css('display' , 'none');
        $('.page-2 .secondPage').css('display' , 'block');
        $('.page-2 .hidden-buttons-inFirst').css('display' , 'flex');
        $('.page-2 .hidden-buttons-inFirst .btns').css('display' , 'flex');
        $('.sidebar-phone').slideUp();
        $(window).scrollTop(0);
    });

    

    /** Page-2 Click No when adding new person */
    $('button.no').click(function(){
        $('.progress-line-mobile .counter-step-mobile').text(toArabicNumber(++step_counter));
        const currentPage = document.querySelector(".page.active");
        index = pages.indexOf(currentPage);
        pages[index].classList.remove("active");
        //sidebar[index].classList.remove("active");
        pages[index + 1].classList.add("active");
        //sidebar[index + 1].classList.add("active");
        bullets[currentBullet + 1].classList.add("active");
        index++;
        if(index == 2){
            $('.sidebar-phone-2').attr('style' , 'display: block');
        }
        currentBullet +=1;
        $('.sidebar-phone').slideUp();
        $(window).scrollTop(0);
    });
    /* Page-2 Render new rows */ 
    $(".addDiv").click(function () {
            $(".secondPage .inputs-row").append(`<div class="form-group newRow row mt-3">
                            <div class="d-none d-sm-flex col-sm-1 text-center align-self-center">
                            <div class="count">   
                            </div>
                            </div>
                            <div class="col-md-5 col-5">
                            <input type="text" class="form-control input-name" 
                            id="staticEmail" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'الاسم الثلاثي'" placeholder=" الاسم الثلاثي">
                            </div>
                            <div class="col-md-5 col-5">
                            <input type="text" class="form-control input-name" 
                            id="staticEmail" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'الرقم القومي'" placeholder="الرقم القومي">
                            </div>
                            <div class="col-md-1 col-1 text-center align-self-center">
                            <span class="btn-delete">
                                <i class="fas fa-times fa-delete"></i>
                            </span>
                            </div>
                        </div>`);
                $(".secondPage .inputs-row-mobile").append(`
                <div class="form-group newRow row mt-3">
                <div class="col-md-1 col-12 d-flex justify-content-end text-center">
                <span class="btn-delete">
                    <i class="fas fa-times fa-delete"></i>
                </span>
                </div>
                <div class="col-md-5 col-12">
                <input type="text" class="form-control input-name" 
                id="staticEmail" onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'الاسم الثلاثي'" placeholder=" الاسم الثلاثي">
                </div>
                <div class="col-md-5 col-12">
                <input type="text" class="form-control input-name" 
                id="staticEmail" onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'الرقم القومي'" placeholder="الرقم القومي">
                </div>
                </div>`);
                addCounter();
            
        }
    );
    


    /** Page-2 Add counter to rows */
    function addCounter(){
        var input_list = Array.from(document.querySelectorAll(".inputs-row .count"));
        $('.count').empty();
        for(var count = 0 ; count < input_list.length ; count++){
            $(input_list[count]).append(`<span>${toArabicNumber(count + 1)}</span>`);
        }
    }
  /* Page-2 Delete row Desktop */
  $(".secondPage .inputs-row").on('click', '.btn-delete', function() {
    $(this).closest('.form-group').remove();
    $('.count').empty();
    addCounter();
  });

  /* Page-2 Delete row Mobile */
  $(".secondPage .inputs-row-mobile").on('click', '.btn-delete', function() {
    $(this).closest('.form-group').remove();
  });

   /* Page-3 Filter based on year */ 
   

  /** Page-3 Rnage Input **/
  var agRangeSlider = function () {
    var agDisplayWidth = $(window).width(),
      agSlider = $('.js-ag-range-slider'),
      agRange = $('.js-ag-range-slider_range'),
      agValue = $('.js-ag-range-slider_value'),
      agFill = $('.js-ag-range-slider_fill');

      $('.page-3 input[type="radio"]').change(function(){
        var choiceId = $(this).attr('id');
        if(choiceId == 'one-year'){
            $('.part-2 span.debt-price').text(toArabicNumber("12"));
            count(2);
        }else if(choiceId == 'two-year'){
            $('.part-2 span.debt-price').text(toArabicNumber("24"));
            count(4);
        } 
        });

        function count(percentage = 2){
            price = parseInt(agRange.val());
            $('input#price').val(toArabicNumber(price * 100));
            $('.part-1 span.debt-price').text(toArabicNumber(price * 100) + ' جنية');
            var calculatePayment = ((price * 100) * (1 + (( percentage /
                100)))) /
                (toEnglishNumber($('.sidebar-2 .part-2 span.debt-price').text()));
            $('.debt-1 span.debt-price').text(toArabicNumber(Math.round(calculatePayment)) + 
            ' جنية');
        }
    $('input#price').on('change' , function(e) {
        let price_val = $(this).val();
        agRange.val(price_val / 100);
        agFill.width((price_val / 100) + '%');
        count();
    });
    $('input#price').on('keydown' , function(e) {
        return e.which != 13;  
    });
    agSlider.each(function () {
      agRange.on('input', function () {
        price = parseInt(agRange.val());
        calculateValue = this.value * 100;
        $('input#price').val(toArabicNumber(calculateValue));
        $('.part-1 span.debt-price').text(toArabicNumber(calculateValue) + ' جنية');
        count();
        agFill.width(((this.value * 100) / 100) + '%');

        if (this.value <= 100) {
          agFill.addClass('js-ag-range-slider_fill');
        }
        // agValue.text(Math.round(this.value * 100) + '%');
      });
    });
  };

  agRangeSlider();

  /* Page-5 Add Another Address */
  $('.page-5 input[type="radio"]').change(function () {
    let choiceId = $(this).attr('id');
    if(choiceId == 'another-address-btn'){
        $('.page-5 .another-address-content').css('display' , 'block');
    }
    else if(choiceId == ''){
        $('.page-5 .another-address-content').css('display' , 'none');
    }
  });

    /** Page-5 Switch To Next Form */
    $('.switch-part-2').click(function(){
        $('.page-5 .form-1').css('display' , 'none');
        $('.page-5 .form-2').css('display' , 'block');
        $(window).scrollTop(0);
    });

    /** Page-5 Switch To Prev Form */
    $('.prev-form-1').click(function(){
        $('.page-5 .form-2').css('display' , 'none');
        $('.page-5 .form-1').css('display' , 'block');
        $(window).scrollTop(0);
    });

  /** Page-5 Enter Year Experience */
  $('.page-5 input[type="radio"][name="experience"]').change(function () {
    let choiceId = $(this).attr('id');
    if(choiceId == 'radio-experience'){
        $('.page-5 .input-year').css('display' , 'block');
    }
    else {
        $('.page-5 .input-year').css('display' , 'none');
    }
  });

  /********************  Page-6  *************/
  /** Forms based on radio btn **/
  $('.page-6 input[type="radio"][name="guarantor"]').change(function() {
      
      let choiceClass = $(this).attr('class');
      if(choiceClass == 'form-check-input personal-radio'){
        $('.personal-form').css('display' , 'flex');
        $('.organization-form').css('display' , 'none');
      }
      else if(choiceClass == 'form-check-input organization-radio'){
        $('.personal-form').css('display' , 'none');
        $('.organization-form').css('display' , 'flex');
      }
      else{
        $('.personal-form').css('display' , 'none');
        $('.organization-form').css('display' , 'none');
      }
      
  });

  /** Switch To Upload Form **/
  $('.page-6 .switch-to-uploadForm').on('click' , function() {
      $('.page-6 .guarantor-form').css('display' , 'none');
      $('.page-6 .upload-form').css('display' , 'block');
      $('.sidebar-guarantor').css('display' , 'none');
      $('.sidebar-upload-file').css('display' , 'block');
      $('.sidebar-phone .sidebar-guarantor').removeClass('current');
      $('.sidebar-phone .sidebar-upload-file').addClass('current');
      $('.sidebar-phone').slideUp();
      $(window).scrollTop(0);
  });

  /** Switch To Guarantor Form **/
  $('.page-6 .prev-guarantor-form').on('click' , function() {
    $('.page-6 .guarantor-form').css('display' , 'block');
    $('.page-6 .upload-form').css('display' , 'none');
    $('.sidebar-phone .sidebar-upload-file').removeClass('current');
    $('.sidebar-phone .sidebar-guarantor').addClass('current');
    $('.sidebar-phone .sidebar-upload-file').css('display' , 'none');
    $('.sidebar-phone').slideUp();
    $(window).scrollTop(0);
  });
  /** Page-6 Upload File **/
    var filesclass = Array.from(document.querySelectorAll('.input-file'));
    var upload_btns = Array.from(document.querySelectorAll('.upload-btn'));
    $('.input-file').change(function (e) { 
        let file = e.target.files;
        let filename = file[0].name;
        let fileIndex = filesclass.indexOf(this);
        var showFile = 
        `<img src="img/Attach.svg" style="margin-left: 10px" alt="Attach"><span>${filename} </span>`;
        upload_btns[fileIndex].innerHTML = showFile;
        $(this).parent().parent().append(`<div class="col-2 col-md-1 text-center align-self-center" style="z-index: 2">
        <span class="btn-delete">
            <i class="fas fa-times fa-delete"></i>
        </span>
        </div>`);
        $(upload_btns[fileIndex]).css('background' , '#1fbdc3');
    });
   
    /** Page-6 remove file **/

    $('.upload-form').on('click' , '.btn-delete' , function() {
        let fileIndex = filesclass.indexOf(this);
        let filediv = $(this).parent().parent().children('.choose-file');
        let currentInput = $(filediv).children('.input-file');
        let currentUpload = $(filediv).children('.upload-btn');
        $(currentInput).val('');
        $(currentUpload).text('اختيار الملفات');
        $(this).parent().remove();
        $(currentUpload).css('background' , '#454545');
    });

    /********************** Page-7  **********************/
    $('.page-7 .order').on('click' , function() {
        $( this ).css({
            "color" : "#fff", "background-color" : "#454545" , "border" : "transparent"
        });
        setTimeout(() => {
            $('.parent-container').css('display' , 'none');
            $('.img').css('display' , 'none');
            $('.final-page').css('display' , 'block');
            $('.final-page').css('display' , 'block');    
        }, 300);
        $('.copyright-reserved').css('margin-top' , '0px');
        
        // $(this).css('background' , '#454545' , 'color' , '#fff');
    });
    $('.final-page .back-to-main').on('click' , function() {
        location.reload();  
    });
   /******** Mobile Functions ********/ 
   /** Show Current Sidebar */
   
   $('.fa-info').on('click' , function() { 
       if(index == 5){
        $(sidebarPhone[index]).slideToggle();
        $(sidebarPhone[index]).children('.current').slideDown();
       } 
       else{
           $(sidebarPhone[index]).slideToggle();
           $(sidebarPhone[index]).children('.current').slideDown();
       } 
   });

   /** Count Pages in Mobile **/
  $('.progress-line-mobile .counter-step-mobile').text(toArabicNumber(step_counter));

});