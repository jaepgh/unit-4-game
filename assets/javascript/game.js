//------------------DATA-------------------//

var player1 = {
    maxLifePoints: 120,
    currentLifePoints: 120,
    initialAttackPower: 8,
    currentAttackPower: 8,
    playerName: "Obi-Wan Kenobi",
    playerSide: "the Force",

    updateAttackPower: function () {
        this.initialAttackPower += this.initialAttackPower;
    },
    updateCurrentLifePoints: function (attackerPower) {
        this.currentLifePoints -= attackerPower;
    },
    isAlive: function () {
        return this.currentLifePoints > 0;
    },
    resetPlayer: function () {
        this.currentAttackPower = this.initialAttackPower;
    }
};

var player2 = {
    maxLifePoints: 180,
    currentLifePoints: 180,
    initialAttackPower: 5,
    currentAttackPower: 5,
    playerName: "Luke Skywalker",
    playerSide: "the Force",

    updateAttackPower: function () {
        this.initialAttackPower += this.initialAttackPower;
    },
    updateCurrentLifePoints: function (attackerPower) {
        this.currentLifePoints -= attackerPower;
    },
    isAlive: function () {
        return this.currentLifePoints > 0;
    },
    resetPlayer: function () {
        this.currentAttackPower = this.initialAttackPower;
    }
};

var player3 = {
    maxLifePoints: 150,
    currentLifePoints: 150,
    initialAttackPower: 20,
    currentAttackPower: 20,
    playerName: "Darth Sidious",
    playerSide: "the Force",

    updateAttackPower: function () {
        this.initialAttackPower += this.initialAttackPower;
    },
    updateCurrentLifePoints: function (attackerPower) {
        this.currentLifePoints -= attackerPower;
    },
    isAlive: function () {
        return this.currentLifePoints > 0;
    },
    resetPlayer: function () {
        this.currentAttackPower = this.initialAttackPower;
    }
};

var player4 = {
    maxLifePoints: 180,
    currentLifePoints: 180,
    initialAttackPower: 25,
    currentAttackPower: 25,
    playerName: "Darth Maul",
    playerSide: "the Force",

    updateAttackPower: function () {
        this.initialAttackPower += this.initialAttackPower;
    },
    updateCurrentLifePoints: function (attackerPower) {
        this.currentLifePoints -= attackerPower;
    },
    isAlive: function () {
        return this.currentLifePoints > 0;
    },
    resetPlayer: function () {
        this.currentAttackPower = this.initialAttackPower;
    }
};