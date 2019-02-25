var lastName = `ercanbrack`;
var name = `kaleb`;

function printName() {
    let kaleb = 'not kaleb';
    let ercanbrack = 'not ercanbrack';
    $('body').append(`<div> ${name}, ${lastName}</div>
    <div> ${kaleb}, ${ercanbrack}</div>
    `)
}



function displayNumber() {
    let mynum = addNumber(2);
    let myHtml = `
<div class="mdl-card mdl-shadow--4d animation">
    <div class="mdl-card__title">
        <h1 class='mdl-card__title-text'> ${mynum}</h1>
    </div>
</div>
    `;
    console.log(mynum);
    $('.myCard').append(myHtml);
	$('.animation').animate({
		color: rgb(255, 17, 17)
	}, 750);
}

function addNumber(val) {
    let randum = Math.floor(Math.random() * 9);
    return val + randum;
}

$(function () {
    displayNumber();
    printName();
});