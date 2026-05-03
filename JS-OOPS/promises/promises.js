// promises -> aap ek promise banate ho jo ki do states mein se ek state me jaa sakta hai and wo yaa to resolve hoga ya to reject hoga ab wo kya hoga ye to waqt btayega lekin hume dono ke liye code likhna padta hai

let pr = new Promise (function(res, rej){
    setTimeout((val) => {
        let rn = Math.floor(Math.random() * 10)
        if(rn > 5) res(`resolved at ${rn}`)
        else rej(`rejected at ${rn}`)
    }, 3000);
})

// resolve ya reject kuch ek hoga
// resolve hoga to .then() otherwise .catch()

// pr.then(function(val){
//     console.log(val);
// }).catch((val)=>{
//     console.log(val);
// })
// you can either use the above thing or the below thing

// async vs await
async function tc(){
    try{
        let val = await pr;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}
tc();
// in case of resolve -> try{}, in case of reject -> catch(){}