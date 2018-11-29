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
    function findSkill(name) {
        for (var i = 0; i < $dataSkills.length; i++) {
            if ($dataSkills[i] != null && $dataSkills[i]['name'] == ("Fire " + name)) {
                return i;
            }
        }
    }
    if (command == "cantShoot") {
        //Create the weapon
        var skillId = findSkill(args[0]);
        //The "Seal" code is 44
        $dataClasses[5].traits[skillId].code = 44;
    }
    if (command == "canShoot") {
        //Create the weapon 
        var skillId = findSkill(args[0]);
        // Unseal the skill
        $dataClasses[5].traits[skillId].code = 43;
    }
};
