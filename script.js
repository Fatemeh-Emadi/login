var btn_submit=document.getElementById("submit");
var main=document.getElementById("main");
var married_btn=document.getElementById("married_btn");
var dark_mode=document.getElementById("dark");
var ptags=document.getElementsByTagName("p");
var spantags=document.getElementsByTagName("span");
var h3_tags=document.getElementsByTagName("h3");
var h5_tags=document.getElementsByTagName("h5");
var name2=document.getElementById("name2");
var inp=document.getElementById("inp");
var child_list=document.getElementById("child_list");
var check_ch=document.getElementById("check_child");

function submit(){
main.style.display="block";
}
function married(){
   name2.style.display="block";
   inp.style.display="block";
   main.style.height="auto" ;
   }
function add_input(){
    var input=document.createElement("INPUT");
    input.type='text';
    input.style.width="300px";
    input.style.height="25px";
    var child=document.createElement("LI");
    child_list.appendChild(child);
    child.appendChild(input);
    main.style.height="auto" ;

}
function darkMode(){
   if(dark_mode.checked){
    for(var i=0;i<spantags.length;i++){
        spantags[i].style.color="white";
     }   
     for(var i=0;i<ptags.length;i++){
        ptags[i].style.color="white";
     }  
     for(var i=0;i<spantags.length;i++){
        spantags[i].style.color="white";
     } 
     for(var i=0;i<h3_tags.length;i++){
        h3_tags[i].style.color="white";
     }      
     for(var i=0;i<h5_tags.length;i++){
        h5_tags[i].style.color="white";
     }   
     main.style.background="black";
   }
   else if(!dark_mode.checked){
      for(var i=0;i<spantags.length;i++){
         spantags[i].style.color="black";
      }   
      for(var i=0;i<ptags.length;i++){
         ptags[i].style.color="black";
      }  
      for(var i=0;i<spantags.length;i++){
         spantags[i].style.color="black";
      } 
      for(var i=0;i<h3_tags.length;i++){
         h3_tags[i].style.color="black";
      }      
      for(var i=0;i<h5_tags.length;i++){
         h5_tags[i].style.color="black";
      }   
      main.style.background="white";
    }
   }
function check(){
   if(check_ch.checked){
      plus.style.display="inline-block";
      mines.style.display="inline-block";
   }
}
function delete_child(){
      child_list.removeChild(child_list.childNodes[0]);
  
}