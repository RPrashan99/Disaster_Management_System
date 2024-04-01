import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export const GoogleMap = () => {
    const position = {lat: 7.291418, lng: 80.636696};
    return(
        <div className='flex gap-[10px] justify-between items-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto] m-[2%]'>
            <div className='flex item-center justify-center  flex-wrap relative self-stretch w-[95%] lg:h-[100%] md:h-[100%] sm:h-[100%] flex-[0_0_auto] '>        
                <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
                    <div  className= 'overflow-hidden border-l-[20px] border-l-ControllerSec border-b-[20px] rounded-l-[100px] border-b-[#757575] shadow-sm flex  relative self-stretch lg:h-[100%] md:h-[100%] sm:h-[100%] w-[98%]  m-[0.2%] '>
                        <Map  zoom={7} center={position} />
                    </div>
                </APIProvider>       
                {/* <img  className= 'border-l-[20px] border-l-ControllerSec border-b-[20px] rounded-l-full border-b-ControllerPrim shadow-sm flex  relative self-stretch lg:h-[98%] md:h-[98%] sm:h-[98%] w-[96%] flex-[0_0_auto] m-[1%] ' src='/controller/sriLankanMap.png' alt='Map'/> */}
            </div>
        </div>
    )
}

