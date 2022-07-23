//THROW

class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shots = 5
    }

    shoot() {
        if (this.shots > 0) {
            console.log("Bang")
            this.shots -= 1
        } else {
            throw new Error("Arma " + this.identifier + " sem munição")
        }
    }
}

let weapon = new SpaceshipWeapon(10)

//TRY CATCH
try {
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
    weapon.shoot()
} catch (e) {
    console.log(e.message)
} finally{
    console.log("Good shot, Sr!")
}

console.log(weapon)
