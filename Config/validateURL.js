// Function to identify the given url is valid or not.
module.exports.validateURL = (string)=> {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }