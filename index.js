// document.getElementById("button").addEventListener((click)=>{
//     alert("hello")
// })  
//      const toggle1 = () => {
//     document.getElementById("img1").src = "https://tse2.mm.bing.net/th?id=OIP.aN8e4aMLnf0iDQfVAuivXgHaEK&pid=Api&P=0&h=180"
//     document.getElementById("img2").src = "https://tse1.mm.bing.net/th?id=OIP.qiL0LUzq_zQch_hW36WExAHaEK&pid=Api&P=0&h=180"
// } 

const input =document.getElementById("input1").addEventListener('click',(e)=>{
    let inputvalue=e.target.value
    console.log(inputvalue);

    let count = inputvalue.length
    console.log(count);
    document.getElementById("span").innerHTML=count
})
