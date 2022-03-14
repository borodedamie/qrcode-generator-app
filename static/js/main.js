const responseHTML = document.querySelector('#qrcode')

var oReq = new XMLHttpRequest();

onClick = () => {

    oReq.addEventListener("load", requestListener);
    oReq.open("GET", "/display-code");
    oReq.send();
}

requestListener = (e) => {
    e.preventDefault()
    
    console.log( oReq.responseText )
}