
import { _decorator, Component, Node, Vec2,Sprite, Vec3, EventTarget, Input, input, KeyCode} from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();
 
@ccclass('nodetest')
export class nodetest extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property
    serializableDummy = 0;
    @property(Number)
    offset_type = -1
    @property(Number)
    offset_num = 50

    @property(Node)
    spriteFrame1: Node;
    @property(Node)
    spriteFrame2: Node;

    onLoad () {
        console.log("onLoad")
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy () {
        console.log("onDestroy")
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onEnable () {
        console.log("onEnable")
        eventTarget.on('setHorPos_event', this.setHorPos, this);
    }

    onDisable () {
        console.log("onDisable")
        eventTarget.off('setHorPos_event', this.setHorPos, this);
    }

    start () {
        // [3]
        
    }

    update (deltaTime: number) {
        // console.log("update test ")
        for (let bgnode of this.node.children) {
            if(bgnode.getPosition().y>200){
                bgnode.setPosition(bgnode.getPosition().x,0);
            }else{
                bgnode.setPosition(bgnode.getPosition().x,bgnode.getPosition().y+=deltaTime*20);
            }
        }
    }

    onKeyDown(event: { keyCode: any; }){
        switch(event.keyCode) {
            case KeyCode.KEY_W:
                this.offset_type = 1;
                this.moveOnY();
                break;
            case KeyCode.KEY_A:
                this.offset_type = -1;
                this.moveOnX();
                break;
            case KeyCode.KEY_S:
                this.offset_type = -1;
                this.moveOnY();
                break;
            case KeyCode.KEY_D:
                this.offset_type = 1;
                this.moveOnX();
                break;
        }
    }

    moveOnX(){
        for (let bgnode of this.node.children) {
            bgnode.setPosition(bgnode.getPosition().x+=this.offset_type*this.offset_num,bgnode.getPosition().y);
        }
    }

    moveOnY(){
        for (let bgnode of this.node.children) {
            bgnode.setPosition(bgnode.getPosition().x,bgnode.getPosition().y+=this.offset_type*this.offset_num);
        }
    }

    setHorPos(){
        console.log("nodetest setHorPos test ")
    }

    static setNodeHorPos(){
        console.log("nodetest setNodeHorPos test ")
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
