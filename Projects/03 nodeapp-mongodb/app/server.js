import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import { join, dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mongoURI = process.env.MONGO_URI;
const databaseName = "mydb";

const app = express();

app.use(express.static(join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/get-profile", async (req, res) => {
  let response = {};
  try {
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection("users");
    const query = { userId: 1 };
    const result = await collection.findOne(query);

    response = result;
    res.send(response ? response : {});
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).send({ error: "Error fetching profile" });
  } finally {
    await client.close();
  }
});

app.post("/update-profile", async (req, res) => {
  const userObj = req.body;
  userObj["userId"] = 1;

  try {
    await client.connect();
    const db = client.db(databaseName);
    const collection = db.collection("users");
    const myQuery = { userId: 1 };
    const newValues = { $set: userObj };
    await collection.updateOne(myQuery, newValues, { upsert: true });

    res.send(userObj);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send({ error: "Error updating profile" });
  } finally {
    await client.close();
  }
});
