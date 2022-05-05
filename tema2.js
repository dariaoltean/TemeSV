
let parImpar = (nr) =>{
  if (nr%2==1)
    return nr*2;
  else return nr-2;
  

}
//ex 1
console.log(parImpar(5));


let prim = (nr2) =>{
  
  if (nr2==1|| nr2==0)
      return 0;
  
  for (let i=2; i<nr2; i++)
    { if (nr2%i==0) { 
     
return 0;      
    }
}
  return 1;
}



let nrPrime=(arr) =>{
  let lista=[];
  for (let i=0; i<arr.length; i++){
   
  if (prim(arr[i]) == 1)
   
    lista.push(arr[i]);
  }
  return lista;
}

//ex 2 complet


function gasireStrings(arr){
  let list=[];
  arr.forEach((element)=>{
     if (typeof element==='string')            
     list.push(element);
    
  });
  return list;
}

//ex 3 complet


function adunare(numar){
  let sum=0;
  for(let i=0; i < numar.length; i++){
   
  let nr=Number(numar[i]);  
    
  if(nr % 2 === 1)
    sum=sum+nr;
   
  else continue; 
  }
  return sum;
}
console.log(adunare("12345"));
//ex 4 complet

let animal='fluture';
switch (animal){
  case 'peste':
    console.log('apa');
    break;
  case 'urs':
    console.log('padure');
    break;
  case 'pisica':
  case 'caine' :
    console.log('animal de companie');
    break;
  case 'fluture':
    console.log('insecta');
    break;
  default: 
    console.log('N-ai introdus un animal valid');
}
