var removecartitembutton = document.getElementsByClassName('circle');
console.log(removecartitembutton);
for (var i = 0; i < removecartitembutton.length; i++) {
    var button = removecartitembutton[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
    });   
}
function updateCartTotal(){
    var cartitemcontainer = document.getElementsByClassName('cart')[0];
    cartitemcontainer.getElementsByClassName('');
}