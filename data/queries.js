const database = require("./database_connection");

module.exports = {
    getTeams(){
        return database("team").select();
    },
    getTeam(id){
        return database("team").select().where("id", id).first();
    },
    getSomeTeams(ids){
        return database("team").select().whereIn("id", ids);
    },
    addTeam(team){
        return database("team").returning("*").insert(team)
            .then(team => team[0]);
    },
    updateTeam(id, team){
        return database("team").where("id", id).returning("*").update(team)
            .then(team => team[0]);
    },
    deleteTeam(id){
        return database("team").where("id", id).delete();
    },
    getAthletes(){
        return database("athlete").select();
    },
    getAthletesByTeam(id){
        return database("athlete").select().where("teamId", id);
    },
    getAthlete(id){
        return database("athlete").select().where("id", id).first();
    },
    addAthlete(athlete){
        return database("athlete").returning("*").insert(athlete)
            .then(athlete => athlete[0]);
    },
    deleteAthlete(id){
        return database("athlete").where("id", id).delete();
    },
    updateAthlete(id, athlete){
        return database("athlete").where("id", id).returning("*").update(athlete)
            .then(athlete => athlete[0]);
    }
};
