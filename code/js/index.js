let input = document.querySelector(".input");
let run = document.querySelector("#anniu");
let output = document.querySelector(".output");

const main = () => {
    run.addEventListener("click",
        () => {
            let s = input.value;
            output.textContent = s;
        }
    )
}

export {
    main
}