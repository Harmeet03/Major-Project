
const Form = () => {
    document.getElementById('AdminSignUp').addEventListener('submit', async function (event) {
        const formData = new FormData(this);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        try {
            const response = await fetch('', {
                method: 'POST',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject)
            });
    
            if (response.ok) {
                console.log("Form Submitted");
            } 
            else {
                console.log("Form failed");
                event.preventDefault();
            }
        } catch (error) {
            event.preventDefault();
            console.log(`Error while submitting form ${error}`);
            let nError = document.getElementById("nError");
            nError.style.display = "block";
        }
    });
}

export default Form();