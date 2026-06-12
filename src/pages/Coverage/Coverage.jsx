// import React, { use } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { useRef } from 'react';

const Coverage = () => {
    const position = [23, 90]
    const serviceCenters = useLoaderData();
    // console.log(serviceCenters)
    const MapRef =useRef(null)
    const handleSearch =(e)=>{
        e.preventDefault();
        const location =e.target.location.value;
        const district = serviceCenters.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord = [district.latitude,district.longitude];
            console.log(district,coord)
            MapRef.current.flyTo(coord ,14);
        }
    }
    return (
        <div className='min-h-screen  justify-center  flex '>
            <div className=" mx-10 w-full flex-1 p-10   rounded-2xl mb-10 mt-4 border border-gray-400 shadow-xl shadow-black ">
                <div className="flex justify-between">
                    <h1 className='font-semibold mb-5 text-3xl '>
                        We are available in 64 districts
                    </h1>
                    <div className="">
                        <form  onSubmit={handleSearch}>
                        <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name='location' type="search" className="grow" placeholder="Search" />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                    </form>

                    </div>

                </div>
                <div className="h-170 w-full border-2 ">
                    <MapContainer
                    ref={MapRef}
                     className='h-170'
                      center={position}
                       zoom={13}
                        scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {serviceCenters.map((center, index) =>
                        (<Marker
                            key={index}
                            position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong>
                            </Popup>
                        </Marker>)
                        )}
                    </MapContainer>
                </div>

            </div>
        </div>
    );
};

export default Coverage;