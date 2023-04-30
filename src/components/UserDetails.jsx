import React from 'react'
import { DeleteUser } from './DeleteUser'


export const UserDetails = () => {
    return (
        <>
        <div className='content'>
            <div className='list'>
            <h1>List Of User Details</h1>
            <button>Add new users </button>
            </div>
            <ul>
                <li>hii</li>
                <li>hii</li>
                <li>hii</li>
             </ul>
             <hr />
             <DeleteUser />
        </div>
        </>
    )
}