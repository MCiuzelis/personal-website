import { BentPlaneGeometry, MeshSineMaterial } from '../utils/geometry'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bentPlaneGeometry: any
      meshSineMaterial: any
    }
  }
}