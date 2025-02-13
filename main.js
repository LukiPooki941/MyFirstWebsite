const link = ['file:///Users/Luke/Desktop/DEVprojects/CozyTea/styles.html', 'file:///Users/Luke/Desktop/DEVprojects/mixed_messages/messages.js','file:///Users/Luke/Desktop/DEVprojects/fotomatic_broken/index.html' ];
const projectName = ['Cozey Tea', 'Mixed Messages', 'Broken Website'];
const ary1 = [false, true, true];
const ary2 = [true, false, true];
const ary3 = [true, true, false];
const ary = [ary1, ary2, ary3];


function insertElement(array1, array2, array3){
let i = 0;
var j = 0; 
let button = document.querySelector('button');
let works = document.createElement('a');
document.getElementById('my_Projects').appendChild(works);


var one = document.getElementsByClassName('one')[0];
var two = document.getElementsByClassName('two')[0];
var three = document.getElementsByClassName('three')[0];
 
works.href = array1[i];
works.innerHTML = array2[i];


one.hidden = array3[j][0];
two.hidden = array3[j][1];
three.hidden = array3[j][2];






button.onclick = function(){ 

    works.href = '';
works.innerHTML = '';

   one.hidden = '';
   two.hidden = '';
   three.hidden = '';

i++;

if(i === 3){
    i-=3;
}

j++;

if( j === 3){
 j-=3;
}


works.href = array1[i];
works.innerHTML = array2[i];

one.hidden = array3[j][0];
two.hidden = array3[j][1];
three.hidden = array3[j][2];



    
}
}

insertElement(link, projectName, ary);







  
   
 

 