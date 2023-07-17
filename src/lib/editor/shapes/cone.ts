import { BufferGeometry, ConeGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateCone implements ShapeType {

    /**
     * Create a new instance of {@link ConeGeometry}
     * @param radius Radius of the cone base. Expects a `Float`. Default `1`
     * @param height Height of the cone. Expects a `Float`. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cone. Expects a `Integer`. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cone. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the base of the cone is open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete cone_.
     */

    params: Record<string, Param> = {
        radius:{min:0,max:10,val:1},
        height: {min:0,max:15,val:1},
        heightSegments:{min:1,max:16,val:1},
        radialSegments:{min:1,max:64,val:32},
        openEnded:{val:false},
        thetaStart:{min:0,max:Math.PI*2,val:0},
        thetaLength:{min:0,max:Math.PI*2,val:2*Math.PI},
    };

    build(p: Record<string, number|boolean|any>): BufferGeometry<NormalBufferAttributes> {
        return new ConeGeometry(p.radius,p.height,p.radialSegments,p.heightSegments,p.openEnded,p.thetaStart,p.thetaLength)
    }

}