const setNotice = () => {
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;

    let arr=JSON.parse(localStorage.getItem("noticeT")) || [];

    let obj={
        Date: date,
        Title: text
    };

    arr.push(obj);

    localStorage.setItem("noticeT", JSON.stringify(arr));
}

export default setNotice;