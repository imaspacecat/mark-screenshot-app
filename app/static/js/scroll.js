$(document).ready(function() {
	images = $(".move").each(function(){
		// $(this).css({"left": $(this).parent().width() * Math.random(), "top": $(this).parent().height() * Math.random()})
		animateDiv($(this));
		var clicked = false;
		$(this).click(function(){
			if(clicked){
				animateDiv($(this));
				$(this).width(200);
				$(this).css("z-index", 0);
				clicked = false;
			} else {
				$(".move").not(this).css("z-index", 0);
				$(this).css("z-index", 100);
				$(this).stop();
				$(this).width($(this).parent().width() / 3);
				clicked = true;
			}
		});
	});
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() + 100;
    var w = $container.width() + 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, 2500, function() {
        animateDiv($target);
    });

};
