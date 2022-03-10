var oReq = new XMLHttpRequest();

onClick = () => {

    oReq.addEventListener("load", requestListener);
    oReq.open("GET", "/static/upload/qr_code.png");
    oReq.responseType = "blob";
    oReq.send();
}

requestListener = () => {
    var blob = oReq.response;
    const url = URL.createObjectURL(blob)

    console.log(blob)
    
}