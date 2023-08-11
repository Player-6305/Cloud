let items = document.querySelectorAll('.counterItem')
items.forEach(item => {
    let endValue = item.getAttribute('data-num')
    let increment = 8
    function changeNumber(){
        let value = +item.innerHTML
        if(value < endValue){
            value += increment
            item.innerHTML = value
            setTimeout(changeNumber, 20)
        }else{
            item.innerHTML = endValue
        }
    }
    changeNumber()
})