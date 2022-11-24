const w = "Move: up";
const a = "Move: left";
const s = "Move: down";
const d = "Move: right";

let connection;


const handleUserInput = function (key) {
 if (key === "w"){
  connection.write(w)
 }
 if (key === "a"){
  connection.write(a)
 }
 if (key === "s"){
  connection.write(s)
 }
 if (key === "d"){
  connection.write(d)
 }
 if (key === "\u0003") {
  process.exit();
 }
};

const setupInput = function (conn) {
 connection = conn;
 const stdin = process.stdin;
 stdin.setRawMode(true);
 stdin.setEncoding("utf8");
 stdin.resume();
 stdin.on("data", handleUserInput);
 // stdin.on("data", key => handleUserInput(key));
 return stdin;
};


module.exports = {
 setupInput
};