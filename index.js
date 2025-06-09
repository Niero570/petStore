var shop = [
    {
       title: 'Tigers',
       image: '.images/proTiger.jpeg',
       image: '.images/disTiger.jpeg',


       price: '$7,500-15,000',
       description: 'Majestic big cat with a powerful aura.'
    },
    {
       title: 'Birds',
       image: '.images/proEagle.jpeg',
       image: '.images/disEagle.jpeg',


       price: '$2,500-5,000',
       description: 'Graceful creatures of the sky.'
    },
    {
       title: 'Polar Bears',
       image: '.images/proPolar.jpeg',
       image: '.images/disPolar.jpeg',
      
       price: '$10,000-20,000',
       description: 'Fierce yet majestic Arctic predators.'
    }
 ];


var postHTML = "";


for (var i = 0; i < shop.length; i++) {
   var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5></span>';
   var image = '<img src="' + shop[i].image + '" alt="' + shop[i].title + '"/>';
   var price = '<p><strong>Price:</strong> ' + shop[i].price + '</p>';
   var description = '<div class="desc"><p>' + shop[i].description + '</p><button type="button" class="btn btn-warning">Add to Cart</button></div></div>';
 
   var concatThis = heading + image + price + description;
   postHTML += concatThis;
 }
 
 document.getElementById('market').innerHTML = postHTML;
 















for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product"><span><h5>' + shop[i].title + '</h5>';
    var image = '<img src="' + shop[i].image + '"/>';
    var price = '<p>' + shop[i].price + '</p></span>';
    var description = '<div><p>' + shop[i].description + '</p><button type="button" class="btn btn-warning">Add to Cart</button></div></div>';

    postHTML += heading + image + price + description;
}

document.getElementById('market').innerHTML = postHTML;