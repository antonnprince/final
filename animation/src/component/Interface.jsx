import { Affix, Button, Group, Stack } from "@mantine/core";
//import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { CameraModes, useCustomization } from "../contexts/Customization";

const Interface = () => {
    const {cameraMode, setCameraMode} = useCustomization();
  //const { animations, animationIndex, setAnimationIndex } =
    //useCharacterAnimations();
  return (
    <>
    <Affix position={{ top: 50, right: 20 }}>
        <Group>
            {
                Object.keys(CameraModes).map((mode) =>(
                    <Button key={mode} 
                    variant={mode === cameraMode?
                     'filled': 'light'}
                        onClick={()=> setCameraMode(mode)}
                     >
                     {mode}
                     </Button>
                ))
            }

        </Group>
    </Affix>

    
    </>
  );
};

export default Interface;