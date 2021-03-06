var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "Fuel":
                            var yaySound = createjs.Sound.play("life");
                            yaySound.volume = 0.2;
                            managers.Game.scoreBoard.Score += 100;
                            if (managers.Game.HighScore <= managers.Game.scoreBoard.Score) {
                                managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                managers.Game.HighScore = managers.Game.scoreBoard.HighScore;
                            }
                            break;
                        case "Rock":
                            var thunderSound = createjs.Sound.play("explosion");
                            thunderSound.volume = 0.2;
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map