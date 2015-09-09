$(window).load(function(){
	$('h1').fadeIn('slow').delay('3000').fadeOut('slow');

	$('html').dblclick(function(e){
		e.preventDefault();
    var rfs =  this.requestFullScreen
            || this.webkitRequestFullScreen
            || this.mozRequestFullScreen;

    rfs.call(this);
	});
});
