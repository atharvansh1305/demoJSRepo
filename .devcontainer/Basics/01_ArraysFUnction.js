const  caps1=["Delhi","Lucknow","Jaipur"];
const caps2=["Mumbai","Chennai","Culcutta"];

//const allcapital=caps1.concat(caps2);
//console.log(allcapital);


const myArraysNew=[1,2,3,["A","B",["a","b",[4,5,[7,8]]]]];
const againArrays=myArraysNew.flat(4);
console.log(againArrays);