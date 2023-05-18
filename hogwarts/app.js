
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
 
//   Query for your div with the id of container and set it to a variable named $container
// console.log $container
// Create an <h1> element and set it to a variable called $h1 and console log it
// Add some text inside the h1 element. Example text: 'Hogwarts'
// Why isn't your $h1 it appearing on your page?


const $container = $("#container");
console.log($container);
  
const $h1 = $("<h1>");
console.log($h1);
$h1.text("Hogwarts")
$container.append($h1);

const $h2 = $("<h2>");
console.log($h2);
$h2.text("Je Min Yun");
$container.append($h2);

const $h3 = $("<h3>");
console.log($h3);
$h3.text("Gryffindor");
$container.append($h3);

const $h4 = $("<h4>");
console.log($h4);
$h4.addClass("owl").text("Hoot");
$container.append($h4);

const $h41 = $("<h4>");
console.log($h41);
$h41.text("A wand made of holly with a phoenix feather core");
$container.append($h41);

const $ul = $("<ul>");
console.log($ul);
$ul.attr("storage", "trunk");
$container.append($ul);

const $li = $("<li>");
console.log($li);
$li.text("Butter beer");
$ul.append($li);

const $li1 = $("<li>");
console.log($li1);
$li1.addClass("secret").text("invisibility cloak");
$ul.append($li1);

const $li2 = $("<li>");
console.log($li2);
$li2.addClass("secret").text("magic map");
$ul.append($li2);

const $li3 = $("<li>");
console.log($li3);
$li3.addClass("secret").text("time turner");
$ul.append($li3);

const $li4 = $("<li>");
console.log($li4);
$li4.addClass("owl").text("leash");
$ul.append($li4);

const $li5 = $("<li>");
console.log($li5);
$li5.text("Bertie Bott's Every Flavor [Jelly] Beans");
$ul.append($li5);

const $h5 = document.querySelector("h5");
$container.append($h5);

const $table = document.querySelector("table");
$container.append($table);

