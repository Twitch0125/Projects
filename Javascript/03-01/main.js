function gosearch(myval){
    let re = new RegExp("\\b" + myval + "\\b");
    let content = $('#content').html().toString();
    let myStr = content.search(re);
    console.log(myStr);
    
    if(myStr > -1){
        $('#result').html(`Found it at: ${myStr}`);
    }
    else{
        $('#result').html(`Couldn't find it :(`);
    }
}