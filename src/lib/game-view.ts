import * as THREE from 'three'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export class GameView {

    renderer : THREE.Renderer = new THREE.WebGLRenderer()
    scene! : THREE.Scene;
    camera! : THREE.Camera;
    constructor() {

    }
    
    refresh = ()=> {
        this.render()
    }

    test() {
        const gui = new GUI({title:"Camera"});


        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 8;
        this.camera.position.y = 3;
        const obj = new THREE.Mesh( new THREE.SphereGeometry(75, 16, 8, 0, 2, 1, 1.2), new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add(obj);
        this.scene.add(cube);
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement);

        let f = gui.addFolder('Pos')
        f.add(this.camera.position,'x',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'y',-14,14).onChange(this.refresh);
        f.add(this.camera.position,'z',-14,14).onChange(this.refresh);
        f = gui.addFolder('Rotate')
        f.add(this.camera.rotation,'x',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'y',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        f.add(this.camera.rotation,'z',-Math.PI*2,Math.PI*2).onChange(this.refresh);
        
        gui.addColor(material,'color').onChange(this.refresh)

        this.render()
    }

    render() {
        this.renderer.render(this.scene,this.camera);
    }
}