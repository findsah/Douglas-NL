'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    findConstellation: async ctx => {
        const answer = ctx.request.body;
        let ids = []
        for (let ans of answer) { ids.push(ans.id) }
        const results = await strapi.query('constellation').findOne({ "Answer1": ids[0], "Answer2": ids[1], "Answer3": ids[2] }, ["products","products.Packshot"]);

        return results;
    }
};
