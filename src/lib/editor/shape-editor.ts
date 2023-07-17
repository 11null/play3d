import * as THREE from "three";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { GameView } from "../game-view";
import { ShapeType } from "./shape-type";
import { CreateSphere } from "./shapes/sphere";
import { CreateBox } from "./shapes/box";
import { CreateCircle } from "./shapes/circle";
import { CreateCone } from "./shapes/cone";
import { CreateCylinder } from "./shapes/cylinder";
import { CreateDodecahedron } from "./shapes/dodecahedron";
import { CreateIcosahedron } from "./shapes/icosahedron";
import { CreateOctahedron } from "./shapes/octahedron";
import { CreateEdges } from "./shapes/edges";

export class ShapeEditor extends GameView {
    gui = new GUI();
    _args : Record<number,Record<string,number>> = {}
    shapes: ShapeType[] = [
        new CreateBox(),
        new CreateSphere(),
        new CreateCircle(),
        new CreateCone(),
        new CreateCylinder(),
        new CreateDodecahedron(),
        new CreateIcosahedron(),
        new CreateOctahedron(),
    ]
    edges = new CreateEdges()
    shape = 0
    mesh : THREE.Mesh = new THREE.Mesh(this.shapes[this.shape].build(this.args(this.shape)),new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true }))

    refresh = () => {
        this.mesh.geometry = this.shapes[this.shape].build(this.args(this.shape))
        this.render()
    }

    args(shape:number) : Record<string,number|boolean|any> {
        if (!this._args[shape]) this._args[shape] = {}
        return this._args[shape]
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
        gui.close()

        let f = gui.addFolder('Pos')
        f.add(this.camera.position,'x',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'y',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'z',-14,14).onChange(this.refresh);
        f = gui.addFolder('Rotate')
        f.add(this.camera.rotation,'x',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'y',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'z',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        let f1 = this.gui.addFolder("Shapes")
        f1.add(this,'shape',0,this.shapes.length-1,1).onChange(this.refresh)
        f1.close()

        for (let n=0;n<this.shapes.length;n++) {
            f = f1.addFolder("Shape #"+n)
            f.close()
            const shape = this.shapes[n]
            for (let k in shape.params) {
                this.args(n)[k] = shape.params[k].val
                f.add(this.args(n),k,shape.params[k].min,shape.params[k].max,shape.params[k].step).onChange(this.refresh)
            }
            
        }
        f1 = this.gui.addFolder("Edges")
        
        this.refresh()
    }
}