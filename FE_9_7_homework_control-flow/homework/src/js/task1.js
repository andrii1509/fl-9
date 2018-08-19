let user = prompt("User Name :");
if (user === null || user.length === 0) {
    alert("Canceled")
} else{
    if (user.length > 0 && user.length < 4){
        alert("I don't know any users having name length less than 4 symbols")
    } else{
        if (user === "User") {
            let password = prompt("Password");
            if (password === null || password.length === 0) {
                alert("Canceled")
            } else{
                if (password === "SuperUser"){
                    let time = new Date().getHours();
                    if (time < 20) {
                        alert("Good day!")
                    }
                    else{
                        alert("Good evening!")
                    }
                } else{
                    alert("Wrong password")
                }
            }
        }else{
            alert("I don’t know you")
        }
    }
}