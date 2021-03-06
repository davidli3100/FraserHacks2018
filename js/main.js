
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });




    $('.active-work-slider').owlCarousel({
    stagePadding: 160,
    center: true,
    items:1,
    loop:true,
            nav: true,
    margin:10,
        responsive:{
            0:{
                items:1
            },
            634:{
                items:1
            },
            1000:{
                items:1
            }
        }

    });

 $( ".owl-prev").html('<span class="lnr lnr-arrow-left"></span>');
 $( ".owl-next").html('<span class="lnr lnr-arrow-right"></span>');





    $('.active-work-slider2').owlCarousel({
        loop:true,
        items:1,
        margin:10,
    });
    



    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      
    // -------   Mail Send ajax

 /*    $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
    form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'https://formspree.io/david.li3100@gmail.com', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        }); not needed for now
    }); */
 });

 //submit paypal

 var a = document.getElementById('paypalForm');
 a.addEventListener('submit',function(e) {
 e.preventDefault();
 var b = document.getElementById('paypalAmount').value;
 window.location.href = 'http://paypal.me/davidli3100/'+b;
 });

 //end paypal

 //now start toggling for sponsorship options
 $('.paypalToggle').click(function(){
    $('.toggleSection').hide(1000);
    $('.paypalSection').show(700);
 });

 $('.paypalCloseNew').click(function(){
    $('.paypalSection').hide(1000);
    $('.toggleSection').show(700);
 });

 $('.messageCloseNew').click(function(){
    $('.messageSection').hide(1000);
    $('.toggleSection').show(700);
 });
 
 $('.messageToggle').click(function(){
    $('.toggleSection').hide(1000);
    $('.messageSection').show(700);
 });


