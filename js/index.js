console.log("This is my script")

let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "bangoayan746",
    "email": "bangoayan746@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultcount.InnerHTML=`<img src="img/loading.svg" alt=""></img>`
    let key = "ema_live_WitwL0vb8ZYjIwdK9m95euBTVQMjOffYPR9oXjOh"
    let email = document.getElementById("username").value
    return
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key]!==""&& result[key]!==""){

        }
        str = str + `<div>${key}: ${result[key]}</div>`
    }

    console.log(str)
    resultcount.InnerHTML = str

})






