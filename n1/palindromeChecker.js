function palindrome(str) {
    const cleaned = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

palindrome("eye");