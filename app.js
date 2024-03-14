const yargs = require("yargs");

// Mengambil argumen dari command line
// const command = process.argv;
// const { tulisPertanyaan, simpanContact } = require("./contacts");

// const main = async () => {
//   const name = await tulisPertanyaan("Whats your name? ");
//   const phone = await tulisPertanyaan("Whats your phone number? ");
//   const email = await tulisPertanyaan("Whats your email? ");
//   simpanContact(name, phone, email);
// };

// main();

console.log(yargs.argv);
