const User = require("../model/users.model");
const Item = require("../model/item.model");
const Interested = require("../model/interested.model");
const ErrorResponse = require("../utils/errorResponse");
const { deleteOne } = require("../model/users.model");

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
  const { sellerId } = req.params;
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
    const item = await Item.findById(itemId);
    res.status(200).json({ success: true, item });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.itemDetailsWithInterestedBuyers = async (req, res) => {
  const { itemId } = req.params;
  const { sellerId } = req.body;
  try {
    const item = await Item.findById(itemId);
    if (item.sellerId == sellerId) {
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
      res
        .status(403)
        .json({ success: false, message: "you can't view interested buyers" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.showInterestInItem = async (req, res) => {
  const { itemId } = req.params;
  const { interestedBuyer } = req.body;
  try {
    const checkItem = await Item.findOne({ _id: itemId });
    if (!checkItem) {
      res.status(401).json({ success: false, message: "user doesnt exist" });
    } else {
      if (checkItem.sellerId !== interestedBuyer) {
        const interest = await Interested.create({
          itemId,
          interestedBuyer,
        });
        res.status(201).json({ success: true, interest });
      } else {
        res.status(403).json({
          success: false,
          message: "you can't show interest in an item you're selling",
        });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.markItemAsSold = async (req, res) => {
  const { itemId } = req.params;
  const { userId } = req.body;

  try {
    const item = await Item.findOne({ _id: itemId });
    if (item.sellerId == userId) {
      if (item.is_sold === false) {
        await item.updateOne({ $set: { is_sold: true } });
        res.status(200).json({ success: true, message: "updated to sold" });
      } else {
        await item.updateOne({ $set: { is_sold: false } });
        res.status(200).json({ success: true, message: "updated to not sold" });
      }
    } else {
      res.status(403).json({ success: false, message: "you cant mark this" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;
  const { userId } = req.body;
  try {
    await Item.findOneAndDelete({ _id: itemId, sellerId: userId });
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.allItems = async (req, res) => {
  try {
    const all = await Item.find({ is_sold: false });
    res.status(200).json({ success: true, all });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.trackBuyerInterests = async (req, res) => {
  const { userId } = req.params;

  try {
    const myInterests = await Interested.find({
      interestedBuyer: userId,
      is_sold: false,
    }).populate("itemId");
    res
      .status(200)
      .json({ success: true, total: myInterests.length, myInterests });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
