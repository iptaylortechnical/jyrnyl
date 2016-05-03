var keysPressed = 0;

function send(){
  
}


$(document).ready(function() {
  $('.day').click(function(e) {
    $('#' + e.target.id.split('d')[0] + 'dt').focus();
  })
})

$(document.body).keypress(function(e) {
  if (e.keyCode == 20) {
    e.preventDefault();

    var element = $('.text').last();

    element.html(element.html() + $.format.date(new Date(), 'HH:MM:ss'));
  }
  
  
})