
import { _decorator, Component, Button, Node, v3, Vec3, EventTarget} from 'cc';
import { nodetest } from './nodetest';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

/**
 * Predefined variables
 * Name = buttonCtrl
 * DateTime = Fri Feb 11 2022 10:58:10 GMT+0800 (中国标准时间)
 * Author = lsp430
 * FileBasename = buttonCtrl.ts
 * FileBasenameNoExtension = buttonCtrl
 * URL = db://assets/script/buttonCtrl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('buttonCtrl')
export class buttonCtrl extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(Number)
    serializableDummy = 0;

    onEnable () {
        eventTarget.on('setHorPos_btn_event', this.setBtnHorPos, this);
        eventTarget.on('setnodetest_event', nodetest.setNodeHorPos, nodetest);
    }

    onDisable () {
        eventTarget.off('setHorPos_btn_event', this.setBtnHorPos, this);
        eventTarget.off('setnodetest_event', nodetest.setNodeHorPos, nodetest);
    }

    start () {
        // [3]
        // this.button.node.setPosition(new Vec3(30,300,0));
    }

    update (deltaTime: number) {

    }

    clicked(){
        this.serializableDummy += 10;
        console.log("rer ",this.serializableDummy)
        

        // nodetest.setTimeout(() => {
            
        // }, 3);

        eventTarget.emit('setHorPos_btn_event');
        eventTarget.emit('setnodetest_event');
    }

    setBtnHorPos(){
        console.log("buttonCtrl setBtnHorPos test ")
        this.node.position = new Vec3(30,30,0);
        this.node.setPosition(new Vec3(30,30,0));
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
