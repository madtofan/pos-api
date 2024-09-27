import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const menuRouter = createTRPCRouter({
  getMenus: publicProcedure.query(async ({ ctx }) => {
    const menus = await ctx.db.query.menu.findMany({
      orderBy: (menus, { desc }) => [desc(menus.name)],
    });
    return menus ?? null;
  }),
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});
