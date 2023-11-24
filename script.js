// let a=5
// let b=6
// let sum=a+b
// document.getElementById('result').innerHTML=sum
// const lengths=document.getElementsByClassName("heading")
// for(let i=0;i<lengths.length;i++){
//     lengths[i].innerHTML="hello everyone"
// }

// const num=document.getElementsByTagName("p")

// for(let i=0;i<num.length;i++){
//     num[i].innerHTML="trying to manipulate data"
// }

// const node=document.querySelectorAll(".heading")
// for(let i=0;i<node.length;i++){
//     node[i].innerHTML=`result is ${sum}`
// }

// document.querySelector("p").style.color="red"
// let element=document.querySelector("p")

// let styleObject={"color":"white" , "font-size":"40px" ,"background-color":"black"}

// Object.assign(element.style,styleObject)

class myClass{
    myFunction(){
        document.write("calling method <br>")
    }
}
class child extends myClass{
    test(){
        document.write("calling method 2")
    }
}

// let obj=new myClass()
// obj.myFunction()
// obj.test()

// let obj=new child()
// obj.myFunction()
// obj.test()

class student{

    constructor(name,mark){
          var name ;
          var mark
    }

    setMark(mark){
        this.mark=mark
    }
    setName(name){
        this.name=name
    }
    getMark(){
        return this.mark
    }
    getName(){
        return this.name
    }
    print(){
        document.write(`${stud.getName()} get ${stud.getMark()} marks in examination`)
    }
}

let stud=new student()
stud.setMark(100)
stud.setName("janna")
stud.print()
