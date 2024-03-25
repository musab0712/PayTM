const express = require("express");
const router = express.Router();
const { Account } = require("../db");
const { autoMiddleware } = require("../middelware");
const mongoose = require("mongoose");

router.get("/balance", autoMiddleware, async (req, res) => {
  const account = await Account.findOne({ userId: req.userId });

  res.json({ balance: account.balance });
});

// router.post("/transfer", autoMiddleware, async (req, res) => {
//   const { amount, to } = req.body;
//   const account = await Account.findOne({ userId: req.userId });
//   if (account.balance < amount) {
//     res.status(400).json({
//       message: "Balance insufficient",
//     });
//   }
//   const toAccount = await Account.findOne({ userId: to });

//   if (!toAccount) {
//     res.status(400).json({
//       message: "invalid account",
//     });
//   }
//   await Account.updateOne(
//     { userId: req.userId },
//     {
//       $inc: {
//         balance: -account,
//       },
//     }
//   );

//   await Account.updateOne(
//     { userId: to },
//     {
//       $inc: {
//         balance: account,
//       },
//     }
//   );

//   res.json({
//     message: "Transfer successfully",
//   });
// });

router.post("/transfer", autoMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { amount, to } = req.body;

  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  if (account.balance < amount) {
    await session.abortTransaction();
    res.status(400).json({ message: "insuffcient balance" });
  }
  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    res.status(400).json({ message: "Invalid Acoount" });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();
  res.json({
    message: "Tranfer Successfully",
  });
});

module.exports = router;
