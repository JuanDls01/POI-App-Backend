const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const { PreloadData } = require("./src/routes/utils/authUtils");

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log(`LISTENING AT 3001`);
    //uncomment para precreacion de roles y super admin user
    // PreloadData()
    //   .then(console.log("DATA preloaded successfully"))
    //   .catch((e) => console.log(e));
  });
});