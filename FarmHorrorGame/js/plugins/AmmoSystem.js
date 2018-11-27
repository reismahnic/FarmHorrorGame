/*:
 * @plugindesc   An rudimentary ammo system.
 * @author 2018        Jake Weston
 * @help
    This plugin uses the following commands:
    cantShoot: Seals the specified weapon's fire command
    canShoot: Unseals the specified weapon's fire command

    The commands will not work if the name of the weapon and
    the name after "Fire " are not the same
 
 */
var remove_level = Window_Base.prototype.drawActorLevel;
Window_Base.prototype.drawActorLevel = function (actor, x, y) {
};
var ammo_system = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    ammo_system.apply(this);
    function findWeapon(name) {
        for (var i = 0; i < $dataWeapons.length; i++) {
            if ($dataWeapons[i] != null && $dataWeapons[i]['name'] == name) {
                return $dataWeapons[i];
            }
        }
    }
    //Create the weapon to shoot
    var weapon = findWeapon(args[0]);
    if (command == "cantShoot") {
        //The "Seal" code is 44
        weapon.traits[0].code = 44;
        console.log(weapon);
    }
    if (command == "canShoot") {
        // Unseal the skill
        weapon.traits[0].code = 43;
    }
};
