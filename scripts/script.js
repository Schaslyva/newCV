let coll = document.getElementsByClassName("collapsible");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.getElementById('sign_in').onclick = function () {
  document.getElementById('register__form').style.display = 'flex';
};

document.getElementById('baner__button').onclick = function () {
  document.getElementById('register__form').style.display = 'flex';
};

document.getElementById('cancel__button').onclick = function () {
  document.getElementById('register__form').style.display = 'none';
};


document.getElementById('send').onclick = () => {
  let name = document.querySelector('#userName').value;
  let email = document.querySelector('#userEmail').value;
  let password = document.querySelector('#password').value;
  let confPassword = document.querySelector('#confirm_password').value == password;
  

  let elementBuyCryptocurrency = document.querySelector('#buyCryptocurrency');
  let elementSellCryptocurrency = document.querySelector('#sellCryptocurrency');
  let elementChangeCryptocurrency = document.querySelector('#changeCryptocurrency');

  
  let buyCryptocurrency = elementBuyCryptocurrency.checked ? true : false;
  let sellCryptocurrency = elementSellCryptocurrency.checked ? true : false;
  let changeCryptocurrency = elementChangeCryptocurrency.checked ? true : false;


  let isAge = false
  let arrOfAge = document.getElementsByClassName('age__radio')
  for(let i=0; i<arrOfAge.length; i++){
    
    if(arrOfAge[i].checked){
      isAge = arrOfAge[i].value
    }
  }

  const user = {
    name : name,
    email : email,
    password : password,
    buyCryptocurrency : buyCryptocurrency,
    sellCryptocurrency : sellCryptocurrency,
    changeCryptocurrency : changeCryptocurrency,
    isAge : isAge,
  }

  if (isAge == '>18' && password == confPassword){
    fetch('localhost', {
      method: 'post',
      headers: 'Authorization',
      body: user
    })

  } else if (password != confPassword){
    document.querySelector('#confirm_password').style.border = '2px solid red'
  }

};






