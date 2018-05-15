console.log('CONNECTED TO SCRIPT');

//GALLERY POP EFFECT:

$('.img-overlay').on('mouseover', function(){
    this.classList.add('pop-effect');
});

$('.img-overlay').on('mouseout', function(){
    this.classList.remove('pop-effect');
});

//FOOTER:

$(document).ready(function() {
    function setFoot() {
        windowHeight = $(window).innerHeight();
        headHeight = $('header').innerHeight();
        mainHeight = $('main').innerHeight();
        totalHeight = headHeight+mainHeight;
        if(totalHeight > windowHeight) {
            $('.foot').addClass('margin-top');
        } else {
            $('.foot').css('position', 'absolute');
            $('.foot').css('top', windowHeight);
        }
    };
    setFoot();
    
    $(window).resize(function() {
      setFoot();
    });
  });
