function regist() {
    const reg = {
        user: user.value,
        accno: accno.value,
        password: pass.value
    };

   
    if (localStorage.getItem(reg.accno)) {
        alert("Account already exists");
       
    } else {
        localStorage.setItem(reg.accno, JSON.stringify(reg));
        alert("Registered completely");
        window.location = "./login.html";
    }
}

function loginbank(){
    const online={
      accno:num.value,
      pass:pcode.value,
    }
    if(online.num && online.pcode in localStorage){
        alert("invalid details")
    }
    else{
        alert("adeded completly ")
    }
    window.location="./withdraw.html"
}

const amnt=0;
const withdraw=0;
const totalbalance=0

function depo(){
    acno=dnum.value,
    amount=depnum.value
    if(acno in localStorage){
        acdetail=JSON.parse(localStorage.getItem(acno))
        if(acno==acdetail.acno && amount>0){
            alert("value cannot be emty or negative")
        }
        else{
            acdetail.balance+=amount;
            localStorage.setItem(acno,JSON.stringify(acdetail))
            alert("your amount is successfully deposited")
            document.getElementById("result").innerHTML=`<p style="color: red;">your total amount is ${acdetail.balance}</p>`
        }
    }
}