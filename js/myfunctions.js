function addData(){
    let fn=document.getElementById("fn").value ;
    let ln=document.getElementById("ln").value ;
    document.getElementById("result").innerHTML="Etunimi = "+fn+ " Sukunimi = "+ln;
}

function showResult(){
    document.getElementById("btnShow").hidden=true;
    document.getElementById("btnHide").hidden=false;
}

function hideResult(){
    document.getElementById("btnShow").hidden=false;
    document.getElementById("btnHide").hidden=true;
}