import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  days: String,
  titleSub: String,
  description: [String],
  imageMain: String,
  price45people: mongoose.Schema.Types.Mixed,
  price40people: mongoose.Schema.Types.Mixed,
  typeOfTrip: String,
  lengthOfTrip: String,
  destinationType: String,
});

const Offer = mongoose.model("Offer", offerSchema);

export default Offer;
