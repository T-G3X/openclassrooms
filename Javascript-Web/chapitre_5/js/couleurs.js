

function colorDiv() {
    let x = "";
    document.addEventListener("keypress", function (e) {
         x= String.fromCharCode(e.charCode);
if (x === "r"  || x === "R") {
            let rougeElt = document.querySelectorAll("div");
            rougeElt.forEach(element => { element.style.backgroundColor = "red";   
                                        });   
} else if (x === "b" || x === "B")
    {
    let blueElt = document.querySelectorAll("div");
    blueElt.forEach(element => { element.style.backgroundColor = "white";
                                        });
} else if (x === "j" || x === "J")
            {
    let yellowElt = document.querySelectorAll("div");
    yellowElt.forEach(element => { element.style.backgroundColor = "yellow";
                                        });
}else if (x === "v" || x==="V") 
    {
    let greenElt = document.querySelectorAll("div");
    greenElt.forEach(element => { element.style.backgroundColor =" green";
                                })
     }
        });
}

colorDiv();