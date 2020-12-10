// // for automatic slideshow
$(document).ready(function(){
	setInterval(changeSlide,3000);
})
// for next and previous slidshow

function changeSlide(direction){
	var currentImg=$(".active");
	var nextImg=currentImg.next();
	var previousImg=currentImg.prev();
	if (direction=='next'){
		if(nextImg.length)
			nextImg.addClass('active');
		else{
			$('.slider img').firstClass().addClass('active');
		}
	}else{
		if(previousImg.length)
			previousImg.addClass('active');
		else{
			$('.slider img').last().addClass('active');
		}

	}
	currentImg.removeClass('active');
}



// for pagination
$(document).ready(function(){
	var a=$(".t");
	$(" .page_item ").on("click", function(){

		for(i=0;i<4;i++){
			a.eq(i).removeClass("active");
		}
		
		var b = this.id;
		a.eq(b).addClass("active");
	});
	
});