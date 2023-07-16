import { BufferGeometry } from "three";
import { Param } from "./param";

export interface ShapeType {
    params: Record<string,Param>

    build(p:Record<string,number>) : BufferGeometry
}