import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { GameView } from "../game-view";
import { ShapeType } from "./shape-type";
import { CreateSphere } from "./shapes/sphere";

export class ShapeEditor extends GameView {
    gui = new GUI();
    args : Record<string,number> = {}
    shape: ShapeType = new CreateSphere()
    mesh : THREE.Mesh = new THREE.Mesh(this.shape.build(this.args),new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true }))

    refresh = () => {
        this.mesh.geometry = this.shape.build(this.args)
        this.render()
    }

    create() {
        let gui = this.gui.addFolder("Camera")
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 8;
        this.camera.position.y = 3;
        
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement);

        this.scene.add(this.mesh)

        let f = gui.addFolder('Pos')
        f.add(this.camera.position,'x',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'y',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'z',-14,14).onChange(this.refresh);
        f = gui.addFolder('Rotate')
        f.add(this.camera.rotation,'x',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'y',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'z',-Math.PI*2,Math.PI*2).onChange(this.refresh);

        f = this.gui.addFolder("Shape")
        for (let k in this.shape.params) {
            this.args[k] = this.shape.params[k].val
            f.add(this.args,k,this.shape.params[k].min,this.shape.params[k].max).onChange(this.refresh)
        }
        
        this.refresh()
    }
}