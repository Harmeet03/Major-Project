const main = () => {
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;
    localStorage.setItem("Date", date);
    localStorage.setItem("Notice", text);
}

export default main;