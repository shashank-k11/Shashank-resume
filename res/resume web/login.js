let form=document.getElementById("form")
form.addEventListener('submit',(z)=>{
    z.preventDefault()


    let txt1=document.getElementById("txt1").value
    let txt2=document.getElementById("txt2").value
    let txt3=document.getElementById("txt3").value
    let txt4=document.getElementById("txt4").value


    let str1=window.localStorage.setItem("User-name",`${txt1}`)
    let str2=window.localStorage.setItem("E-Mail",`${txt2}`)
    let str3=window.localStorage.setItem("Ph.Number",`${txt3}`)
    let str4=window.localStorage.setItem("Password",`${txt4}`)

})