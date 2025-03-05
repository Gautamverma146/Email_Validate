function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));        //  true
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); //  true
console.log(validateEmail("abc+xyz@bridgelabz.co.us")); //  true
console.log(validateEmail("abc-xyz@bridgelabz.co.uk")); //  true
console.log(validateEmail("abc@bridgelabz.in"));        //  false (should have `.co`)
console.log(validateEmail("abc@google.com"));           //  false (wrong domain)
console.log(validateEmail("abc@bridgelabzcom"));        
console.log(validateEmail("abc..xyz@bridgelabz.co.in"));
console.log(validateEmail("abc@bridgelabz.c"));         
