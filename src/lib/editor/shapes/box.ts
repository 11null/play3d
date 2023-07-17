import { BoxGeometry, BufferGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateBox implements ShapeType {

    /**
     * Create a new instance of {@link BoxGeometry}
     * @param width Width; that is, the length of the edges parallel to the X axis. Optional; Expects a `Float`. Default `1`
     * @param height Height; that is, the length of the edges parallel to the Y axis. Optional; Expects a `Float`. Default `1`
     * @param depth Depth; that is, the length of the edges parallel to the Z axis. Optional; Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional; Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional; Expects a `Integer`. Default `1`
     * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional; Expects a `Integer`. Default `1`
     */

    params: Record<string, Param> = {
        width: {min:0,max:15,val:1},
        height: {min:0,max:15,val:1},
        depth: {min:0,max:15,val:1},
        widthSegments: {min:0,max:15,val:1},
        heightSegments: {min:0,max:15,val:1},
        depthSegments: {min:0,max:15,val:1},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new BoxGeometry(p.width,p.height,p.depth,p.widthSegments,p.heightSegments,p.depthSegments)
    }

}