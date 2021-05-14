const textfield=document.getElementById("text");
const wordcount=document.getElementById("wordcount");
const clearbtn=document.getElementById("clearbtn");
function countword(){
    let text=textfield.value;
    text=text.trim();  /*trim is used to remove white space from starting and ending positon*/
    const words=text.split(" ");
    if(words[0]==""){
        wordcount.innerText=0; 
    }
    else{
        wordcount.innerText=words.length;
    }
}

clearbtn.onclick=()=>{
    textfield.value="";
    countword();
}