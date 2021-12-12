import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col text-center text-xs text-gray-200 py-4 bg-gray-900">
            <div className="flex flex-row justify-center py-2">
                <a>Github</a>
                <a className="pl-4">Contact</a>
            </div>
            <div>
                <p>&copy; 2021 Nasrah Abraham</p>
            </div>
        </div>
    )
}

export default Footer
