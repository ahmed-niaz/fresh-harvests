const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173","https://fresh-harvests.web.app"],
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterone.lxvfmw8.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// jwt
app.post("/jwt", async (req, res) => {
  const userEmail = req.body;
  const token = jwt.sign(userEmail, process.env.JWT_TOKEN, {
    expiresIn: "123d",
  });
  res.send({ token });
});

// token verification
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.send({ message: "No token" });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.send({ message: "invalid token" });
    }
    req.decoded = decoded;
    next();
  });
};

// collection
const database = client.db("fresh-harvests");
const productsCollection = database.collection("products");
const usersCollection = database.collection("users");
const categoryCollection = database.collection("category");

const dbConnect = async () => {
  try {
    client.connect();
    console.log(`Database connected successfully`);

    // SAVE new user data in database
    app.put("/api/v1/users/register", async (req, res) => {
      const user = req.body;
      const query = {
        email: user?.email,
      };
      // check if user already exist in db
      const isExist = await usersCollection.findOne(query);

      // if(isExist ) return res.send(isExist)
      if (isExist) {
        // if existing user login again
        return res.send(isExist);
      }

      // save user for first time
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          email: user.email,
          name: user.name || "Admin",
          password: user.password || "12345678",
          timestamp: Date.now(),
        },
      };
      const result = await usersCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    // get user data
    app.get("/api/v1/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // PRODUCTS
    // create products
    app.post("/api/v1/products", async (req, res) => {
      try {
        const product = req.body;
        const result = await productsCollection.insertOne(product);
        res.status(201).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });

    app.get("/api/v1/products", async (req, res) => {
      try {
        const result = await productsCollection.find().toArray();
        res.status(201).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });

    // get products by id
    app.get("/api/v1/products/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await productsCollection.findOne(query);
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // Update product by id
    app.put("/api/v1/products/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const product = req.body;

        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...product,
            updatedAt: new Date().toISOString(), // Update timestamp for changes
          },
        };

        const result = await productsCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
          return res.status(404).send({ error: "Product not found" });
        }
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // delete products
    app.delete("/api/v1/products/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await productsCollection.deleteOne(query);
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // CATEGORY

    // Create category
    app.post("/api/v1/category", async (req, res) => {
      try {
        const category = req.body;

        // Add createdAt and updatedAt timestamps
        const timestamp = new Date().toISOString();
        const categoryWithTimestamps = {
          ...category,
          createdAt: timestamp,
          updatedAt: timestamp,
        };

        const result = await categoryCollection.insertOne(
          categoryWithTimestamps
        );
        res.status(201).send(result);
      } catch (error) {
        console.error(error.message);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });

    // get categories
    app.get("/api/v1/category", async (req, res) => {
      try {
        const result = await categoryCollection.find().toArray();
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ error: "something went wrong" });
      }
    });

    // get category by id

    app.get("/api/v1/category/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await categoryCollection.findOne(query);
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // Update categories by id
    app.put("/api/v1/category/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const category = req.body;

        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...category,
            updatedAt: new Date().toISOString(), // Update timestamp for changes
          },
        };

        const result = await categoryCollection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
          return res.status(404).send({ error: "Category not found" });
        }
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // delete category
    app.delete("/api/v1/category/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await categoryCollection.deleteOne(query);
        res.status(200).send(result);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "Something went wrong" });
      }
    });

    // end
  } catch (error) {
    console.log(error.name, error.message);
  }
};

dbConnect();

// api
app.get("/", async (req, res) => {
  res.send("fresh harvests server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
