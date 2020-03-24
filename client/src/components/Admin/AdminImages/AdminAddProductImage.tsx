import React, { useState } from 'react'
import { AdminInputTitle } from '../Content/AdminInputTitle'
import { AdminInput } from '../Content/AdminInput'
import { AdminButton } from '../Content/AdminButton';

export const AdminAddProductImage = () => {
    const [proID, setProID] = useState("");
    const [img, setImg] = useState("");
    
    const addImg = () => {
        console.log(proID, img);
    }
    
    return (
        <div>
            <AdminInputTitle title="Product ID"/>
            <AdminInput
                type="text"
                placeholder="uuid"
                name="proID"
                value={proID}
                onChange={setProID}
            />
            <AdminInputTitle title="Image URL"/>
            <AdminInput
                type="text"
                placeholder="uuid"
                name="img"
                value={img}
                onChange={setImg}
            />
            <AdminButton title="ADD IMAGE" onClick={addImg}/>
        </div>
    )
}
