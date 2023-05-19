
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

//////////////////////////////////////////////////////
// Break your wand! (select the element that contains your wand and remove it)
$h41.remove();
//Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
$li.remove();
// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
$h41.insertAfter($h4).text("A New Wand");
// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
$h41.css("color", "crimson");
// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
$li4.removeClass("owl");
$li5.addClass("owl");
// Have your pet come back (remove your pet from the DOM, put it back in its original location)
$li5.removeClass("owl");
$li4.addClass("owl");

///////////////////////////////////////////////////////////year6
// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
$(".secret").hide("slow").delay(2000);

// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
$(".secret").show("slow");

// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
$li4.text("leash").addClass("cabbage");

// add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage
// i did it in main.css

// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
$li4.text("leash").removeClass("cabbage");

////////////////////////////////////////////////year7
// Update your class schedule to read 'Fall 2018'
$("h5").text("Fall 2018");

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
$li.insertBefore($li1);

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
$ul.attr("storage", "chest");

// Add some CSS to your page. Feel free to experiment and make this page your own

