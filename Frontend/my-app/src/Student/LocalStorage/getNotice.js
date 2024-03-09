const getNotice = () =>{
    let notice = JSON.parse(localStorage.getItem("noticeT")) || [];

    return notice.map((el, index) => (
        <tr key={index}>
            <td>{el.Date}</td>
            <td>{el.Title}</td>
        </tr>
    ));
}


export default getNotice;