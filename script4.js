async function showDisplay(){
    let myPromise=new Promise((resolve,reject)=>{
               setTimeout(()=>{
                resolve("Helloo Everyone")
               },1000)
    })

    document.getElementById('first').innerHTML=await myPromise
}

document.getElementById('second').innerHTML="Welcome"
showDisplay()


// var promise=new Promise((resolve, reject) => {
//     const x="abc"
//     const y="abm"

//     if(x==y){
//         resolve()
//     }else{
//         reject()
//     }
// })

// promise.then(()=>{document.write("success")}).catch(()=>{document.write("Error ocuured")})