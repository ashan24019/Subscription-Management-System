import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
    res.send({ title: "GET upcomming renewals" })
  );

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscriptions details" })
);

subscriptionRouter.post("/", authorize , createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscriptions" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE subscriptions" })
);

subscriptionRouter.get("/user/:id", authorize, getUserSubscription );

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscriptions" })
);


export default subscriptionRouter;
