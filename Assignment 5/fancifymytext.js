function bigger (){
    document.getElementById("textbox").style.fontSize = "24px";
}

function fancy(){
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue";
    document.getElementById("textbox").style.textDecoration = "underline";
}

function boring(){
    document.getElementById("textbox").style.fontWeight = "normal";
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.textDecoration = "none";
}

function moo(){
    const textarea = document.getElementById("textbox");
    var value = textarea.value;
    value = value.toUpperCase();
    var parts = value.split(".");
    value = parts.join("-Moo");
    textarea.value = value;

}