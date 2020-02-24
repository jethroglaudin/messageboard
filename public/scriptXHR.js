const sentHTTPRequest = async (method, url, data) => {
    // Create a new XMLHTTPRequest()
    let xhr = new XMLHttpRequest();
    // Configure it pass method, url. Configure the request
    xhr.open(method, url);

    // We can use responseType property to set response format default is a string
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
            console.log(`Error ${xhr.status}: ${xhr.statusText}`)
        }
    }

    xhr.onerror = () => {
        console.log('Something went wrong!');
    }
    
    let responseData = await xhr.send(json(data));
    return responseData;
}