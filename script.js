// function for get time lap of click event
move()
var start=new Date().getTime()
document.getElementById('shape').onclick=function(){
    document.getElementById('shape').style.display='none'
    var end=new Date().getTime()
    var userTime=(end-start)/1000
    alert(userTime +' seconds')
    move()
    
}
// this is the function for reshape and relocate the box within webpage
function move(){
    var left;
    var top;
    var wh;
    left= Math.random()*300;
    top= Math.random()*300;
    wh=((Math.random()*400)+100);
    document.getElementById('shape').style.left=left +'px';
    document.getElementById('shape').style.top=top+'px';
    document.getElementById('shape').style.width=wh+'px';
    document.getElementById('shape').style.height=wh+'px';
    document.getElementById('shape').style.display='block';
    document.getElementById('shape').style.backgroundColor=getRandomColor();
    start=new Date().getTime()


}
// function for get random color for everytime user click the box
   function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

