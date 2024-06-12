var p=document.getElementsByClassName("fas fa-heart");
  for (let i=0;i<p.length;i++)
  { 
    let jaime= p[i];

    jaime.addEventListener("click", 
    function()
    {
      if(jaime.style.color=="red")
       {
       jaime.style.color="black";
       }
      else
      {
       jaime.style.color="red";
      }
    });
  
  }
  var plus=document.getElementsByClassName("plus-btn");
  
  var tab=document.getElementsByClassName("quantity");
  
  for(let i=0;i<plus.length;i++)
{
     plus[i].addEventListener('click', function()
        {
            let inc = parseInt(tab[i].textContent); 
        let p = inc + 1;
        tab[i].textContent= p;
        sommestotal();
        });}

 var moins=document.getElementsByClassName("minus-btn");
  
        for(let i=0;i<moins.length;i++)
            {
                moins[i].addEventListener('click', function()
                {
                    let inc = parseInt(tab[i].textContent); 
                if(inc>0){
                    let k = (inc - 1);
                    tab[i].textContent = k;
                    sommestotal();
                }
                else
                {
                    alert("La quantité est déjà à zéro.");
                }
                   

                
                })}

                var card=document.getElementsByClassName('cardd');
            
                var sup=document.getElementsByClassName('fas fa-trash-alt');
              
    for(let i=0 ;i<sup.length;i++)
        {
            sup[i].addEventListener('click',function()
            {
                card[i].remove();
                sommestotal();
            }
        );
        }

        
        

        function sommestotal()
         {
            var somme = 0;
            var price = document.getElementsByClassName("unit-price"); 
            
            var totale = document.getElementsByClassName("total"); 
            console.log(totale);
        
            for (let i = 0; i < tab.length; i++)
                 {
                   

                somme += parseInt(price[i].textContent )*parseInt(tab[i].textContent);
                console.log(somme);
                
            }
        
            return totale[0].textContent =somme;
        }
 