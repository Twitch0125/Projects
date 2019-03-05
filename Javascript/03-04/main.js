let strArray = ['apple','orange','coke'];
$('#container').html(`<div id='container'> ${strArray}</div>`);

function capFirstLetterAsync(anArray, callbackFunction){
    setTimeout(()=>{
        const newArray = anArray.map(item => item.substring(0,1).toUpperCase() + item.substring(1));
        callbackFunction(newArray);
    }, Math.random() * 2000 + 1000)
}

setTimeout(()=>{
    document.getElementById('container').style = 'color: red';
    setTimeout(()=>{
        document.getElementById('container').style = 'color: red; font-family: ubuntu';
    }, Math.random() * 2000 + 1000);
}, Math.random() * 2000 + 1000);
capFirstLetterAsync(strArray, handleModifiedArray);

function handleModifiedArray(modifiedArrayStr){
    document.getElementById('container').innerText = modifiedArrayStr;
}