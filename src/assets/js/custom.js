// Menu Active Class Add 

jQuery(document).ready(function(){
    // console.log("Ready function !!!!");
    jQuery("body").on("click","#open-left",function(){
        // jQuery("body").addClass("krishnaya-body-cls");
        // jQuery("body").css("overflow","hidden");
    })
    jQuery("body").on("click",".site",function(){
        // jQuery("body").removeClass("krishnaya-body-cls");
        // jQuery("body").css("overflow","auto");
    })
})

function adjustLayout() {
    // console.log("kkk",window.innerWidth)
    if (window.innerWidth < 600) {

        $(document).ready(function() {
            $('#mobile-menu li a').on('click', function() {
                // e.preventDefault(); // prevent default jump behavior
                $('#mobile-menu li').removeClass('active'); // remove active from all li
                $(this).parent('li').addClass('active'); // add active to the clicked link's parent li
                // location.reload();
            });
        });

    } else {
      
        $(document).ready(function() {
            $('#menu ul li a').on('click', function() {
                // e.preventDefault(); // prevent default jump behavior
                $('#menu ul li').removeClass('active'); // remove active from all li
                $(this).parent('li').addClass('active'); // add active to the clicked link's parent li
            });
        });
    }
  }
  // Call once
  adjustLayout();



//   jQuery(document).on("click", ".contact_send", function (e) {
//     e.preventDefault();
  
//     var emailid = $("#email").val();
//     var uname = $("#usname").val();
//     var phone = $("#phone").val();
//     var message = $("#message").val();
//     var querytype = $("#querytype").val();
//     var captch_cod = $("#g-recaptcha-response").val();
//     var regex_email = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
//     var reg_mobileno = /^[0-9]{10}$/;
//     var name_regex = /^[A-Za-z ]{3,}$/;
//       //var reg_mobile = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
//         // console.log("okkk",phone)

//             if (uname.trim() == '') {
//             document.getElementById("error_name").innerHTML =
//                 "Enter Your Name";
//             return false;
//             } else if (name_regex.test(uname)) {
//             document.getElementById("error_name").innerHTML = "";
//             }else{
//             document.getElementById("error_name").innerHTML =
//             "Enter Your Name";
//             return false;
//             }

//             if (emailid.trim() == "") {
//             document.getElementById("error_email").innerHTML =
//                 "Enter Your Email Address";
//             return false;
//             } else if (regex_email.test(emailid)) {
//             document.getElementById("error_email").innerHTML = "";
//             } else {
//             document.getElementById("error_email").innerHTML =
//                 "Enter a Valid Email Address";
//             return false;
//             }
  
  
//                 if (phone.trim() == '') {
//                 document.getElementById("error_phone").innerHTML =
//                     "Enter a Mobile No";
//                 return false;
//                 } else if (reg_mobileno.test(phone)) {
//                 document.getElementById("error_phone").innerHTML = "";
//                 } else {
//                 document.getElementById("error_phone").innerHTML =
//                     "Enter 10 Digit Mobile No";
//                 return false;
//                 }

//                 // if (reg_mobile.test(phone)) {
//                 //     document.getElementById("error_phone").innerHTML = "";
//                 //   } else {
//                 //     document.getElementById("error_phone").innerHTML =
//                 //       "Enter a Valid Phone Number";
//                 //     return false;
//                 //   }
                

//                 if (querytype.trim() == '') {
//                     document.getElementById("error_querytype").innerHTML =
//                         "Select Query Type";
//                     return false;
//                     } else { 
//                     document.getElementById("error_querytype").innerHTML = "";
//                     }
  
//                 if (message.trim() == '') {
//                 document.getElementById("error_message").innerHTML =
//                     "Enter Your Message";
//                 return false;
//                 } else { 
//                 document.getElementById("error_message").innerHTML = "";
//                 }
                
                
//              // //captch_code: captch_code 
  
//             jQuery.ajax({
//             url: 'submit.php',
//             type: 'post',
//             dataType: 'json',
//             data: { uname: uname, emailid: emailid, phone: phone,message: message,querytype:querytype,captch_cod:captch_cod},
//             beforeSend: function () {
//                 jQuery("#send_btn").addClass("spinner-border").show();
//                 jQuery("#contactFormss").addClass("beforsent");
                
//             },
//             success: function (data) {
//                 // console.log("fdsf",data[0].sucess)
//                 jQuery("#resultmsg").show();
//                 setTimeout(function () {
//                 //self.html("");
//                 jQuery("#resultmsg").hide();
//                 jQuery("#send_btn").removeClass("spinner-border");
                
//                 }, 3000);
//                 //jQuery(".thankyou_content").show();
//                 //jQuery('#btn').attr('disabled', false);
//                 // jQuery('.getcontactsub').attr('disabled', false);
//                 jQuery("#resultmsg").html("<p>" + data[0].sucess + "</p>");
//                 jQuery("#send_btn").removeClass("spinner-border");
//                 jQuery("#contactFormss").removeClass("beforsent");
//                 // jQuery("#successmsg").html("<p>Thank you for registering with us</p>");
//                 jQuery('#contactFormss')['0'].reset();
                
//                 grecaptcha.ready(function() {
//                 grecaptcha.execute('6LcmVSgrAAAAALNNMm_tt4P9N-7xQrQMijPxPtA_', {action: 'validate_captcha'}).then(function(token) {
//                     $('#g-recaptcha-response').val(token);
//                     $('#action').val('validate_captcha');
//                 });
//             });

//             }
//             });
  
//   });


// Toggle Button Hide
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    // var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = scroll / (docHeight - winHeight);
    // var scrollPercentRounded = Math.round(scrollPercent * 100);
    // console.log(scrollPercentRounded);
    if (scroll <= 1) {
    $("#scroll-mouse-cls").css("display","block");
    } else { 
    $("#scroll-mouse-cls").css("display","none");    
    }
});