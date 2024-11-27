import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the routes that should be publicly accessible
const isPublicRoute = createRouteMatcher([
  "/",
  "/events/:id",
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)", // Asegura que esta ruta sea pública
]);

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
