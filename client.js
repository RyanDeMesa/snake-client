// establishes a connection with the game server
const { write } = require("fs");
const net = require("net");

const connect = function () {
 const conn = net.createConnection({
   host: "165.227.47.243",// IP address here,
   port: 50541,// PORT number here,
 });
 conn.on("connect", () => {
  console.log("Successfully connected to game server");
 });
 conn.on("connect", () => {
  conn.write("Name: TBL")
 })
 // interpret incoming data as text
 conn.setEncoding("utf8");
 conn.on("data", (data) => {
  console.log(data);
 });
 return conn;
};

module.exports = {
 connect
};