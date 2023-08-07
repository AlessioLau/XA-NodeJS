// Dependencias

const { error } = require("console");
const fs = require("fs"); //Guarda libreria en una variable
const http = require('http');
const axios = require('axios');
// Clase 1

// console.log(`Un array ${[1, 2, 3, 4, 5].join(",")}`);
// console.log(`AWS_KEY: ${process.env.AWS_KEY}`);

// fs.readFile("package.json", "utf-8", (err, data) => {
//   if (err) console.error("There was an error", err);
//   console.log("Data\n", data);
// }); //Como tiene un callback se ejecuta al final de la ejecucion de main (cuando no hay nada en la pila de ejecucion)
 
// try{
// const data = fs.readFileSync("package.json", "utf-8"); //Bloquea la ejecucion del hilo al ser sincrono
// console.log("Data sync:\n", data);
// } catch(err){
//     console.error("There was an erorr", err);
// }

// if (fs.existsSync("archivo.txt")){
//     console.log("El archivo ya existe");
//     fs.appendFileSync("archivo.txt", "\nNueva linea!!");
//     return;
// }

// const content = "Contenido para este archivo\nCon salto de linea";

// try{
//     let data = fs.writeFileSync("archivo.txt", content);
//     console.log(data);
//     data = fs.readFileSync("archivo.txt", "utf-8");
//     let lineN = 0;
//     data.split("\n").forEach((line) => {
//         console.log(`Linea ${lineN}`, line);
//         lineN++;
//     });
// } catch(err){
//     throw err;
// }


//Asincronamente
// fs.writeFile("archivo.txt", content, (err, data)=>{
//     if(err) throw err;
//     console.log(data);
//     fs.readFile("archivo.txt", "utf-8", (err, data) => {
//         if(err) throw err;
//         let lineN = 0;
//         data.split("\n").forEach((line) => {
//             console.log(`Linea ${lineN}`, line);
//             lineN++;
//         });
//     });
// });


// Clase 2

const PORT = 8080;

const server = http.createServer((req, res) => {
    if(req.url === "/user" && req.method === "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const user = { name: 'Pepe', lastname: 'Argento'};
        res.write(JSON.stringify(user)); 
        res.end();
        return;
        //res.end("<h1>Usuarios</h1><h3>Aca irian los usuarios<h3>");
    } else if(req.url === "/book" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "application/json"});
        const book = { isbn: 1111, name: "The treasure island"};
        console.log("JSON: ", JSON.stringify(book));
        res.write(JSON.stringify(book));
        res.end();
        return;
    }else if(req.url === "/book" && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const book = JSON.parse(body);
            console.log(book);
            try{
                fs.writeFileSync('src/book.txt', body);
                res.writeHead(201, {"Content-Type": "application/json"});
                res.write(JSON.stringify(book));
                res.end();
            }catch(err){
                console.error(err);
                res.writeHead(500);
                res.write({error: err})
                res.end();
            }
        });
    } else if(req.url === "/") {
        res.end('<h1>Hola cabron</h1><h3>Que onda<h3>');
        return;
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);

    // Ejemplo con libreria http
    // const options = {
    //     hostname: "localhost",
    //     port: PORT,
    //     path: "/user",
    //     method: "GET"
    // };

    // const req = http.request(options, (res)=> {
    //     let data = "";
    //     res.on("data", (chunk) => {
    //         data += chunk;
    //     });

    //     res.on("end", ()=>{
    //         console.log("Datos del servidor: " + data);
    //     });
    // });
    // req.on("error", (err) =>{
    //     console.error(err);
    // });

    axios.get(`http://localhost:${PORT}/user`).then(response => {
        console.log('Datos del servidor', response.data);
    });

    const response = await axios.get(`http://localhost:${PORT}/user`);
    console.log('Datos del servidor', response.data);

    const config = {
        method: "get",
        url: `http://localhost:${PORT}/user`
    }
    let res  = await axios(config);
    console.log(res.status);
    console.log(res.data);

    let resGatitos = await axios.get('https://catfact.ninja/fact');
    console.log('Dato random de gatitos\n',resGatitos.data);

    
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<head></head><body><h1>Holi<h1><body>');
    });
    server.listen(8081, () => console.log('Listening...'));
});

