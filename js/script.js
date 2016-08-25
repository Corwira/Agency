$(document).ready(function(){
    //benefits section
  $('.people').on('mouseover', function(){
     $(".b-content__text").html("A team of professionals to make your project perfect");
  });
    
   $('.layer').on('mouseover', function(){
     $(".b-content__text").html("Fast and simple way to get you the right architecture");
  });
    
  $('.eye').on('mouseover', function(){
     $(".b-content__text").html("View and see lorem ipsum dolor sit amet and so on");
  });
    
  $('.medal').on('mouseover', function(){
     $(".b-content__text").html("Lots of sertificats and impressions for our work");
  });
    
 $('.person').on('mouseover', function(){
     $(".b-content__text").html("Friendly support focused on answering every question quickly");
  });
    
  $('.lamp').on('mouseover', function(){
     $(".b-content__text").html("Work done right on time, no waiting, everything is ready for you");
  });
    
    
    
	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();
	
});
