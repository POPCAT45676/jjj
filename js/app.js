let imgbox = document.getElementById("imgbox")
let qrText = document.getElementById("qrText")
let qrImage = document.getElementById("qrImage")

function genQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%D0%B4%D0%B5%D0%BD%D1%8C%D0%B3%D0%B8" + qrText.value
}