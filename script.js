// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
var cnt = 0;
var result = ["","",""];
var score = {
    'blep'  : 0,
	'burger'    : 0,
	'cart'  : 0,
	'dopey' : 0,
	'happy' : 0,
	'nerd'  : 0,
	'shy'   : 0,
	'sleeping'  : 0,
	'sleepy'    : 0,
};

function OnChoose(event){
    const div = document.querySelectorAll("section.choice-grid > div");
    const Div = event.currentTarget;

    for (let i = 0; i < div.length; i++) {
        if (Div.dataset.questionId == div[i].dataset.questionId) {
            div[i].style.opacity = 0.6;
            div[i].style.backgroundColor = '#f4f4f4';
            div[i].innerHTML = div[i].innerHTML.substring(0, div[i].innerHTML.indexOf("checkbox")) + 'checkbox" src="images/unchecked.png"/>';
        }
    }
    Div.style.backgroundColor = '#cfe3ff';
    Div.style.opacity = 1;
    Div.innerHTML = Div.innerHTML.substring(0, Div.innerHTML.indexOf("checkbox")) + 'checkbox" src="images/checked.png"/>';
    if (Div.dataset.questionId == 'one') {
        result[0] = Div.dataset.choiceId;
    }
    else if (Div.dataset.questionId == 'two') {
        result[1] = Div.dataset.choiceId;
    }
    else if (Div.dataset.questionId == 'three') {
        result[2] = Div.dataset.choiceId;
    }
    cnt = 3;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == "") {
            cnt--;
        }
    }
    if (cnt == 3){
        const div = document.querySelectorAll("section.choice-grid > div");
        for(let i=0; i<div.length; i++){
            div[i].removeEventListener('click',OnChoose);
        }
        /*for (let i=0; i<cnt; i++){
            console.log(result[i]);
        }*/
        var chosen = ["","",""];
		var highscore = 0;
        var thing;		
        const show = document.querySelector("#show_result");
		for (let i = 0; i < result.length ; i ++) {
			score[result[i]] ++;
			chosen[i] = result[i];
		}
		for (let i = 0; i < chosen.length ; i ++) {
			if (highscore < score[chosen[i]]) {
				highscore = score[chosen[i]];
				thing = RESULTS_MAP[chosen[i]];
			}
        }
        if (highscore == 1){
            thing = RESULTS_MAP[chosen[0]];
        }
        show.style.visibility = "visible";
        document.getElementById("title").innerHTML = "You got: " + thing.title;
        document.getElementById("context").innerHTML = thing.contents;
        highscore = 0;
    }
}

function reset(){
    const show = document.querySelector("#show_result");
    show.style.visibility = "hidden";
    document.getElementById("title").innerHTML = "";
    document.getElementById("context").innerHTML = "";
    const div = document.querySelectorAll("section.choice-grid > div");
    for (let i = 0; i < div.length; i++) {
            div[i].addEventListener('click',OnChoose);
            div[i].style.opacity = 1;
            div[i].style.backgroundColor = '#f4f4f4';
            div[i].innerHTML = div[i].innerHTML.substring(0, div[i].innerHTML.indexOf("checkbox")) + 'checkbox" src="images/unchecked.png"/>';
    }
    for (let i = 0; i < result.length ; i ++) {
        score[result[i]] = 0;
        result[i] = "";
    }
    cnt = 0;
    window.scrollTo(0, 0);
}

const div = document.querySelectorAll("section.choice-grid > div");
const button = document.querySelector("button");
for(let i=0; i<div.length; i++){
    div[i].addEventListener('click',OnChoose);
}
button.addEventListener('click', reset);