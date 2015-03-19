var drinks = Object.keys(db);

$(function(){
  $('.next').on('click', function(){
    var drink = getDrink();
    $('#drinkText').text(drink[0]);
  })
})

function getDrink(){
  var rand = Math.round(Math.random() * (drinks.length-1));
  return db[drinks[rand]];
}