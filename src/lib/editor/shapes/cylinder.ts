import { BufferGeometry, CylinderGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateCylinder implements ShapeType {

    /**
     * Create a new instance of {@link CylinderGeometry}
     * @param radiusTop Radius of the cylinder at the top. Default `1`
     * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
     * @param height Height of the cylinder. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
     */

    params: Record<string, Param> = {
        radiusTop:{min:0,max:10,val:1},
        radiusBottom:{min:0,max:10,val:1},
        height: {min:0,max:15,val:1},
        radialSegments:{min:1,max:64,val:32},
        heightSegments:{min:1,max:16,val:1},
        openEnded:{val:false},
        thetaStart:{min:0,max:Math.PI*2,val:0},
        thetaLength:{min:0,max:Math.PI*2,val:2*Math.PI},
    };

    build(p: Record<string, number|boolean|any>): BufferGeometry<NormalBufferAttributes> {
        return new CylinderGeometry(p.radiusTop,p.radiusBottom,p.height,p.radialSegments,p.heightSegments,p.openEnded,p.thetaStart,p.thetaLength)
    }

}