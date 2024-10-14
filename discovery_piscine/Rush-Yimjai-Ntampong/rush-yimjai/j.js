var i = 0;
window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset)>=document.body.offsetHeight && i == 0){
        alert("You are at the end of the page! click at choose here and see the surprise and my contact!!");
        i=i+1;
    }else{
        console.log("1")
    }
}
function getValue(){
    var value = document.getElementById("6").value;
    console.log(value);
    if(document.getElementById("6").value == 0){
        document.getElementById('wrap').style.display="block"
        document.getElementById('amo').style.display="none"
    }
    if(document.getElementById("6").value == 1){
        document.getElementById('wrap').style.display="none"
        document.getElementById('amo').style.display="block"
        
    }
    if(document.getElementById("6").value == 2){
        document.getElementById('wrap').style.display="none"
        document.getElementById('amo').style.display="none"
    }
}
function copytoclip(){
    var gmail = 'undefu5624@gmail.com'
    navigator.clipboard.writeText(gmail)
    document.getElementById("cop").title="Copied"
}