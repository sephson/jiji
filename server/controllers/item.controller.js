const User = require("../model/users.model");
const Item = require("../model/item.model");
const Interested = require("../model/interested.model");
const ErrorResponse = require("../utils/errorResponse");
const { deleteOne } = require("../model/users.model");
const { protects } = require("../middleware/auth");

exports.create = async (req, res) => {
  const { name, sellerId, price, description, image } = req.body;
  try {
    const checkId = await User.findOne({ _id: sellerId });
    if (!checkId) {
      res.status(401).json({ success: false, message: "user doesnt exist" });
    } else {
      const item = await Item.create({
        name,
        sellerId,
        price,
        description,
        image,
      });
      res.status(201).json({ success: true, item });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.allItemsBySeller = async (req, res) => {
  const sellerId = req.user._id;
  try {
    const items = await Item.find({ sellerId });
    res.status(200).json({ success: true, total: items.length, items });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.itemDetails = async (req, res) => {
  const { itemId } = req.params;
  try {
    const item = await Item.findById(itemId).populate("sellerId");
    item
      ? res.status(200).json({ success: true, item })
      : res.status(404).json({ success: false, message: "not found" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.itemDetailsWithInterestedBuyers = async (req, res, next) => {
  const { itemId } = req.params;
  const { _id } = req.user;

  try {
    const item = await Item.findById(itemId);
    const a = JSON.stringify(item.sellerId);
    const b = JSON.stringify(_id);

    if (a == b) {
      const interests = await Interested.find({ itemId }).populate(
        "interestedBuyer",
        "email"
      );
      res.status(200).json({
        success: true,
        item,
        no_of_interest: interests.length,
        interests,
      });
    } else {
      next(new ErrorResponse("Not authorized to access this router", 401));
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.showInterestInItem = async (req, res) => {
  const { itemId } = req.params;
  const interestedBuyer = req.user._id;
  try {
    const checkItem = await Item.findOne({ _id: itemId });
    if (!checkItem) {
      res.status(401).json({ success: false, message: "item doesnt exist" });
    } else {
      const interest = await Interested.create({
        itemId,
        interestedBuyer,
      });
      res.status(201).json({ success: true, interest });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.markItemAsSold = async (req, res) => {
  const { itemId } = req.params;

  try {
    const item = await Item.findOne({ _id: itemId });
    if (item) {
      if (item.is_sold === false) {
        await item.updateOne({ $set: { is_sold: true } });
        res.status(200).json({ success: true, message: "updated to sold" });
      } else {
        await item.updateOne({ $set: { is_sold: false } });
        res.status(200).json({ success: true, message: "updated to not sold" });
      }
    } else {
      res.status(404).json({ success: false, message: "item doesnt exist" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  try {
    await Item.findOneAndDelete({ _id: itemId });
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.allItems = async (req, res) => {

  res.status(200).json({ success: "Api-test-heroku" });
  // try {
  //   const all = await Item.find({ is_sold: false });
  //   res.status(200).json({ success: true, all });
  // } catch (error) {
  //   res.status(500).json({ success: false, error });
  // }
};

exports.trackBuyerInterests = async (req, res) => {
  const userId = req.user._id;
  try {
    const items = await Interested.find({ interestedBuyer: userId }).populate(
      "itemId"
    );
    res.status(200).json({ success: true, total: items.length, items });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.checkInterest = async (req, res) => {
  const { userId, itemId } = req.params;
  try {
    const interest = await Interested.findOne({
      itemId,
      interestedBuyer: userId,
    });
    interest ? res.status(200).json(true) : res.status(200).json(false);
  } catch (error) {
    res.status(500).json(error);
  }
};


exports.test = async (req, res) => {
  res.status(200).json({success: "Api success"})
}