const express = require("express");
const router = express.Router();
const Item = require("../controllers/item.controller");

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
} = Item;

router.route("/").post(create).get(allItems);
router.route("/:sellerId/all").get(allItemsBySeller);
router.route("/:itemId/one").get(itemDetails);
router
  .route("/:itemId")
  .get(itemDetailsWithInterestedBuyers)
  .put(markItemAsSold)
  .delete(deleteItem);
router.route("/show-interest/:itemId").post(showInterestInItem);
router.route("/my-interest/:userId").get(trackBuyerInterests);
module.exports = router;
