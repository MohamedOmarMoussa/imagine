import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ['/anyone-can-visit-this-route'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
