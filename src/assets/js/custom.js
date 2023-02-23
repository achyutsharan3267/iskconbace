
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


function TwakTo(){
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/63f530914247f20fefe1e35a/1gpqsbe7g';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}

function dark(){
    const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
}