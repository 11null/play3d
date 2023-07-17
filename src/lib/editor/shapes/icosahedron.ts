import { BufferGeometry, IcosahedronGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateIcosahedron implements ShapeType {

    /**
     * Create a new instance of {@link IcosahedronGeometry}
     * @param radius Expects a `Float`. Default `1`
     * @param detail Setting this to a value greater than 0 adds more vertices making it no longer an icosahedron.
     *               When detail is greater than 1, it's effectively a sphere. Expects a `Integer`. Default `0`
     */

    params: Record<string, Param> = {
        radius: {min:0,max:15,val:1},
        detail: {min:0,max:15,step:1,val:0},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new IcosahedronGeometry(p.radius,p.detail)
    }

}