$(function(){ 
//Scroller
	$(".section-scroll").sectionScroller({
		scrollerButton: "#section-scroller-button",
		scrollType: "swing",
		scrollDuration: 900,
	});

//hero text animation
	function changeText(cont1,cont2,speed){
		var Otext=cont1.text();
		var Ocontent=Otext.split("");
		var i=0;
		function show(){
		if(i<Ocontent.length)
		{  
  			cont2.append(Ocontent[i]);
  			i=i+1;
		};
		};
		var Otimer=setInterval(show,speed);
	};
  	changeText($("h2"),$(".text-animation"),90); 
});
