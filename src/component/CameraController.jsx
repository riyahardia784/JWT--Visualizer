import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function CameraController({ currentStep }) {
  const { camera } = useThree();

  const targetPosition = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const targetZoom = useRef(35);

  useFrame(() => {
    switch (currentStep) {

      // ================= INPUT PANNAL =================
       case 0:
        
        targetPosition.current.set(-80, 2.2, 9);
        targetLookAt.current.set(-80, 1, 0);
         targetZoom.current = 60;
        break;

      // ================= HEADER =================
      case 1:
        // Header on left, InfoCard on right
        targetPosition.current.set(-18, 2.2, 9);
        targetLookAt.current.set(-18, 1, 0);
         targetZoom.current = 60;
        break;

      // ================= PAYLOAD =================
      case 2:
        targetPosition.current.set(0.20,2.2,9);
        targetLookAt.current.set(0.20,1,0);
         targetZoom.current = 60;
        break;

      // ================= SIGNATURE =================
      case 3:
        targetPosition.current.set(18, 2.2,9 );
        targetLookAt.current.set(18,1, 0);
         targetZoom.current = 60;
        break;

        // ================= JWT BULIDER =================
        case 4:
        targetPosition.current.set(36, 2.2,9 );
        targetLookAt.current.set(36,2, 0);
         targetZoom.current = 60;
        break;

        case 5:
        targetPosition.current.set(0, 8, 28);
        targetLookAt.current.set(0, 8, 0);
        break;

      // ================= OVERVIEW =================
      default:
        targetPosition.current.set(0, 3.5, 38);
        targetLookAt.current.set(0, 1, 0);
        break;
    }

    camera.position.lerp(targetPosition.current, 0.08);

    camera.lookAt(
      new THREE.Vector3().lerpVectors(
        camera.getWorldDirection(new THREE.Vector3()),
        targetLookAt.current,
        0.08
      )
    );

    camera.lookAt(targetLookAt.current);

    camera.position.lerp(targetPosition.current, 0.08);

// Smooth camera zoom
camera.fov = THREE.MathUtils.lerp(
  camera.fov,
  targetZoom.current,
  0.08
);

camera.updateProjectionMatrix();

camera.lookAt(
  new THREE.Vector3().lerpVectors(
    camera.getWorldDirection(new THREE.Vector3()),
    targetLookAt.current,
    0.08
  )
);

camera.lookAt(targetLookAt.current);
  });

  return null;
}

export default CameraController;