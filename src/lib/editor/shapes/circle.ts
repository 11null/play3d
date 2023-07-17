import { BoxGeometry, BufferGeometry, CircleGeometry, NormalBufferAttributes } from "three";
import { Param } from "../param";
import { ShapeType } from "../shape-type";

export class CreateCircle implements ShapeType {

    /**
     * Create a new instance of {@link CircleGeometry}
     * @param radius Radius of the circle. Expects a `Float`. Default `1`
     * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
     */

    params: Record<string, Param> = {
        radius: {min:0,max:15,val:1},
        segments: {min:3,max:128,val:32},
        thetaStart: {min:0,max:Math.PI*2,val:0},
        thetaLength: {min:0,max:Math.PI*2,val:Math.PI*2},
    };

    build(p: Record<string, number>): BufferGeometry<NormalBufferAttributes> {
        return new CircleGeometry(p.radius,p.segments,p.thetaStart,p.thetaLength)
    }

}