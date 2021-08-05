require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const knex = require("knex")(require("../knexfile"));
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3000;
const YOUR_DOMAIN = "http://localhost:8080";
///
const history = require("connect-history-api-fallback");
app.use(history());
///

// setup
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist")));

// routes
app.get("/api/customers/:customerID/latestsubscription", async (req, res) => {
  const response = await stripe.subscriptions.list({
    customer: req.params.customerID,
  });
  const subscriptions = response.data;
  res.send(subscriptions.pop());
});

app.get("/api/subscriptions/:subscriptionID", async (req, res) => {
  const response = await stripe.subscriptions.retrieve(
    req.params.subscriptionID
  );
  const subscription = response;
  res.send(subscription);
});

app.post("/api/subscriptions", async (req, res) => {
  await knex("subscriptions").insert(req.body);
  res.sendStatus(204);
});

app.delete("/api/subscriptions/:subscriptionID", async (req, res) => {
  await stripe.subscriptions.del(req.params.subscriptionID);
  res.sendStatus(204);
});

app.get("/api/users/:userUID/subscriptions", async (req, res) => {
  const subscriptions = await knex("subscriptions")
    .select("id")
    .where("user_id", req.params.userUID);
  res.send(subscriptions);
});

app.get("/api/products", async (req, res) => {
  const products = await stripe.products.list();
  res.send(products);
});

app.get("/api/products/:productID", async (req, res) => {
  const product = await stripe.products.retrieve(req.params.productID);
  res.send(product);
});

app.get("/api/products/:productID/prices", async (req, res) => {
  const prices = await stripe.prices.list({ product: req.params.productID });
  res.send(prices);
});

app.post("/api/prices/:priceID/oneTimePayment", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: req.params.priceID,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.post("/api/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create(req.body);
  res.send(session);
});

app.get("/api/sessions/:sessionID", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.params.sessionID);
  res.send(session);
});

// knex
async function startServer() {
  console.log("Running migrations");
  await knex.migrate.latest();

  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

startServer();
