import express from "express";
import Offer from "../models/offerModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ message: "Error fetching offers", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (offer) {
      res.status(200).json(offer);
    } else {
      res.status(404).json({ message: "Offer not found" });
    }
  } catch (error) {
    console.error("Error fetching offer:", error);
    res.status(500).json({ message: "Error fetching offer", error });
  }
});

export default router;
