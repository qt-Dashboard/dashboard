$( document ).ready(function() {
    $(".filterBtn").change(function() {
       var countCheck = $('.filterBtn').filter(':checked').length;

       $('.leaflet-interactive').each(function () {
            if(($(this).attr('stroke')=='#063970')||($(this).attr('stroke')=='#873e23')||($(this).attr('stroke')=='#563261')){
                $(this).css('stroke','transparent');
            }
            $(".leaflet-routing-container").fadeOut();
        });
       
    if(countCheck=>0){

          $('.filterBtn').each(function () {
                if($(this).is(":checked")) {
                    $('.leaflet-marker-icon.'+$(this).val()).show();
                     $('.leaflet-marker-shadow.'+$(this).val()).show();
                }else{
                    $('.leaflet-marker-icon.'+$(this).val()).hide();
                     $('.leaflet-marker-shadow.'+$(this).val()).hide();
                }


            });

       
   }else{
     $('.leaflet-marker-icon').show();
     $('.leaflet-marker-shadow').show();
   }
    });

$('.leaflet-marker-icon').click(function(){
        $('.leaflet-interactive').each(function () {
            if(($(this).attr('stroke')=='#063970')||($(this).attr('stroke')=='#873e23')||($(this).attr('stroke')=='#563261')){
                $(this).css('stroke','transparent');
            }
            $(".leaflet-routing-container").fadeOut();
        });

        $('.panel').animate({
                left: "-240px"
              }, 750, function() {
                // Animation complete.
              });
            $('.openClose').removeClass('active');

      
    });
    $('.btnRoute').click(function(){
        $('.leaflet-interactive').each(function () {
            $(".leaflet-routing-container").fadeIn();
        });

         $('.panel').animate({
                left: "-240px"
              }, 750, function() {
                // Animation complete.
              });
            $('.openClose').removeClass('active');

      
    });
    $('.openClose').click(function(){
        if($(this).hasClass('active')){
            $('.panel').animate({
                left: "-240px"
              }, 750, function() {
                // Animation complete.
              });
            $(this).removeClass('active');
        }else{
            $('.panel').animate({
                left: "0px"
              }, 750, function() {
                // Animation complete.
              });
            $(this).addClass('active');
        }

        $('.leaflet-fade-anim .leaflet-popup').css('opacity','0');
        

      
    });

// Check or Uncheck All checkboxes
   $("#checkall").change(function(){
     var checked = $(this).is(':checked');
     if(checked){
       $(".filterBtn").each(function(){
         $(this).prop("checked",true);
       });
     }else{
       $(".filterBtn").each(function(){
         $(this).prop("checked",false);
       });
     }
     $('.filterBtn').each(function () {
                if($(this).is(":checked")) {
                    $('.leaflet-marker-icon.'+$(this).val()).show();
                     $('.leaflet-marker-shadow.'+$(this).val()).show();
                }else{
                    $('.leaflet-marker-icon.'+$(this).val()).hide();
                     $('.leaflet-marker-shadow.'+$(this).val()).hide();
                }


            });
   });
 
  // Changing state of CheckAll checkbox 
  $(".filterBtn").click(function(){
 
    if($(".filterBtn").length == $(".filterBtn:checked").length) {
      $("#checkall").prop("checked", true);
    } else {
      $("#checkall").prop("checked", false);
    }

  });


    
});