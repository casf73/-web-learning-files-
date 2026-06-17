let input = document.querySelector(".input");
let run = document.querySelector("#anniu");
let output = document.querySelector(".output");

const main = () => {
    input.addEventListener("keyup",
        (e) => {
            if (e.key === "a") {
                let s = input.value;
                output.textContent = s;
            }
        }
    )
}

export {
    main
}