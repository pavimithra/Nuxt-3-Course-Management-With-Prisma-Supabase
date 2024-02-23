import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // Get PaymentIntent ID from route
  const { paymentId } = event.context.params;

  // Get user email from the supabase user if there is one.
  const user = await serverSupabaseUser(event);

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: "Login Error",
    });
  }

  // Update course purchase record
  try {
    await prisma.coursePurchase.update({
      where: {
        paymentId,
      },
      data: {
        userEmail: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error linking course purchase",
    });
  }

  return 200;
});
