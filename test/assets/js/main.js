let mdata = {}
let currentquestion = []
let category = []
let scat = ""
$.getJSON("test.json",function(data){
    mdata = data
})

/*
var id = setInterval(function(){
    if(Object.keys(mdata).length > 0){
        clearInterval(id)
        selectcat()
    }
},100)*/

function start(){
    console.log("anen")
    loadquestion()
}
$(document).ready(function(){
    console.log('test')
    selectcat()
    for(i = 0; i < Object.keys(mdata).length; i++){
        category.push(Object.keys(mdata)[i])
        $('[data-toggle="cats"]').append('<button class="btn btn-primary" type="button" style="width:100%;margin-bottom:2vh" data-toggle="scat">'+Object.keys(mdata)[i]+'</button>')
    }
})
$(document).on('click','[data-toggle="scat"]',function(){
    scat = $(this).text()
    $('[data-type="heading"]').text(scat)
    $('[data-toggle="questions"]').css('display','block')
    $('[data-toggle="cats"]').css('display','none')
    loadquestion()
})
function selectcat(){
    $('[data-toggle="questions"]').css('display','none')
    $('[data-toggle="cats"]').css('display','block')
}
function loadquestion(){
    console.log(scat)
    currentquestion = []
    rand = Math.floor(Math.random() * Object.keys(mdata[scat]).length) + 1;
    currentquestion.push(Object.keys(mdata[scat])[rand])
    currentquestion.push(mdata[scat][Object.keys(mdata[scat])[rand]])
    $('[data-toggle="button"]').attr('state',"answer")
    $('[data-toggle="button"]').text('Cevap')
    $('[data-type="output"]').text(currentquestion[0])
}

$('[data-toggle="button"]').on('click',function(){
    if($('[data-toggle="button"]').attr('state') == "answer"){
        $('[data-toggle="button"]').attr('state',"next")
        $('[data-toggle="button"]').text('Sonraki')
        $('[data-type="output"]').text(currentquestion[1])
    }else{
        $('[data-toggle="button"]').attr('state',"answer")
        $('[data-toggle="button"]').text('Cevap')
        loadquestion()
    }
})
$('[data-toggle="back"]').on('click',function(){
    $('[data-type="heading"]').text('Anlık Soru')
    scat = ""
    $('[data-toggle="questions"]').css('display','none')
    $('[data-toggle="cats"]').css('display','block')
})