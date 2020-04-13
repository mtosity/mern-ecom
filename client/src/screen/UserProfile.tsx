import React from 'react'
import { ProfileAvatar } from '../components/UserProfile/ProfileAvatar'
import { Profile } from '../components/UserProfile/Profile'

export const UserProfile = () => {
    return (
        <div className="flex p-16 sm:flex-col sm:p-4" style={{backgroundColor: "#F5F5F5"}}>
            <Profile/>
            <ProfileAvatar/>
        </div>
    )
}
