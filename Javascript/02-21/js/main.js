let myRows = document.getElementsByClassName('row');

for (var i = 0; i < myRows.length; i++) {
    myRows[i].style.fontSize = "24px";
}

$(function () {
    console.log('Hooray');
    // $(".row").css('font-size', '24px');
});




$(function () {
    console.log('yikers');
    // $("#myId").hide();
    let words = $("#myId").html();
    console.log(words);
});

function addItem() {
    let myval = $(".myinput").val();
    if(myval != ''){
        $(".list").append("<div class='row'>" +
        "<i onclick='deleteItem(this)' class='fas fa-trash'></i>" +
        "<span class='item' onclick='editItem(this)'>" + myval + "</span>" +
        "</div>");
    $('.myinput').val('');
    $('.myinput').focus();
    }
}

function editItem(element){
    $(element).attr('contenteditable','true');
    $(element).focus();
    $(element).addClass('animate');
}

function checkKey(event) {
    switch (event.which) {
        case 13:
            addItem();
            break
    }
}

function deleteItem(element) {
    $(element).parent().remove();
}