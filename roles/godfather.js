var votes = require("../lib/votes");

module.exports = function() {

  return {

    name: "Parrain",
    desc: "Vous devez assassiner tous les innocents villageois, vous apparaissez comme un innocent aux yeux du Détective...",
    side: "mafia",

    actions: {
      vote: votes.getVoteAction("mafia", "mafia")
    },
    channels: {
      mafia: {r: true, w: false, n: "Mafia"}
    }

  }

}
