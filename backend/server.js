const axios = require('axios');

const post_array = [];
post_array.push({
  "url": "https://anits.edu.in/",
  "enable_javascript": true,
  "enable_browser_rendering":true,
  "custom_js": "meta = {}; meta.url = document.URL; meta;"
});
axios({
  method: 'post',
  url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
  auth: {
    username: 'riyazriyaz235@gmail.com',
    password: '2ee02646b8404764'
  },
  data: post_array,
  headers: {
    'content-type': 'application/json'
  }
}).then(function (response) {
    console.log(response)
  var result = response['data']['tasks'];
    console.log("result--------------------------------------------------------------------")
  console.log(result);
  console.log("result--------------------------------------------------------------------")
  console.log(result[0].result);
  console.log("result--------------------------------------------------------------------")
console.log(result[0].result[0].items);
}).catch(function (error) {
  console.log(error);
});
