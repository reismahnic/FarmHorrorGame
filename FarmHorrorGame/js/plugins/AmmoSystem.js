/*:
 * @plugindesc   An rudimentary ammo system
 * @author 2018        Jake Weston
 *
 * @param xxxxx      //name of a parameter you want the user to edit
 * @desc yyyyy       //short description of the parameter
 * @default zzzzz    // set default value for the parameter
 
 */
var ammo_system = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    ammo_system.apply(this);
    var weaponId = function () {
        for (var i = 0; i < $dataActors.length; i++) {
            if ($dataActors[i] != null && $dataActors[i]['equips'] == 'Pistol') {
                weapon = $dataWeapons[i];
            }
        }
    };
    function findWeapon() {
        for (var i = 0; i < $dataWeapons.length; i++) {
            if ($dataWeapons[i] != null && $dataWeapons[i]['name'] == 'Pistol') {
                weapon = $dataWeapons[i];
            }
        }
    }
    if (command == "cantShoot") {
        findWeapon();
        //The "Seal" code is 44
        weapon.traits[0].code = 44;
        console.log(weapon);
    }
    if (command == "canShoot") {
        findWeapon();
        // Unseal the skill
        weapon.traits[0].code = 43;
    }
};
