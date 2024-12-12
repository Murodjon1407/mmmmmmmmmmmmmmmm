
const ism = "MUROD"
// console.log(ism.indexOf("0"));
// console.log(ism.length);
// console.log(ism.toLocaleUpperCase());
// console.log(ism.toLocaleLowerCase());
// console.log(ism.repeat(5));

// console.log(ism.slice(2));


const murodBot = prompt("Enten your name")
const answer = confirm("Ismingizni katta harf qilmoqchimisiz")

if(murodBot == ""){
    alert("iltimos ismingizni kriting");
}
else if(murodBot.toLocaleLowerCase().includes("d")){
    console.log("Tvar man sani topdim");
    
}else{
    console.log(murodBot);
    
}








