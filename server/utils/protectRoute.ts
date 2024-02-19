import { serverSupabaseUser } from "#supabase/server";
import { H3Event } from "h3";

// If the user does not exist on the request, throw a 401 error
export default async (event: H3Event) => {
  // Get user email from the supabase user if there is one.
  const user = await serverSupabaseUser(event);
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }
};
