$(document).ready(function(){
  $('#add-btn').click(function(){
    $('#tester .grid').append("<div>Column</div>");
  });
  $('#remove-btn').click(function(){
    $('#tester .grid').remove('.div:last');
  });
});
