import { BufferGeometry, NormalBufferAttributes, OctahedronGeometry } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateOctahedron implements ShapeType {

    /**
     * Create a new instance of {@link OctahedronGeometry}
     * @param radius Radius of the octahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than zero add vertices making it no longer an octahedron. Expects a `Integer`. Default `0`
     */

    params: Record<string, Param> = {
        radius: {min:0,max:15,val:1},
        detail: {min:0,max:15,step:1,val:0},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new OctahedronGeometry(p.radius,p.detail)
    }

}