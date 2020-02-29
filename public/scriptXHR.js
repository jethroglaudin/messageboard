const sendHTTPRequest = async (method, url, data) => {
    // Create a new XMLHTTPRequest()
    const promise = new Promise(( resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // Configure it pass method, url. Configure the request
        xhr.open(method, url);
    
        // We can use responseType property to set response format default is a string
        // data will be parsed from json to javascript data. 
        xhr.responseType = 'json';
    
        // Allows to both send and read customer headers from response
        // Should you do a post request don't forget to set the header content type
        // many server-side framworks 
        if(data){
            xhr.setRequestHeader('Content-type', 'application/json');
        }
        // this will be called after response is recieved 
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response)
                console.log(`Error ${xhr.status}: ${xhr.statusText}`)
            }
            else{
                resolve(xhr.response);
            }
        }
    
        xhr.onerror = () => {
            console.log('Something went wrong!');
        }
        
        xhr.send(JSON.stringify(data));
    });
    return promise;  
}

const getAllMessages = async () => {
    const url = "/api/messages/getallmessages";
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        if(xhr.status >= 400) {
            console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
        } else{
            let response = xhr.response;
            const message = response.map(data => {
                return (
                    "<li>"
               + "Username: "
               + data.userName
               + "<br>"
               + "<li>"
               + "Email: "
               + data.email
               + "<br>"
               + "<li>"
               + "Message: "
               + data.message
           );               
            })
            document.getElementById("allMessages").innerHTML = `<ul> ${message.join("\n")} </ul>`; 

        }
            
    }        
}

