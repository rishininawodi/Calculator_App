const dis = document.getElementById("dis");
function appendToDisplay(input){
    dis.value +=input;

}
function calculating(input){
    try{
        dis.value=eval(dis.value); 
    }
    catch(error){
        dis.value="Error";

    }
      
}
function clearing(input){
    dis.value ="";
    
}