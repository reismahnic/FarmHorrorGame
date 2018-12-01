/*:
 * @plugindesc   Removes certain UI elements.
 * @author 2018        Jake Weston
 * @help
 
 */
var remove_level = Window_Base.prototype.drawActorLevel;
Window_Base.prototype.drawActorLevel = function (actor, x, y) {
};
Window_Base.prototype.drawActorMp = function (actor, x, y, width) {
};
Window_Base.prototype.drawActorTp = function (actor, x, y, width) {
};
// Remove item categories
Window_ItemCategory.prototype.maxCols = function () {
    return 1;
};
Scene_Shop.prototype.createSellWindow = function () {
};
Window_ShopCommand.prototype.maxCols = function () {
    return 2;
};
Window_ShopCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.buy, 'buy');
    this.addCommand(TextManager.cancel, 'cancel');
};
