function rot13(str) {
    return str.replace(/[A-Z]/g, function(char) {
        let charCode = char.charCodeAt(0); 
        let newCode = ((charCode - 65 + 13) % 26) + 65; 
        return String.fromCharCode(newCode); 
    });
}