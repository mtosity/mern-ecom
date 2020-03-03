import React, {useState} from 'react'
import SideCateLink from './SideCate/SideCateLink'
//
export default function SideCate() {
    return (
        <div className="w-full h-full flex flex-col justify-center lg:text-xs border-2 font-bold rounded py-2 shadow" >
            <SideCateLink title="Automotive & Motorcycles"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
            <SideCateLink title="Electronic Devices"/>
        </div>
    )
}
