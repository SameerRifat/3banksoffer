const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("running");
  const url = new URL(req.url);
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1PCffHLaiOVhFekeFexzNG3W",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${url.origin}/add-on-service?success=true`,
      cancel_url: `${url.origin}/add-on-service`,
    });

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    console.error("Error while creating session", err);

    return NextResponse.json(
      { message: "Error while making session" },
      { status: 500 }
    );
  }
}
