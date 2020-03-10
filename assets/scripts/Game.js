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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    onLoad () {
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        // var self = this;
        // var url = "point1";
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
        const curPosition = e.getLocation()
        const fullW = this.node.width;
        const fullH = this.node.height;

        const p = this.node.convertToNodeSpaceAR(curPosition);

        this.player.getComponent('Player')
        .moveAction(p)

        // console.log(this.player.getComponent('Player'), 88888)
        // console.log(e.getLocation(), 1111)
        // console.log(fullW, fullH, 1111)
        // this.player.getComponent('Player')
        // .moveAction(cc.v2(curPosition.x - fullW / 2, curPosition.y - fullH / 2));
    },

    // update (dt) {},
});
