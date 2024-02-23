import { PrismaClient } from "@prisma/client";
import stripe from "./stripe";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, price, courseId } = await readBody(event);

  // We only have one course for now, so we have the price hard-coded
  let paymentIntent;
  try {
    paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "usd",
      metadata: {
        email,
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating payment intent",
    });
  }

  // Create a course purchase record
  try {
    await prisma.coursePurchase.create({
      data: {
        userEmail: email,
        // Hard code this value for now
        courseId: courseId,
        paymentId: paymentIntent.id,
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating course purchase",
    });
  }

  // Only return the secret
  return paymentIntent.client_secret;
});
