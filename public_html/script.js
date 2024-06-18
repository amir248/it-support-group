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
  spanMenu.style.marginBottom=`7px`;
  document.querySelector('nav > div').append(spanMenu);
  let spanMenuTwo=document.createElement('span');
  spanMenuTwo.style.marginBottom=`7px`;
  document.querySelector('nav > div').append(spanMenuTwo);
  let spanMenuThree=document.createElement('span');
  spanMenuThree.style.marginBottom=`7px`;
  document.querySelector('nav > div').append(spanMenuThree);
}
