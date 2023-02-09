
function myFunction(){
// remove all .active classes when clicked anywhere
hide = true;
$('body').on("click", function () {
    if (hide) $('.nav-item').removeClass('active');
    hide = true;
});

// add and remove .active
$('body').on('click', '.nav-item', function () {

    var self = $(this);

    if (self.hasClass('active')) {
        $('.nav-item').removeClass('active');
        return false;
    }

    $('.nav-item').removeClass('active');

    self.toggleClass('active');
    hide = false;
});

}

