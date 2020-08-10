let mdata = {}
let currentquestion = []
$.getJSON("test.json",function(data){
    mdata = data
})

var id = setInterval(function(){
    if(Object.keys(mdata).length > 0){
        clearInterval(id)
        start()
    }
},100)

function start(){
    loadquestion()

}

function loadquestion(){
    currentquestion = []
    rand = Math.floor(Math.random() * Object.keys(mdata).length) + 1;
    currentquestion.push(Object.keys(mdata)[rand])
    currentquestion.push(mdata[Object.keys(mdata)[rand]])
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