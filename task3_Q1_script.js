const data = {
    "name": "John",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "city": "New York",
      "state": "NY",
      "country": "USA"
    },
    "languages": ["JavaScript", "Python", "Java"]
};
  

//for loop

for (let prop in data) {
    console.log(prop + ': ' + data[prop]);
}

//for...of

for (let language of data.languages) {
    console.log(language);
}
  

//forEach

data.languages.forEach(function(language) {
    console.log(language);
});
  