// GET A MESSAGES
const getAllMessages = () => {
    const url = "/api/messages/getallmessages";
    axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => console.log(err))
}

// GET A SPECIFIC MESSAGE
const getSpecificMessages = () => {
    const userName = document.getElementById("userName").value;
    const url2 = `/api/messages/${userName}`;

    axios({
        method: "GET",
        url: url2
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}



// POST --- CREATE A MESSAGE
const createMessage = () => {
    const userName = document.getElementById("userNamePost").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const postUrl = '/api/messages/';
    axios.post(postUrl, { userName, email, message })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => console.log(err));
}

// UPDATE MESSAGE
const updateMessage = () => {
    const messageID = document.getElementById("id").value;
    const userName = document.getElementById("userNamePost").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const updateUrl = `/api/messages/${messageID}`;

    axios.put(updateUrl, { userName, email, message })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

// DELETE A MESSAGE
const deleteMessage = () => {
    const messageID = document.getElementById("id").value;

    const deleteUrl = `/api/messages/${messageID}`;
    axios.delete(deleteUrl)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    
}