import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector(".delay-input");
const button = document.querySelector("button[type='submit']");

button.addEventListener("click", event => {
    event.preventDefault();
    const delay = parseInt(delayInput.value);
        const selectedState = document.querySelector("input[name='state']:checked").value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === "fulfilled") {
                resolve(delay);
            }
            else if (selectedState === "rejected") {
                reject(delay);
            }
        }, delay)
    });

    promise
        .then(delay => {
            iziToast.show({
    title: "✅",
    message: `Fulfilled promise in ${delay}ms`,
    titleColor: "#ffffff",
    messageColor: "#ffffff",
    backgroundColor: "#59a10d",
});
        })
        .catch(delay => {
            iziToast.show({
    title: "❌",
    message: `Rejected promise in ${delay}ms`,
    titleColor: "#ffffff",
    messageColor: "#ffffff",
    backgroundColor: "#ef4040",
});
        });
});