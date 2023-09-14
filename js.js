var  d=document.querySelector('.kv');
var s= document.querySelector('.desk');
var f =false;

//s.style.cssText="background:red;";
for(var c=1; c<9; c++){
    var b=document.createElement('div');
    b.className='a'+c;
    if( c%2!==0){
        b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
    }else{b.style.cssText=("width: 80px; height: 80px;  background-color: black; float:left; ");
};
s.appendChild(b);
}; 

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='b'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px;  background-color: black; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
};
s.appendChild(b);
};

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='c'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px;  background-color: black; float:left; ");
};
s.appendChild(b);
};

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='d'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px; background-color: black; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
};
s.appendChild(b);  
};
                
for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='e'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px;  background-color: black; float:left; ");
};
s.appendChild(b);
};

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='f'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px;  background-color:black; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px;  background-color: white; float:left; ");
};
s.appendChild(b);
};

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='g'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px; background-color: white; float:left; ");
}else{b.style.cssText=("width: 80px; height: 80px; background-color: black; float:left;");
};
s.appendChild(b);
};

for(var c=1; c<9; c++){
var b=document.createElement('div');
b.className='h'+c;
if( c%2!==0){
b.style.cssText=("width: 80px; height: 80px; background-color: black; float:left;");
}else{b.style.cssText=("width: 80px; height: 80px; background-color: white; float:left;");
};
s.appendChild(b);
}; 
var k= document.querySelectorAll('div');
var img=document.createElement('img');
for(let i=1;  i<k.length; i++){

k[i].addEventListener("click", sd);
var count=0;
function sd() {
    count++;
    if(count<=1){
    img.src='/svg.png';
    k[i].appendChild(img);
   img.src='svg.png';
   img.style.cssText=(" width: 100%; height: 100%; object-fit: contain;");

};
fd();
    
   
    
    
};
k[i].addEventListener("click", fd);
function fd(element) { 
 


};


};