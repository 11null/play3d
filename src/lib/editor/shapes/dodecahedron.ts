import { BufferGeometry, DodecahedronGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateDodecahedron implements ShapeType {

    /**
     * Create a new instance of {@link DodecahedronGeometry}
     * @param radius Radius of the dodecahedron. Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds vertices making it no longer a dodecahedron. Expects a `Integer`. Default `0`
     */

    params: Record<string, Param> = {
        radius: {min:0,max:15,val:1},
        detail: {min:0,max:15,step:1,val:0},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new DodecahedronGeometry(p.radius,p.detail)
    }

}