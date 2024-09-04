import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AdminMiddleware {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    await auth.check();
    // code for middleware goes here. ABOVE THE NEXT CALL
    if (auth.user?.password !== "admin@00154") {
      return response.redirect().toPath("/dashboard/auth/login");
    }
    await next();
  }
}
