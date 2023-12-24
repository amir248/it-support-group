console.log('oK');
document.querySelector('input[type="checkbox"]').checked=true;
if(innerWidth>=700){
  console.log('innerWidth>700');
  window.addEventListener('scroll',()=>{
    if(innerWidth>700){
      console.log(innerWidth);

    }else{
      console.log(innerWidth+"_else");

    }
  });
}else{
  console.log('else -few two');
  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > nav:nth-child(1) > ul:nth-child(2)').remove();

  let div=document.createElement('div');
  document.querySelector('nav').prepend(div);

  let spanMenu=document.createElement('span');
  document.querySelector('nav > div').prepend(spanMenu);
}
