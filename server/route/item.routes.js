const express = require("express");
const router = express.Router();
const Item = require("../controllers/item.controller");
const { protects } = require("../middleware/auth");
const {
  create,
  allItemsBySeller,
  itemDetails,
  showInterestInItem,
  itemDetailsWithInterestedBuyers,
  allItems,
  markItemAsSold,
  deleteItem,
  trackBuyerInterests,
  checkInterest,
} = Item;
router.route("/testtest").get(allItems);
router.route("/track").get(protects, trackBuyerInterests);
router.route("/").post(create);
router.route("/all-seller-items").get(protects, allItemsBySeller);
router.route("/:itemId/one").get(itemDetails);
router
  .route("/:itemId")
  .get(protects, itemDetailsWithInterestedBuyers)
  .put(markItemAsSold)
  .delete(deleteItem);
router.route("/show-interest/:itemId").post(protects, showInterestInItem);
router.route("/:userId/:itemId").get(checkInterest);

module.exports = router;
