exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE TABLE team RESTART IDENTITY CASCADE")
        .then(function () {
            return knex("team").insert([{
                name: "Pittsburgh Steelers"
            },{
                name: "Denver Broncos"
            },{
                name: "Buffalo Bills"
            },{
                name: "Oakland Raiders"
            }]);
        });
};
