var votes = require("../lib/votes");

module.exports = function() {

  return {

    name: "Villager",
    side: "village",

    actions: {
      vote: votes.getVoteAction("", "vote")
    },
    channels: {
      village: {r: true, w: false, n: "Village", p: 20}
    }

  }

}
