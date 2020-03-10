// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        this.bar = this.node.getChildByName('bar')
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        var self = this;
        var url = "point1";
        // cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
        //     console.log(spriteFrame, 9999)
        //     spriteFrame.setTexture(new cc.size(1, 1));
        //     var node = new cc.Node("New Sprite");
        //     var sprite = node.addComponent(cc.Sprite);
        //     sprite.spriteFrame = spriteFrame;
        //     node.parent = self.node
        // });
    },

    touchMove (e) {
        const location = e.getLocation()
        const p = this.node.convertToNodeSpaceAR(location);
        this.bar.position = p
        const direction = p.normalize();
        // const x = p.x;
        // const y = p.y;

        // const angle = Math.atan(y / x) * 180 / Math.PI;
        // let curAngle = 0; // 0 -> 360
        // if (y < 0 && x < 0) { // 3
        //     curAngle = angle + 180;
        // } else if (y > 0 && x < 0) { // 2
        //     curAngle = angle + 180;
        // } else if (y < 0 && x > 0) { // 4
        //     curAngle = angle + 360;
        // } else { // 1
        //     curAngle = angle;
        // }
        this.player.getComponent('Player').moveToAngle(direction);
        // .moveAction(p)

        // console.log(this.player.getComponent('Player'), 88888)
        // console.log(e.getLocation(), 1111)
        // console.log(fullW, fullH, 1111)
        // this.player.getComponent('Player')
        // .moveAction(cc.v2(curPosition.x - fullW / 2, curPosition.y - fullH / 2));
    },

    touchEnd() {
        this.bar.position = cc.v2(0, 0);
    }
});
