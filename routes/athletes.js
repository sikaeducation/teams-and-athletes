const express = require("express");
const router = express.Router();
const queries = require("../data/queries");

router.get("/", function(request, response){
    queries.getAthletes().then(athletes => {
        queries.getSomeTeams(athletes.map(athlete => athlete.teamId)).then(teams => {
            response.json({data: {athletes}, included: {teams}});
        });
    });
});

router.get("/:id", function(request, response){
    queries.getAthlete(request.params.id).then(athlete => {
        if (!athlete){
            response.sendStatus(404);
        } else {
            queries.getTeam(athlete.teamId).then(team => {
                response.statuscode = 201;
                response.json({data: {athlete}, included: {team}});
            });
        }
    });
});

router.post("/", function(request, response){
    queries.addAthlete(request.body).then(athlete => {
        queries.getTeam(athlete.teamId).then(team => {
            response.statusCode = 201;
            response.json({data: {athlete}, included: {team}});
        });
    });
});

router.put("/:id", function(request, response){
    queries.updateAthlete(request.params.id, request.body).then(athlete => {
        queries.getTeam(athlete.id).then(team => {
            response.json({data: {athlete}, included: {team}});
        });
    });
});

router.patch("/:id", function(request, response){
    queries.updateAthlete(request.params.id, request.body).then(athlete => {
        queries.getTeam(athlete.id).then(team => {
            response.json({data: {athlete}, included: {team}});
        });
    });
});

router.delete("/:id", function(request, response){
    queries.deleteAthlete(request.params.id).then(() => {
        response.sendStatus(204);
    });
});

module.exports = router;
