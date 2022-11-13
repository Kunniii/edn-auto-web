let accessToken = localStorage.getItem("userToken");

let RequestHeader = {
  'authority': 'fuapi.edunext.vn',
  'accept': '*/*',
  'accept-language': 'en',
  'authorization': `Bearer ${accessToken}`,
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
}

module.exports = RequestHeader