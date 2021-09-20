import {db} from "./config.js"

db.collection("item")
  .doc("1")
  .get()
  .then((doc) => {
    console.log(doc.data());
  }).catch((err) => {
    console.log(err);
    });


const item_data = {
    price : 100,
    name:"Watch"
};

db.collection('item').doc('1').set(item_data).then(
  function() {
      console.log("Added to the database");
  }
);