//Starts box1, then intro scene, and then the Picking scene.
function startGame(start) {
var x = document.getElementById("box1");
var x1 = document.getElementById("intro");
var x2 = document.getElementById("chooseAdventure");
x.style.display = "block";
  if(x.style.display == "block") {
    setTimeout(function(){x1.style.display = 'block';}, 1500); 
    setTimeout(function(){typewriter4();}, 2500);
    setTimeout(function(){x1.style.display = 'none';}, 16000);
    setTimeout(function(){x2.style.display = 'block';}, 17000);
    setTimeout(function(){typewriter3();}, 20000);
  }
}

//Picking  1 of 3 scenes and goes into one of them
function utensil(value) {
  var x = document.getElementById("pText");
  var x1 = document.getElementById("chooseAdventure");
  var x2 = document.getElementById("spoon");
  var x3 = document.getElementById("pText");
  if (value == yellow) {
    document.getElementById("pText").innerHTML = "You chose Fork adventure";
    document.getElementById("yellow").style.fontSize = "32px";
    document.getElementById("orange").style.fontSize = "16px";
    document.getElementById("red").style.fontSize = "16px";
  } else if (value == orange) {
    document.getElementById("pText").innerHTML = "You chose Spoon adventure";
    document.getElementById("yellow").style.fontSize = "16px";
    document.getElementById("orange").style.fontSize = "32px";
    document.getElementById("red").style.fontSize = "16px";
    setTimeout(function(){typewriter2();}, 2500);
    setTimeout(function(){x1.style.display = 'none';}, 1500);
    setTimeout(function(){x3.style.display = 'none';}, 1500);
    setTimeout(function(){x2.style.display = 'block';}, 2000);

  } else if (value == red) {
    document.getElementById("pText").innerHTML = "You chose Knife adventure";
    document.getElementById("yellow").style.fontSize = "16px";
    document.getElementById("orange").style.fontSize = "16px";
    document.getElementById("red").style.fontSize = "32px";
  }
}

//Spoon Adventure, Scene picking. Goes into SceneAA1, AA2 or AA3.
function choiceA(choices) {
  var x = document.getElementById("choiceA_");
  var x1 = document.getElementById("spoon");
  var y = document.getElementById("choiceA_1");
  var a1 = document.getElementById("choiceA1");
  var a2 = document.getElementById("choiceA2");
  var a3 = document.getElementById("choiceA3");
  if (choices == choiceA1) {
    setTimeout(function(){y.style.display = 'block';}, 2000);
    setTimeout(function(){typewriter();}, 2500);
    setTimeout(function(){x1.style.display = 'none';}, 1500);
    a1.style.fontSize = "32px";
    a2.style.fontSize = "16px";
    a3.style.fontSize = "16px";
  } else if (choices == choiceA2) {
    a1.style.fontSize = "16px";
    a2.style.fontSize = "32px";
    a3.style.fontSize = "16px";
  } else if (choices = choiceA3) {
    a1.style.fontSize = "16px";
    a2.style.fontSize = "16px";
    a3.style.fontSize = "32px";
  }
}
//Scene AA1
function choiceAAA1(choiceAA) {
var x = document.getElementById("choiceA_1");
var x1 = document.getElementById("choiceAAA");
var x2 = document.getElementById("choiceAAB");
  if(choiceAA == choiceAA1) {
    setTimeout(function(){x.style.display = 'none';}, 1500);
    setTimeout(function(){typewriter5();}, 2500); 
    setTimeout(function(){x1.style.display = 'block';}, 2000);
    setTimeout(function(){x1.style.display = 'none';}, 15000);
    setTimeout(function(){x2.style.display = 'block';}, 15000)
    x1.style.fontSize = "32px";
    x2.style.fontSize = "16px";
  } else if (choiceAA == choiceAA2) {
    x.style.display = "none";
    setTimeout(function(){x.style.display = 'none';}, 1500);
    setTimeout(function(){typewriter6();}, 2500); 
    setTimeout(function(){x2.style.display = 'block';}, 2000);
    x1.style.fontSize = "16px";
    x2.style.fontSize = "32px";
  }
}

var introScene = new Array(
  "> Welcome to CYOA Alpha v1.0.",
  "> Choose Your Own Adventure is a text based game where you make choices based on the majority of votes.",
  ">",
  ">",
  "> Initializing sequence... ",
  ">",
  "> 5...",
  "> 4...",
  "> 3...",
  "> 2...",
  "> 1..."
  );

var pickScene = new Array(
  "> CHOOSE YOUR ADVENTURE",
  ">",
  "> <span id='yellow' onclick='utensil(this)'> Fork </span>",
  "> <span id='orange' onclick='utensil(this)'> Spoon </span>",
  "> <span id='red' onclick='utensil(this)'> Knife </span>",
  ">"
  );

var spoonScene = new Array(
"> Spoon Adventure ",
">",
"> You were sitting at the park as usual by yourself.",
"> In the distance you see someone running towards you. ",
"> Its Jimmy, your best friend. ",
"> Jimmy runs over to you and starts a conversation. ",
"> In the midst of your conversation you and Jimmy hear a scream. ",
"> <!-- play scream button here --> ",
"> What do you do? ",
">",
"> <span id='choiceA1' onclick='choiceA(this)'> Search for the scream </span>",
"> <span id='choiceA2' onclick='choiceA(this)'> Call the Police </span>",
"> <span id='choiceA3' onclick='choiceA(this)'> Continue with your conversation </span> ",
">"
);
var firstScene = new Array(
  ">",
  "> As much as you wanted to continue that mildly interesting conversation. You and Jimmy agreed to search for the noise ", 
  "> Going towards the vicinity of the scream, Jimmy stops and asks if you guys should split up.", 
  "> You hesitated to split but agreed to the conditions because it would cover more ground.",
  "> You're on your own now and its nearly dark. You remember that darkness was not your friend.",
  "> *TIK*    *TIK*    *TIK*",
  "> You hear something...",
  ">",
  "> What do you do?.",
  ">",
  "> <span id='choiceAA1' onclick='choiceAAA1(this)'> Turn Around </span>",
  "> <span id='choiceAA2' onclick='choiceAAA1(this)'> Run Away Fast! </span>",
  );

var sceneAA1 = new Array (
  ">",
  "> You turned around despite feeling afraid.",
  ">",
  ">",
  "> Empty...Nothing there...",
  ">",
  ">",
  "> You were for sure you heard something and the feeling you have doesn't loosen.",
  "> Your insides begin to tense and every little noise makes you flinch.",
  "> As you were trying to gather your thoughts, a hand slowly reaches out from the darkness.",
  "> The hand places itself on your shoulder, you began screaming at the top of your lungs.",
  "> Terrified, you ran away.",
  ">",
  "> Loading Scene AA2..."
  );

var sceneAA2 = new Array (
  ">",
  ">",
  "> THIS SECTION IS STILL IN DEVELOPMENT...",
  ">",
  ">",
  );

var iSpeed = 35; // time delay of print out
var iSpeed2 = 35;
var iSpeed3 = 35;
var iSpeed4 = 35;
var iSpeed5 = 35;
var iSpeed6 = 35;

var iIndex = 0; // start printing array at this posision
var iIndex2 = 0; 
var iIndex3 = 0;
var iIndex4 = 0;
var iIndex5 = 0;
var iIndex6 = 0;

var iArrLength = firstScene[0].length; // the length of the text array
var iArrLength2 = spoonScene[0].length;
var iArrLength3 = pickScene[0].length;
var iArrLength4 = introScene[0].length;
var iArrLength5 = sceneAA1[0].length;
var iArrLength6 = sceneAA2[0].length;

var iScrollAt = 20; // start scrolling up at this many lines
var iScrollAt2 = 20;
var iScrollAt3 = 20;
var iScrollAt4 = 20;
var iScrollAt5 = 20;
var iScrollAt6 = 20;

var iTextPos = 0; // initialise text position
var iTextPos2 = 0;
var iTextPos3 = 0;
var iTextPos4 = 0;
var iTextPos5 = 0;
var iTextPos6 = 0;

var sContents = ''; // initialise contents variable
var sContents2 = '';
var sContents3 = '';
var sContents4 = '';
var sContents5 = '';
var sContents6 = '';

var iRow; // initialise current row
var iRow2;
var iRow3;
var iRow4;
var iRow5;
var iRow6;

function typewriter()
{
  //SETS THE CONTENT TO BLANK
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("choiceA_1");
 //BEGINS TO ITERATE EACH LETTER
 while ( iRow < iIndex ) {
  sContents += firstScene[iRow++] + '<br />';
 }
 //WHILE ITERATION GOING ON, PRINT EACH LETTER FROM THE BEGINNING TO THE END
 destination.innerHTML = sContents + firstScene[iIndex].substring(0, iTextPos) + "<br />" + "|"  ;
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  //BRINGS IT BACK TO THE WHILE LOOP
  if ( iIndex != firstScene.length ) {
   iArrLength = firstScene[iIndex].length;
   setTimeout("typewriter()", 0);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


function typewriter2()
{
 sContents2 =  ' ';
 iRow2 = Math.max(0, iIndex2-iScrollAt2);
 var destination = document.getElementById("spoon");
 
 while ( iRow2 < iIndex2 ) {
  sContents2 += spoonScene[iRow2++] + '<br />';
 }
 destination.innerHTML = sContents2 + spoonScene[iIndex2].substring(0, iTextPos2) + "<br />" + "|"  ;
 if ( iTextPos2++ == iArrLength2 ) {
  iTextPos2 = 0;
  iIndex2++;
  if ( iIndex2 != spoonScene.length ) {
   iArrLength2 = spoonScene[iIndex2].length;
   setTimeout("typewriter2()", 0);
  }
 } else {
  setTimeout("typewriter2()", iSpeed2);
 }
}

function typewriter3()
{
 sContents3 =  ' ';
 iRow3 = Math.max(0, iIndex3-iScrollAt3);
 var destination = document.getElementById("chooseAdventure");
 
 while ( iRow3 < iIndex3 ) {
  sContents3 += pickScene[iRow3++] + '<br />';
 }
 destination.innerHTML = sContents3 + pickScene[iIndex3].substring(0, iTextPos3) + "<br />" + "|"  ;
 if ( iTextPos3++ == iArrLength3 ) {
  iTextPos3 = 0;
  iIndex3++;
  if ( iIndex3 != pickScene.length ) {
   iArrLength3 = pickScene[iIndex3].length;
   setTimeout("typewriter3()", 0);
  }
 } else {
  setTimeout("typewriter3()", iSpeed3);
 }
}

function typewriter4()
{
 sContents4 =  ' ';
 iRow4 = Math.max(0, iIndex4-iScrollAt4);
 var destination = document.getElementById("intro");
 
 while ( iRow4 < iIndex4 ) {
  sContents4 += introScene[iRow4++] + '<br />';
 }
 destination.innerHTML = sContents4 + introScene[iIndex4].substring(0, iTextPos4) + "<br />" + "|"  ;
 if ( iTextPos4++ == iArrLength4 ) {
  iTextPos4 = 0;
  iIndex4++;
  if ( iIndex4 != introScene.length ) {
   iArrLength4 = introScene[iIndex4].length;
   setTimeout("typewriter4()", 50);
  }
 } else {
  setTimeout("typewriter4()", iSpeed4);
 }
}

function typewriter5()
{
 sContents5 =  ' ';
 iRow5 = Math.max(0, iIndex5-iScrollAt5);
 var destination = document.getElementById("choiceAAA");
 
 while ( iRow5 < iIndex5 ) {
  sContents5 += sceneAA1[iRow5++] + '<br />';
 }
 destination.innerHTML = sContents5 + sceneAA1[iIndex5].substring(0, iTextPos5) + "<br />" + "|"  ;
 if ( iTextPos5++ == iArrLength5 ) {
  iTextPos5 = 0;
  iIndex5++;
  if ( iIndex5 != sceneAA1.length ) {
   iArrLength5 = sceneAA1[iIndex5].length;
   setTimeout("typewriter5()", 50);
  }
 } else {
  setTimeout("typewriter5()", iSpeed5);
 }
}

function typewriter6()
{
 sContents6 =  ' ';
 iRow6 = Math.max(0, iIndex6-iScrollAt6);
 var destination = document.getElementById("choiceAAB");
 
 while ( iRow6 < iIndex6 ) {
  sContents6 += sceneAA2[iRow6++] + '<br />';
 }
 destination.innerHTML = sContents6 + sceneAA2[iIndex6].substring(0, iTextPos6) + "<br />" + "|"  ;
 if ( iTextPos6++ == iArrLength6 ) {
  iTextPos6 = 0;
  iIndex6++;
  if ( iIndex6 != sceneAA2.length ) {
   iArrLength6 = sceneAA2[iIndex6].length;
   setTimeout("typewriter6()", 50);
  }
 } else {
  setTimeout("typewriter6()", iSpeed6);
 }
}