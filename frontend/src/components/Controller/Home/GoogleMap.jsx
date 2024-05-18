import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export const GoogleMap = () => {
    const position = {lat: 7.291418, lng: 80.636696};
    return(
        <div className='flex justify-between items-center px-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]'>
            <div className='flex item-center justify-center  flex-wrap relative self-stretch w-[100%] lg:h-[100%] md:h-[100%] sm:h-[100%] flex-[0_0_auto] '>        
                <APIProvider apiKey={'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk'}>
                    <div  className= ' shadow-sm flex border-[1rem]  border-y-[#525151] border-x-[#a5a9bd]  relative self-stretch lg:h-[100%] md:h-[100%] sm:h-[100%] w-[100%]'>
                        <Map  zoom={7} center={position} />
                    </div>
                </APIProvider>       
                {/* <img  className= 'border-l-[20px] border-l-ControllerSec border-b-[20px] rounded-l-full border-b-ControllerPrim shadow-sm flex  relative self-stretch lg:h-[98%] md:h-[98%] sm:h-[98%] w-[96%] flex-[0_0_auto] m-[1%] ' src='/controller/sriLankanMap.png' alt='Map'/> */}
            </div>
        </div>
    )
}

