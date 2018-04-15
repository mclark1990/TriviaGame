$(document).ready(function(){

    let count = 20;
    let officeQuestion = [{
    
    question: "What is Dwight's middle name?",
    choices:["Kurt", "Danger", "Gary", "Ralf"],
    correct: 0,
    
},

{
    question: "What college did Andy Bernard attend?",
    choices: ["Dartmouth", "Cornell", "Harvard", "Brown"],
    correct: 1,
},

{
    question: "What is Dwight's favorite TV show?",
    choices: ["The Apprentice", "Star Trek", "Survivor", "Battlestar Galactica"],
    correct: 3,
},

{
    question: "Where does Jim propose to Pam?",
    choices:["Gas Station", "Breakroom", "Parking Lot", "Toby's Going Away Party"],
    correct: 0,
},

{
    question: "What is Andy's nickname for Jim?",
    choices: ["Fat Halpert", "Jim-bag", "Big Tuna", "Jimbo"],
    correct: 2,
},

{
    question: "What is the name of Angela's cat that Dwight mercy kills?",
    choices: ["Princess Lady", "Sprinkles", "Lumpy", "Bandit"],
    correct: 1,
}

];

$("#start").click(function(){
$("#start").hide();
setTimeout(timer, 0);
let count = setInterval(timer, 1000);
displayTrivia();
})

 function timer(){
     count--;
     if (count === 0){
         clearInterval(count);
         return;
     }
     $("#timer").html("Time Remaining: " + count + " seconds");
 }

function displayTrivia(){
    $("#question").html(officeQuestion[0].question);
    question++;
    let choicesArr = officeQuestion[0].choices;
    let buttonsArr =[]

    for( i = 0; i < choicesArr.length; i++){
        let button = $("<button class = btn-lg>");
        button.text(choicesArr[i]);
        button.attr("data-id", i);
        $("#choices").append(button)
    }
}
});
