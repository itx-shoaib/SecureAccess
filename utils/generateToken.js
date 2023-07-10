import jwt from 'jsonwebtoken'; // Importing the 'jsonwebtoken' library

// Function to generate a JSON Web Token (JWT) and set it as a cookie in the response
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d" // Setting the token expiration time to 30 days
    });

    res.cookie('jwt', token, {
        httpOnly: true, // The cookie can only be accessed by the server
        secure: process.env.NODE_ENV !== 'development', // Cookie is secure if not in development environment
        sameSite: 'strict', // Cookie is sent only for same-site requests
        maxAge: 30 * 24 * 60 * 60 * 1000 // Setting the maximum age of the cookie to 30 days
    });
};

export default generateToken; // Exporting the generateToken function as the default export
