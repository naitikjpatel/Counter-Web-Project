// countValue element che  ->countValue.innerText e value ape che te const nathi etle
const countValue=document.querySelector("#counter");

const increment=()=>{
    //get the value from ui
    let value=parseInt(countValue.innerText); //string to int ma conver
    //update the value
    value=value+1;
    //set the value onto ui
    countValue.innerText=value;
};
const decrement=()=>{
    //get the value from ui
    let value=parseInt(countValue.innerText); //string to int ma conver
    //update the value
    value=value-1;
    //set the value onto ui
    countValue.innerText=value;
};