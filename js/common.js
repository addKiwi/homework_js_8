document.getElementById('price').addEventListener("focus", focusfun)
document.getElementById('price').addEventListener("blur", unfocusfun)

function focusfun(){
    this.classList.remove('redborder')
    document.getElementById('price').classList.add('grnborder')
    let div = document.getElementById('exep')
    if (div) {div.remove()}
    this.classList.remove('redtext')
    this.classList.remove('grntext')
}

function unfocusfun() {
    let value = document.getElementById('price').value
    let spann = document.getElementById('spanprice')
    if (spann) {spann.remove()}

    this.classList.remove('grnborder')
    if (!value || isNaN(value)|| value < 0){
        this.classList.add('redborder')
        let div = document.createElement('div')
        div.className = 'exep'
        div.id = 'exep'
        div.innerHTML = "Please enter correct price!"
        document.body.append(div)
        document.getElementById('price').classList.add('redtext')
    }
    else if(value !=0){
        let span = document.createElement('span')
        span.id = 'spanprice'
        span.innerHTML ="Текущая цена: " + value + " UAH <button id=\"btnprice\">X</button>"
        document.getElementById('price').classList.add('grntext')
        document.body.prepend(span)
        document.getElementById('btnprice').classList.add('button:hover')
        document.getElementById('btnprice').addEventListener('click', function () {
            span.remove()
            price.value="";
        })
    }
}
