'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
     
    findConstellation: async ctx => {
        const answer = ctx.request.body;
        let ids= []
        for(let ans of answer){ids.push(ans.id)}
        const results = await strapi.query('questionnaire-matrix').findOne({"answers.id":ids[0],"answers.id":ids[1],"answers.id":ids[2]},["constellation","constellation.products","constellation.products.Packshot"]);
        
        return results;
    }
};
