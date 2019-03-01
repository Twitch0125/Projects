var messages = [];

function sendMessage(field) {
    console.log(`field is : ${field}`);
    let value = $(`#${field}`).val();
    messages.push(value);
    $(function () {
        let jsonMessages = JSON.stringify(messages);
        localStorage.setItem('messages', jsonMessages)
    });

}

function createMessages() {
    $('.display-messages').html('');
    for (let i = 0; i < messages.length; i++) {
        let value = messages[i];
        $('.display-messages').append('<div>' + $(`${value}`) + '</div>');
    }
}



// $(function () {
//     let messages = JSON.parse(localStorage.getItem('messages'));
//     return messages;
// });

$('button').on('click', createMessages);

document.write('heller werd');