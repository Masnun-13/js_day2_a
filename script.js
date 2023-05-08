var input1 = document.getElementById('input1')

var input2 = document.getElementById('input2')

var output = document.getElementById("output")
 
function add(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x+y)
    output.value=z
}

function sub(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x-y)
    output.value=z
}

function mul(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x*y)
    output.value=z
}

function div(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x/y)
    output.value=z
}

function mod(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x%y)
    output.value=z
}

function pow(){
    let x = Number(input1.value)
    let y = Number(input2.value)
    let z = Number(x**y)
    output.value=z
}
