const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);

exports.makePayment = async (req, res) => {
  let error;
  let status;
  try {
    const { token, stripeOrderId, customerId } = req.body;
    console.log(req.body);

    const customer = await stripe.customers.retrieve(customerId);
    // const idempotency_key = uuid();
    // const charge = await stripe.charges.create(
    //   {
    //     amount: totalSumFromCart * 100,
    //     currency: "usd",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //     description: `Purchased items`,
    //     order: stripeOrderId,
    //     shipping: {
    //       name: token.card.name,
    //       address: {
    //         line1: token.card.address_line1,
    //         line2: token.card.address_line2,
    //         city: token.card.address_city,
    //         country: token.card.address_country,
    //         postal_code: token.card.address_zip
    //       }
    //     }
    //   }
    //   {
    //     idempotency_key
    //   }
    // );

    const payOrder = await stripe.orders.pay(stripeOrderId, {
      source: token.id
    });

    console.log("Charge:", { payOrder });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
  res.json({ error, status });
};
