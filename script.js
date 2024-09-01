const rc =function(){
  const h='0123456789ABCDEF';
  let c='#';
  for(let i=0;i<6;i++)
  {
    c+=h[Math.floor(Math.random()*16)];
  }
  return c;
};

let idd;
const startchanging=function(){
  if(!idd)
  idd=setInterval(changebg,1000);


function changebg(){
  document.body.style.backgroundColor= rc();
}
};

const stopchanging = function(){
  clearInterval(idd);
  idd=null;
};

document.querySelector('#start').addEventListener('click',startchanging);
document.querySelector('#stop').addEventListener('click',stopchanging);
