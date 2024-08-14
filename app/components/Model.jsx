import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF, useScroll, OrbitControls} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

useGLTF.preload("/flamingo.glb")

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF('/flamingo.glb');
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    actions['flamingo_flyA_'].play(); // Play the animation
    console.log(actions);
    
  }, []);

  useFrame(() => {
    // Control the animation playback based on the scroll offset
    actions['flamingo_flyA_'].time = (actions['flamingo_flyA_'].getClip().duration * scroll.offset) / 1;
       // Rotate the model based on scroll
       if (group.current) {
        group.current.rotation.y = scroll.offset * Math.PI * 0.5; // Rotate the model around the Y-axis
      }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
      
    </group>
  );
}