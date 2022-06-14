"use strict";

/**
 *  contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact");
/**,
  async ({ strapi }) => ({
    async find(ctx) {
      console.log("FDKSJFLKDSJFOSJD");
      await strapi.plugins["email"].services.email.send({
        to: "paul.gansca@qubiz.com",
        from: "paul.gansca@qubiz.com",
        subject: "Use strapi email provider successfully",
        text: "Hello world!",
        html: "Hello world!",
      });
      const entries = await strapi.entityService.findMany(
        "api::contact.contact",
        {
          sort: { createdAt: "DESC" },
          limit: 1,
        }
      );

      // 2
      const sanitizedEntries = await this.sanitizeOutput(entries, ctx);
      ctx.send("EMAIL SENT");
      // 3
      return this.transformResponse(sanitizedEntries);
    },

    async create(ctx) {
      // todo
    },

    async update(ctx) {
      // todo
    },
  })
 */
