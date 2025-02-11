const link = ['../cozeyTea', '../mixed_messages','../fotomatic_broken' ];
const projectName = ['Cozey Tea', 'Mixed Messages', 'Broken Website'];


function insertElement(array1, array2){
let i = 0;
let button = document.querySelector('button');
let works = document.createElement('a');
 
works.href = array1[i];
works.innerHTML = array2[i];
document.getElementById('my_Projects').appendChild(works);
button.onclick = function(){ 
works.href = '';
works.innerHTML = '';
i++;
if(i === 3){
    i-=3;
}
works.href = array1[i];
works.innerHTML = array2[i];


    
}
}

insertElement(link, projectName);


