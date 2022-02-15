const crypto = require("crypto");
const secret = "toni"// Replace this with the key from static-auth-secret
function generateTurnKey() {
  // The username is a timestamp that represents the expiration date of this credential
  // In this case, it's valid for 12 hours (change the '12' to how many hours you want)
  const username = (Date.now() / 1000 + 12 * 3600).toString();
  // Now create the corresponding credential based on the secret
  const hmac = crypto.createHmac("sha1", secret);
  hmac.setEncoding("base64");
  hmac.write(username);
  hmac.end();
  const credential = hmac.read();
  return {
    username,
    credential,
  };
};
console.log(generateTurnKey());