import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors } from '../../../utils/AdminColor'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classnames from 'classnames'

interface props {
    icon: IconProp,
    iconColor: string,
    focus?: boolean
}

export const SideNavLink = ({icon, iconColor, focus}: props) => {
    const textClass = "ml-4 font-hairline text-admin-word text-sm group-hover:text-admin-title"
    const linkClass = classnames("flex items-center w-full p-4 group", {
        "bg-admin-topnav rounded text-blue-00": focus
    })
    return (
        <a href="#" className={linkClass} onMouseEnter={() => console.log('object')}>
          <FontAwesomeIcon icon={icon} color={iconColor}/>
          <p className={textClass}>Javascript com</p>
        </a>
    )
}
