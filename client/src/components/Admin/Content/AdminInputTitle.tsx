import React from 'react';
import classnames from 'classnames';

interface props {
    classname?: string,
    title: string
}
export const AdminInputTitle = ({classname, title}: props) => {
    return (
        <p className={classnames("text-admin-input mr-4 mb-1", classname)}>
          {title}
        </p>
    )
}
