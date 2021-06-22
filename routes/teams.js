const express = require("express");
const router = express.Router();
const queries = require("../data/queries");

router.get("/", function(request, response){
    queries.getTeams().then(teams => {
        response.json({data: {teams}});
    });
});

router.get("/:id/athletes", function(request, response){
    queries.getTeam(request.params.id).then(team => {
        if (!team){
            response.sendStatus(404);
        } else {
            queries.getAthletesByTeam(request.params.id).then(athletes => {
                response.json({data: {athletes}, included: {team}});
            });
        }
    });
});

router.get("/:id", function(request, response){
    queries.getTeam(request.params.id).then(team => {
        if (!team){
            response.sendStatus(404);
        } else {
            response.json({data: {team}});
        }
    });
});

router.post("/", function(request, response){
    queries.addTeam(request.body).then(team => {
        response.statusCode = 201;
        response.json({data: {team}});
    });
});

router.put("/:id", function(request, response){
    queries.updateTeam(request.params.id, request.body).then(team => {
        response.json({data: {team}});
    });
});

router.patch("/:id", function(request, response){
    queries.updateTeam(request.params.id, request.body).then(team => {
        response.json({data: {team}});
    });
});

router.delete("/:id", function(request, response){
    queries.deleteTeam(request.params.id).then(() => {
        response.sendStatus(204);
    });
});

module.exports = router;
