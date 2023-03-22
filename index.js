function onload(){
    img1.setAttribute("src","dice6.png");
    img2.setAttribute("src","dice6.png");
    document.querySelector(".head2").innerHTML="Try your Luck!";
}

function startroll(){


    var randomnumber1=Math.random();
    randomnumber1=Math.floor(randomnumber1*6)+1;
     
    var randomimage1 ="dice"+randomnumber1+".png";
     
    var img1=document.querySelectorAll("img")[0];

    img1.setAttribute("src",randomimage1);
    
    
    

    
    
var randomnumber2=Math.random();
randomnumber2=Math.floor(randomnumber2*6)+1;
    

    var randomimage2 ="dice"+randomnumber2+".png";
    
    
    var img2=document.querySelectorAll("img")[1];
    
    
    
    img2.setAttribute("src",randomimage2);

    if(randomnumber1 > randomnumber2)
    {
        document.querySelector(".head2").innerHTML="Player 1 wins!";
    }
    else if(randomnumber2 > randomnumber1)
    {
        document.querySelector(".head2").innerHTML="Player 2 wins!";
    }
    
    else
    {
        document.querySelector(".head2").innerHTML="Draw!";
    }

}



    



   
    
    







    
    
    


    







