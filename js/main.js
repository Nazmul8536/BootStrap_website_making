$(document).ready(function(){
    // superSlide js
    $('#slides').superslides({
        'play':3000,
        "fx":'fade',
        'pagination':false,
        'animation_speed':1000,

    });
    // typed js 




    var typed = new Typed(".subheading", {
        strings: ["Web developer.", "Bitm Course.","Web Designing","Php Course 7."],
        play:4000,
        typeSpeed:100,
        backSpeed:100,
        smartBackspace:true,
        loop:true,
        showCursor:false
      });

    //   owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    // easy Pie Chart
   
        
        //        $('.chart').easyPieChart({
		//         easing: 'easeInOut',
        //         barColor: '#fff',
		//         trackColor: false,
		//         scaleColor: false,
		//         lineWidth: 4,
        //         size: 152,
        //         onStep:function(form,to,percent){
        //             $(this.el).find('.percent').(math.percent(percent));
        //         }
            
        // });
        




        // var skillsTopOffset = $(".skillSection").offset().top;
        // $(window).scroll(function(){
        //     if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        //         $('.chart').easyPieChart({
        //             easing: 'easeInOut',
        //             barColor: '#fff',
        //             trackColor: false,
        //             scaleColor: false,
        //             lineWidth: 4,
        //             size: 152,
        //             onStep: function(from, to, percent) {
        //                 $(this.el).find('.percent').text(Math.round(percent));
        //             }
        //         });
               
        //     }
        // });






        var skillsTopOffset = $(".skillSection").offset().top;
        $(window).scroll(function(){
            if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                

        $('.chart').easyPieChart({
            //your options goes here
            easing:'easeInOut',
            barColor:'#fff',
            trackColor:false,
            scaleColor:false,
            lineWidth:4,
            size:152,
            onStep:function(from,to,percent){
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });



            }
        });

});