// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
        bodyPrefab: {
            default: null,
            type: cc.Prefab
        },
        // direction: 'right',
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

    setMoveAction: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
        var callback = cc.callFunc(this.playJumpSound, this);
        // 不断重复
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    rotateAction() {
        const action = cc.rotateBy(2, 360);
        return action;
    },

    moveToAngle(angle) {

        // 



        return;

        this.moveAngle = angle;
        return;
        const curAngle = this.node.angle;
        const r = 360 / 8;
        const detal = Math.abs(curAngle - angle);
        if (detal > r && detal <= 2 * r) {
            this.moveAngle = r;
            setTimeout(() => {
                this.moveAngle = angle;
            })
        } else if (detal > 2 * r  && detal <= 3 * r) {
            this.moveAngle = r;
            setTimeout(() => {
                this.moveAngle = 2 * r;
                setTimeout(() => {
                    this.moveAngle = angle;
                })
            })
        } else if (detal > 3 * r && detal <= 4 * r) {
            this.moveAngle = r;
            setTimeout(() => {
                this.moveAngle = 2 * r;
                setTimeout(() => {
                    this.moveAngle = 3 * r;
                    setTimeout(() => {
                        this.moveAngle = angle;
                    })
                })
            })
        } else if (detal > 4 * r) {

        }
    },

    moveAction(gesturePosition) {
        // console.log(gesturePosition, 999)
        const position = this.node.position;

        const detalX = gesturePosition.x - position.x;
        const detalY = gesturePosition.y - position.y;


        // console.log(detalX, detalY, 1111)
        // console.log(Math.atan(gesturePosition.y / gesturePosition.x) * 180 / Math.PI, 2222)

        const angle = Math.atan(detalY / detalX) * 180 / Math.PI;

        const preAngle = this.moveAngle;
        let curAngle = 0;
        // console.log(angle, 888)
        if (detalY < 0 && detalX < 0) {
            curAngle = angle + 180;
        } else if (detalY > 0 && detalX < 0) {
            curAngle = angle + 180;
        } else if (detalY < 0 && detalX > 0) {
            curAngle = angle;
        } else {
            curAngle = angle;
        }

        this.moveAngle = curAngle;
        
        // console.log(this.moveAngle, 9987)


        // console.log(this.node.position, 8888)
        
    },

    start () {

    },

    changeBodyPosition () {
        const nodeH = this.node.height;
        const nodeW = this.node.width;
        this.body.x = -20;
        this.body.zIndex = -1;
        console.log(this.body)
    },

    onLoad() {
        this.bodySections = [];
        let bodyNode = new cc.Node();
        for(let i = 0; i < 10; i++) {
            const bodySection = cc.instantiate(this.bodyPrefab);
            bodySection.zIndex = -1;
            bodySection.x = -(i + 1) * 20
            bodyNode.addChild(bodySection);
            this.bodySections.push(bodySection);
        }
        this.node.addChild(bodyNode);
        this.moveAngle = 0;
        // this.node.x = 200;
        // this.node.y = 0;

        // this.changeBodyPosition();

        // this.moveAngle = 30 * Math.PI / 180;
        // console.log(this.moveAngle, 9999)
        // 初始化跳跃动作
        // this.moveAction = this.setMoveAction();
        // this.node.runAction(this.moveAction);

        // 初始化键盘输入监听

        // console.log(this.node.getPosition(), 99777)
        // this.node.runAction(this.rotateAction());
    },

    update (dt) {

        
        const curAngle = this.node.angle;
        // console.log(this.moveAngle, curAngle, 999999)
        if (this.moveAngle - curAngle > 90) {
            // this.moveAngle = 90;
        }

        const radius = 25;
        

        return;
        // console.log(this.moveAngle, 99999999)
        const angle = this.moveAngle * Math.PI / 180;
        const xSpeed = Math.cos(angle) * this.speed;
        const ySpeed = Math.sin(angle) * this.speed;
        // const head = this.node.getChildByName("head")
        this.node.x += xSpeed * dt;
        this.node.y += ySpeed * dt;
        this.node.angle = this.moveAngle;
        // console.log(this.moveAngle, 9999)
        this.bodySections.forEach((node, i) => {
            // node.angle = this.moveAngle - i;
        })
    },
});
