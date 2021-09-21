//users
document.querySelector("#button1").addEventListener("click" , loadEmployees);

function loadEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET" , "https://jsonplaceholder.typicode.com/users" , true);

    xhr.onload = function (){
        if (this.status === 200 ){
            const response = JSON.parse(this.responseText);
            let output1 = "";
            response.forEach(user => {
                output1 += `
                <ul>
                    <li>ID : ${user.id}</li>
                    <li>Name : ${user.name}</li>
                    <li>Username : ${user.username}</li>
                    <li>Email : ${user.email}</li>
                    <li>Address-Street : ${user.address["street"]}</li>
                    <li>Address-Suite : ${user.address["suite"]}</li>
                    <li>Address-City : ${user.address["city"]}</li>
                    <li>Address-Zipcode : ${user.address["zipcode"]}</li>
                    <li>Address-Geo-Lat : ${user.address["geo"]["lat"]}</li>
                    <li>Address-Geo-Lng : ${user.address["geo"]["lng"]}</li>
                    <li>Phone : ${user.phone}</li>
                    <li>Website : ${user.website}</li>
                    <li>Company-Name : ${user.company["name"]}</li>
                    <li>Company-CatchPhrase : ${user.company["catchPhrase"]}</li>
                    <li>Company-Bs : ${user.company["bs"]}</li>
                </ul>
                `
            });
            document.querySelector("#users").innerHTML = output1
        }
    }
    xhr.send();
}
