

export const checkValidData = (email, password, name = "") => { 
    const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    // Validate name only if it's not empty (for Sign Up)
    const isNameValid = name.length === 0 || /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if (!isEmailValid) return 'Invalid Email';
    if (!isPasswordValid) return 'Invalid Password';

    // Only check name if signing up (name is not empty)
    if (name.length > 0 && !isNameValid) return 'Invalid Name';

    return null;
};
