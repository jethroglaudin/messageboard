const getAllMessages = () => {
    const url = "/api/messages/getallmessages";
    fetch(url)
    .then(response => {
        // console.log(response.json());
        return response.json();
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
}

// GET SPECIFIC Messages using UserName
const getSpecificMessages = () => {
    const userName = document.getElementById("userName").value;
    const url2 = `/api/messages/${userName}`;

    fetch(url2)
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// CREATE MESSAGE : METHOD POST

const createMessage = () => {
    const userName = document.getElementById("userNamePost").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const postUrl = '/api/messages/';

    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ userName, email, message })
        body: makeJSON({ userName, email, message })
    }).then(response => {
        console.log(response)
        return response.json();
    }).then(newMessage => {
        console.log(newMessage);
        return newMessage;
    })
    .catch(err => console.log(err));
}

// Update Message

const updateMessage = () => {
    const messageID = document.getElementById("id").value;
    const userName = document.getElementById("userNamePost").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const updateUrl = `/api/messages/${messageID}`;

    fetch(updateUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: makeJSON({ userName, email, message })
    }).then(response => {
        return response.json()
    }).then(updatedMsg => {
        console.log(updatedMsg);
        return updatedMsg;
    }).catch(err => console.log(err))

}

// DELETE A MESSAGE
const deleteMessage = () => {
    const messageID = document.getElementById("id").value;
    const deleteUrl = `/api/messages/${messageID}`;

    fetch(deleteUrl, {
        method: "DELETE",
        headers: {
            'Content-Type': 'applicaion/json'
        }
    }).then(response => {
        return response.json();
    }).then(deletedMessage => {
        console.log(deletedMessage);
        return deletedMessage;
    }).catch(err => console.log(err));
}

const makeJSON = (data) => {
    return JSON.stringify(data);
}