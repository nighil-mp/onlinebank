function regist(){
    const reg={
        user:user.value,
        accno:accno.value,
        password:pass.value
    }
    if(reg.accno in localStorage){
        alert("all readt exist")
        window.location="./login.html"
    }
    else{
        localStorage.setItem(reg.accno,JSON.stringify(reg))
        alert("registered completely")
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