import { BufferGeometry, NormalBufferAttributes, PlaneGeometry } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreatePlane implements ShapeType {

    /**
     * Create a new instance of {@link PlaneGeometry}
     * @param width Width along the X axis. Expects a `Float`. Default `1`
     * @param height Height along the Y axis. Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented faces along the width of the sides. Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented faces along the height of the sides. Expects a `Integer`. Default `1`
     */

    params: Record<string, Param> = {
        width: {min:0,max:15,val:1},
        height: {min:0,max:15,val:1},
        widthSegments: {min:0,max:15,val:1},
        heightSegments: {min:0,max:15,val:1},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new PlaneGeometry(p.width,p.height,p.widthSegments,p.heightSegments)
    }

}