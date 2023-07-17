import { BufferGeometry, EdgesGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateEdges implements ShapeType {

    /**
     * Create a new instance of {@link EdgesGeometry}
     * @param geometry Any geometry object. Default `null`.
     * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this value. Expects a `Integer`. Default `1` _degree_.
     */

    geometry?: BufferGeometry

    params: Record<string, Param> = {
        thresholdAngle: {min:0,max:15,val:1},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new EdgesGeometry(this.geometry,p.thresholdAngle)
    }

}