let bod=document.getElementById('body')
let text=document.getElementById('text')
let btn=document.getElementById('clike')
let list=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',function(){
    let hexcolor='#'
    for(i=0;i<6;i++){
        hexcolor+=list[rendomNO()];
    }
    text.innerText=hexcolor
    bod.style.backgroundColor=hexcolor

})

function rendomNO(){
    return Math.floor(Math.random()*list.length)
}