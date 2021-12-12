import Link from 'next/link'
import React from 'react'

const errorPage = () => {
    return (
        <div>
            <h1>Page cannot be found</h1>
            <h2>
                Click to go back{' '}
                <Link href="/">
                    <a>Home</a>
                </Link>
            </h2>
        </div>
    )
}

export default errorPage
