import {  SphereGeometry } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateSphere implements ShapeType {

    /*
     * @param radius Sphere radius. Expects a `Float`. Default `1`
     * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
     * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
     * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
     * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
     * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
     * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
     * */

    params : Record<string,Param> = {
        radius:{min:0,max:10,val:2},
        widthSegments:{min:1,max:128,val:32},
        heightSegments:{min:1,max:64,val:16},
        phiStart:{min:0,max:Math.PI*2,val:0},
        phiLength:{min:0,max:Math.PI*2,val:Math.PI*2},
        thetaStart:{min:0,max:Math.PI*2,val:0},
        thetaLength:{min:0,max:Math.PI*2,val:Math.PI},
    }

    build(p:Record<string,number>): SphereGeometry {
        return new SphereGeometry(p.radius,p.widthSegments,p.heightSegments,p.phiStart,p.phiLength,p.thetaStart,p.thetaLength)
    }
}