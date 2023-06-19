require('dotenv').config()
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secretKey = process.env.SECRET_KEY;// Replace with your secret key
const iv = crypto.randomBytes(16); // Initialization Vector (IV)

// Function to encrypt a password
function encryptPassword(password) {
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    let encryptedPassword = cipher.update(password, 'utf8', 'hex');
    encryptedPassword += cipher.final('hex');
    return encryptedPassword;
  }
  
  // Function to decrypt an encrypted password
  function decryptPassword(encryptedPassword) {
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'hex'), iv);
    let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
    decryptedPassword += decipher.final('utf8');
    return decryptedPassword;
  }
module.exports={encryptPassword,decryptPassword}


