Math.random();
console.log(Math.random());
const random=document.getElementById("random");
const result=document.getElementById("Result");
const lotterycontainersheet=document.getElementById("lottery container sheet")
let gifts = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
    "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17", "Item 18", "Item 19", "Item 20",
    "Item 21", "Item 22", "Item 23", "Item 24", "Item 25", "Item 26", "Item 27", "Item 28", "Item 29", "Item 30",
    "Item 31", "Item 32", "Item 33", "Item 34", "Item 35", "Item 36", "Item 37", "Item 38", "Item 39", "Item 40",
    "Item 41", "Item 42", "Item 43", "Item 44", "Item 45", "Item 46", "Item 47", "Item 48", "Item 49", "Item 50"
  ];
   
  random.addEventListener("click",function(){
    result.textContent="please wait..."
    setTimeout(function(){
   
   let t=Math.random()*50;
  console.log(t);
   console.log(Math.floor(t)+1); 
   let drawnnumber=Math.floor(t);
   console.log(gifts[drawnnumber]);
   let gift=gifts[drawnnumber];

   result.textContent=`You have got ${drawnnumber+1},You won ${gift}`;
    },5000);


});
gifts.forEach(function(value,i){
  const boxelement=`<div class=box>${i+1}.${value}</div>`
  console.log(boxelement);
  lotterycontainersheet.insertAdjacentHTML("beforeend",boxelement);

})