var drinks = Object.keys(db);

$(function(){
  $('.next').on('click', function(){
    var drink = getDrink();

    // Change flag text to name of drink
    $('#drinkText').text(drink[0]);

    // Change contents of table to match ingredients
    $('.ingredients').children().remove()
    $('.ingredients').append('<th>Ingredients<th>');
    $.each(drink[1], function(ingredient){
      var row = '<tr><td>'+ ingredient +'</td><td>'+ drink[1][ingredient]+'</td></tr>';
      $('.ingredients').append(row);
    })
  })
})

function getDrink(){
  var rand = Math.round(Math.random() * (drinks.length-1));
  return db[drinks[rand]];
}