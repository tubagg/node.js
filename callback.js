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

//import fetch from "node-fetch";
import axios from "axios";

/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
 console.log("users yüklendi.",users);

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => data.json())
    .then(posts => console.log("Postlar yüklendi.",posts));

});*/


const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);

    });
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
        "https://jsonplaceholder.typicode.com/posts/"+ post_id
        );
        resolve(data);

    });
};

(async () => {

const users = await getUsers();


const post = await getPost(1);


console.log(users);
console.log(post);

})();

