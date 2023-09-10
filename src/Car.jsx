import React from 'react'
import { useGLTF } from '@react-three/drei'
import car from './assets/car.glb'
import { useSelector } from 'react-redux'

export function Model(props) {
  const { nodes, materials } = useGLTF(car)
  const { carColor, chrome, wheel, plastic } = useSelector(state => state.car)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh material-color={carColor} geometry={nodes.Object_2.geometry} material={materials.Car_Paint} />
        <mesh material-color={carColor} geometry={nodes.Object_3.geometry} material={materials['Car_Paint.001']} />
        <mesh material-color={carColor} geometry={nodes.Object_4.geometry} material={materials.Car_paint} />
        
        <mesh  geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
        <mesh  geometry={nodes.Object_6.geometry} material={materials['Material.004']} />
        <mesh  geometry={nodes.Object_7.geometry} material={materials['Material.005']} />
        <mesh material-color={chrome} geometry={nodes.Object_8.geometry} material={materials['Material.006']} />
        <mesh  geometry={nodes.Object_9.geometry} material={materials.Material_2125663076} />
        <mesh  geometry={nodes.Object_10.geometry} material={materials.Material_2125663081} />
        <mesh  geometry={nodes.Object_11.geometry} material={materials.Material_2125663085} />
        <mesh  geometry={nodes.Object_12.geometry} material={materials.Material_2125663089} />
        <mesh  geometry={nodes.Object_13.geometry} material={materials.Red_car_lights_glass} /> 
        {/* Задние фарые */}
        <mesh material-color={carColor} geometry={nodes.Object_14.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_15.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_16.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_17.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_18.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_19.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_20.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_21.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_22.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_23.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_24.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_25.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_26.geometry} material={materials.Car_Paint_With_Flakes} />
        <mesh material-color={carColor} geometry={nodes.Object_27.geometry} material={materials.Car_Paint_With_Flakes} /> 

        <mesh material-color={chrome} geometry={nodes.Object_28.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_29.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_30.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_31.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_32.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_33.geometry} material={materials.Car_chrome} />
        <mesh  material-color={chrome} geometry={nodes.Object_34.geometry} material={materials.Car_chrome} /> 

        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} /> 
        {/* задние фары */}
        
        <mesh material-color={plastic} geometry={nodes.Object_35.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_36.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_37.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_38.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_39.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_40.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_41.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_42.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_43.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_44.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_45.geometry} material={materials.Car_plastic_dark} />
        <mesh material-color={plastic} geometry={nodes.Object_46.geometry} material={materials.Car_plastic_dark} /> 

        <mesh geometry={nodes.Object_47.geometry} material={materials.Glass} /> 
        <mesh geometry={nodes.Object_48.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Glass} />
        {/* Все стекла */}
        
        <mesh  geometry={nodes.Object_50.geometry} material={materials.Material_2125663072} /> 
        {/* Рамки для номеров */}
        <mesh   geometry={nodes.Object_51.geometry} material={materials.Material_2125663073} /> 
        {/* Внутри номера цвет */} 
        <mesh   geometry={nodes.Object_52.geometry} material={materials.Material_2125663074} />
        {/* Задние нижние фары */}
        <mesh geometry={nodes.Object_53.geometry} material={materials.Material_2125663075} /> 
        {/* Дворники */}
        <mesh   geometry={nodes.Object_54.geometry} material={materials.Material_2125663077} /> 
        <mesh  geometry={nodes.Object_55.geometry} material={materials.Material_2125663077} />
        {/* Боковые стекла, поворники */}
        <mesh  geometry={nodes.Object_56.geometry} material={materials.Material_2125663092} /> 
        <mesh   geometry={nodes.Object_57.geometry} material={materials.Material_2125663092} />
        {/* Тормоза */}
        <mesh  geometry={nodes.Object_58.geometry} material={materials.Material_2125663093} /> 
        <mesh  geometry={nodes.Object_59.geometry} material={materials.Material_2125663093} />
        {/* Суппорта */}
      </group>
    </group>
  )
}

useGLTF.preload('/car.glb')