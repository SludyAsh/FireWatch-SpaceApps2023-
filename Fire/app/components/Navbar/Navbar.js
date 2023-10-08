import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return {
        <div>
        <Link href='/'>Home</Link>
        <Link href='/users/james'>James</Link>
        <Link href='/users/john'>John</Link>
        </div>
    }
}