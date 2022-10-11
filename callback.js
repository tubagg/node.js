/*{setTimeout(() => {
console.log("Tuba");
},5000);}*/

/*setInterval(()=>{
console.log("Ben her saniye çalısacagım");
},1000);*/

/*const sayHi = (cb) => {
    cb();
};

sayHi(()=>{
    console.log("Hello");
});*/

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
 console.log("users yüklendi.",users);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => data.json())
    .then(posts => console.log("Postlar yüklendi.",posts));


});

