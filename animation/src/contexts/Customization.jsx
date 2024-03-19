import { createContext, useContext, useState } from "react";

const Customization = createContext({})

export const CameraModes = {
    'FREE':'FREE',
    'HEAD':'HEAD',
    'TOP':'TOP',
    'BOTTOM':'BOTTOM',
}

export const CustomizationProvider =({children})=>{
    
    const [cameraMode, setCameraMode] = useState('CameraModes.FREE')
    
    return(
     <Customization.Provider value={{
        cameraMode, setCameraMode
    }}>
        {children}
    </Customization.Provider>
    )
}

export const useCustomization =()=>{
    return useContext(Customization);
}