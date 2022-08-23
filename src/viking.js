// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    // this.isDead = false; //sticky death bit
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${dmg} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}
// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health -= dmg;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
    return `A Saxon has received ${dmg} points of damage`;
  }
}
// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  choseRnd(warriorArr) {
    return Math.floor(warriorArr.length * Math.random());
  }
  vikingAttack() {
    //const rdmV = this.choseRnd(this.vikingArmy),
    //  rdmS = this.choseRnd(this.saxonArmy),
    //  att = this.saxonArmy[rdmS].receiveDamage(this.vikingArmy[rdmV].strength);
    //if (this.saxonArmy[rdmS].health <= 0) {
    //  this.saxonArmy.splice(rdmS, 1);
    //} return att;
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
  }
  // 5th iteration =>
  armyAttack(attacker, defender) {
    const rdmV = this.choseRnd(defender),
      rdmS = this.choseRnd(attacker),
      att = defender[rdmV].receiveDamage(attacker[rdmS].strength);
    if (defender[rdmV].health <= 0) {
      defender.splice(rdmV, 1);
    }
    return att;
  }
  showStatus() {
    if (!!this.vikingArmy.length && !!this.saxonArmy.length)
      return "Vikings and Saxons are still in the thick of battle.";
    else if (!this.saxonArmy.length)
      return "Vikings have won the war of the century!";
    else
      return "Saxons have fought for their lives and survived another day...";
  }
}

//* For own Testing ==>
const sax = new Saxon(60, 25),
  olaf = new Viking("Olaf", 300, 150),
  lars = new Viking("Lars", 25, 150),
  smug = new Viking("Smug", 100, 50),
  war = new War();
// console.log(olaf.receiveDamage(50));
war.addViking(olaf);
war.addViking(lars);
war.addViking(smug);
war.addSaxon(sax);
war.addSaxon(sax);
war.addSaxon(sax);
//console.log(war.vikingArmy);
console.log(war.saxonArmy, war.vikingArmy);
//console.log(war.saxonArmy[0].receiveDamage(50));
war.saxonAttack();
war.vikingAttack();
console.log(war.vikingAttack(), "|", war.saxonAttack());
console.log(war.saxonArmy); // the sax health is buggy ..
console.log(war.saxonAttack());
