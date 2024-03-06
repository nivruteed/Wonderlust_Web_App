const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

//Index R
router.get("/", wrapAsync(listingController.index)
);

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//show route
router.get("/:id", wrapAsync(listingController.showListing)
);

//Create Route for add
router.post("/",isLoggedIn, validateListing, wrapAsync(listingController.createListing)
);

//Edit route

router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.renderEditForm)
);

//Update Route
router.put("/:id",isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing)
);

//Delete Route
router.delete("/:id",isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)
);


module.exports = router;