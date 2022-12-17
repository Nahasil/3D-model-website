/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/windcharacter.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="char_grp">
          <group name="cs_grp">
            <mesh name="cs_arrow_cross_solid" geometry={nodes.cs_arrow_cross_solid.geometry} material={materials['cs_solid_green.002']} position={[-1.2, -1.33, 0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.08} />
            <mesh name="cs_circle_ik" geometry={nodes.cs_circle_ik.geometry} material={materials['default.008']} position={[-0.27, -0.11, 0.05]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.1} />
            <mesh name="cs_ctrl_ik_solid_blue" geometry={nodes.cs_ctrl_ik_solid_blue.geometry} material={materials['cs_solid_blue.002']} position={[5.16, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_ctrl_ik_solid_red" geometry={nodes.cs_ctrl_ik_solid_red.geometry} material={materials['cs_solid_red.002']} position={[4.96, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_cube_solid" geometry={nodes.cs_cube_solid.geometry} material={materials['default.009']} position={[-3.95, 0, 0]} />
            <mesh name="cs_cube_solid_offset" geometry={nodes.cs_cube_solid_offset.geometry} material={materials['default.010']} position={[-4.35, 0, 0]} />
            <mesh name="cs_fk" geometry={nodes.cs_fk.geometry} material={materials['default.011']} position={[-1.6, 0.82, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_plane_4_fill" geometry={nodes.cs_plane_4_fill.geometry} material={materials['cs_buttons.002']} position={[1.34, 0.51, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_pos_solid" geometry={nodes.cs_pos_solid.geometry} material={materials['cs_solid_green.002']} position={[-2.07, -1.29, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_pos_solid_eye_offset_blue" geometry={nodes.cs_pos_solid_eye_offset_blue.geometry} material={materials['cs_solid_blue.002']} position={[-2.58, -1.29, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.25} />
            <mesh name="cs_pos_solid_eye_offset_red" geometry={nodes.cs_pos_solid_eye_offset_red.geometry} material={materials['cs_solid_red.002']} position={[-3.08, -1.29, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.25} />
            <mesh name="cs_solid_arrow_twist_blue" geometry={nodes.cs_solid_arrow_twist_blue.geometry} material={materials['cs_solid_blue.002']} position={[2.27, -0.46, 0.05]} scale={0.25} />
            <mesh name="cs_solid_arrow_twist_red" geometry={nodes.cs_solid_arrow_twist_red.geometry} material={materials['cs_solid_red.002']} position={[1.86, -0.46, 0.05]} scale={0.25} />
            <mesh name="cs_solid_bar_01" geometry={nodes.cs_solid_bar_01.geometry} material={materials['cs_solid_green.002']} position={[-1.92, -0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_solid_bar_blue" geometry={nodes.cs_solid_bar_blue.geometry} material={materials['cs_solid_blue.002']} position={[-6.03, -0.42, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_solid_bar_red" geometry={nodes.cs_solid_bar_red.geometry} material={materials['cs_solid_red.002']} position={[-4.87, -0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
            <mesh name="cs_solid_circle_01" geometry={nodes.cs_solid_circle_01.geometry} material={materials['cs_solid_green.002']} position={[0.03, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_circle_02" geometry={nodes.cs_solid_circle_02.geometry} material={materials['cs_solid_grey.002']} position={[0.52, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_circle_02_blue" geometry={nodes.cs_solid_circle_02_blue.geometry} material={materials['cs_solid_blue.002']} position={[0.88, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_circle_02_green" geometry={nodes.cs_solid_circle_02_green.geometry} material={materials['cs_solid_green.002']} position={[0.33, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_circle_02_red" geometry={nodes.cs_solid_circle_02_red.geometry} material={materials['cs_solid_red.002']} position={[0.7, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <group name="cs_solid_circle_ik_blue" position={[-4.07, -0.48, 0.05]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.13}>
              <mesh name="cs_solid_ik005" geometry={nodes.cs_solid_ik005.geometry} material={materials['cs_solid_blue.002']} />
              <mesh name="cs_solid_ik005_1" geometry={nodes.cs_solid_ik005_1.geometry} material={materials['cs_solid_black.002']} />
            </group>
            <group name="cs_solid_circle_ik_red" position={[-3.23, -0.48, 0.05]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.13}>
              <mesh name="cs_solid_ik006" geometry={nodes.cs_solid_ik006.geometry} material={materials['cs_solid_red.002']} />
              <mesh name="cs_solid_ik006_1" geometry={nodes.cs_solid_ik006_1.geometry} material={materials['cs_solid_black.002']} />
            </group>
            <mesh name="cs_solid_circle_squashed_blue" geometry={nodes.cs_solid_circle_squashed_blue.geometry} material={materials['cs_solid_blue.002']} position={[0.1, -1.15, 0.6]} scale={0.37} />
            <mesh name="cs_solid_circle_squashed_green" geometry={nodes.cs_solid_circle_squashed_green.geometry} material={materials['cs_solid_green.002']} position={[-0.43, -1.15, 0.6]} scale={0.37} />
            <mesh name="cs_solid_circle_squashed_red" geometry={nodes.cs_solid_circle_squashed_red.geometry} material={materials['cs_solid_red.002']} position={[0.65, -1.15, 0.6]} scale={0.37} />
            <mesh name="cs_solid_eye_aim_blue" geometry={nodes.cs_solid_eye_aim_blue.geometry} material={materials['cs_solid_blue.002']} position={[-1.96, -0.04, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_eye_aim_global" geometry={nodes.cs_solid_eye_aim_global.geometry} material={materials['cs_solid_green.002']} position={[-1.84, -0.09, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_eye_aim_red" geometry={nodes.cs_solid_eye_aim_red.geometry} material={materials['cs_solid_red.002']} position={[-2.08, -0.04, 0.05]} rotation={[0, -1.57, 0]} scale={0.1} />
            <mesh name="cs_solid_eye_blue" geometry={nodes.cs_solid_eye_blue.geometry} material={materials['cs_solid_blue.002']} position={[4.16, -0.51, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.21} />
            <mesh name="cs_solid_eye_red" geometry={nodes.cs_solid_eye_red.geometry} material={materials['cs_solid_red.002']} position={[3.92, -0.51, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.22} />
            <mesh name="cs_solid_eyebrow_blue" geometry={nodes.cs_solid_eyebrow_blue.geometry} material={materials['cs_solid_blue.002']} position={[2.68, -0.46, 0.05]} scale={0.25} />
            <mesh name="cs_solid_eyebrow_red" geometry={nodes.cs_solid_eyebrow_red.geometry} material={materials['cs_solid_red.002']} position={[3.08, -0.46, 0.05]} scale={0.25} />
            <group name="cs_solid_fk_blue" position={[-3.71, -0.48, 0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.06}>
              <mesh name="cs_solid_fk_blue004" geometry={nodes.cs_solid_fk_blue004.geometry} material={materials['cs_solid_blue.002']} />
              <mesh name="cs_solid_fk_blue004_1" geometry={nodes.cs_solid_fk_blue004_1.geometry} material={materials['cs_solid_black.002']} />
            </group>
            <group name="cs_solid_fk_red" position={[-2.87, -0.48, 0.05]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.06}>
              <mesh name="cs_solid_fk_blue005" geometry={nodes.cs_solid_fk_blue005.geometry} material={materials['cs_solid_red.002']} />
              <mesh name="cs_solid_fk_blue005_1" geometry={nodes.cs_solid_fk_blue005_1.geometry} material={materials['cs_solid_black.002']} />
            </group>
            <mesh name="cs_solid_plane_2" geometry={nodes.cs_solid_plane_2.geometry} material={materials['cs_solid_green.002']} position={[-1.18, -0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_2_blue" geometry={nodes.cs_solid_plane_2_blue.geometry} material={materials['cs_solid_blue.002']} position={[-0.63, -0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_2_red" geometry={nodes.cs_solid_plane_2_red.geometry} material={materials['cs_solid_red.002']} position={[-0.89, -0.5, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_3" geometry={nodes.cs_solid_plane_3.geometry} material={materials['cs_solid_green.002']} position={[0.98, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_3_blue" geometry={nodes.cs_solid_plane_3_blue.geometry} material={materials['cs_solid_blue.002']} position={[1.36, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_3_red" geometry={nodes.cs_solid_plane_3_red.geometry} material={materials['cs_solid_red.002']} position={[1.15, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_5_blue" geometry={nodes.cs_solid_plane_5_blue.geometry} material={materials['cs_solid_blue.002']} position={[1.61, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_solid_plane_5_red" geometry={nodes.cs_solid_plane_5_red.geometry} material={materials['cs_solid_red.002']} position={[1.52, -0.51, 0.05]} rotation={[0, -1.57, 0]} scale={0.05} />
            <mesh name="cs_solid_pupil_blue" geometry={nodes.cs_solid_pupil_blue.geometry} material={materials['cs_solid_blue.002']} position={[4.72, -0.51, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.21} />
            <mesh name="cs_solid_pupil_red" geometry={nodes.cs_solid_pupil_red.geometry} material={materials['cs_solid_red.002']} position={[4.48, -0.51, 0.05]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.22} />
            <mesh name="cs_solid_torus_04_blue" geometry={nodes.cs_solid_torus_04_blue.geometry} material={materials['cs_solid_blue.002']} position={[-2.53, -0.48, 0.05]} scale={0.1} />
            <mesh name="cs_solid_torus_04_red" geometry={nodes.cs_solid_torus_04_red.geometry} material={materials['cs_solid_red.002']} position={[-2.61, -0.48, 0.05]} scale={0.1} />
            <mesh name="cs_solid_torus_blue" geometry={nodes.cs_solid_torus_blue.geometry} material={materials['cs_solid_blue.002']} position={[-3.84, -1.28, 0.05]} scale={0.1} />
            <mesh name="cs_solid_torus_green" geometry={nodes.cs_solid_torus_green.geometry} material={materials['cs_solid_green.002']} position={[-4.09, -1.28, 0.05]} scale={0.1} />
            <mesh name="cs_solid_torus_red" geometry={nodes.cs_solid_torus_red.geometry} material={materials['cs_solid_red.002']} position={[-3.6, -1.28, 0.05]} scale={0.1} />
            <mesh name="cs_solid_triangle" geometry={nodes.cs_solid_triangle.geometry} material={materials['cs_solid_green.002']} position={[-0.28, -0.47, 0.05]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.22} />
            <mesh name="cs_sphere_solid" geometry={nodes.cs_sphere_solid.geometry} material={materials['default.012']} position={[-4.75, 0, 0]} />
            <mesh name="cs_sphere_solid_offset" geometry={nodes.cs_sphere_solid_offset.geometry} material={materials['default.013']} position={[-5.18, 0, 0]} />
            <mesh name="cs_user_c_shoulderl" geometry={nodes.cs_user_c_shoulderl.geometry} material={materials['default.014']} position={[0.08, 1.4, 0.06]} rotation={[-Math.PI, -1.54, 0]} scale={0.08} />
            <mesh name="cs_user_c_shoulderr" geometry={nodes.cs_user_c_shoulderr.geometry} material={materials['default.015']} position={[-1.73, 0.13, -0.12]} />
          </group>
          <group name="rig">
            <primitive object={nodes.c_pos} />
            <primitive object={nodes.c_arms_polel} />
            <primitive object={nodes.c_arms_poler} />
            <primitive object={nodes.c_foot_ikr} />
            <primitive object={nodes.c_leg_poler} />
            <primitive object={nodes.c_foot_ikl} />
            <primitive object={nodes.c_leg_polel} />
            <primitive object={nodes.c_hand_ikr} />
            <primitive object={nodes.c_hand_ikl} />
            <primitive object={nodes.root_refx} />
            <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials['Body_m.002']} skeleton={nodes.Body.skeleton} />
            <skinnedMesh name="Hair" geometry={nodes.Hair.geometry} material={materials['Hair_m.002']} skeleton={nodes.Hair.skeleton} />
            <skinnedMesh name="polySurface3" geometry={nodes.polySurface3.geometry} material={materials['polySurface3.002']} skeleton={nodes.polySurface3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/windcharacter.glb')