import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Routelayout() {
    return (
        <div>
            <Header />
            <main style={{ marginTop: "58px" }}>
                <Outlet />
            </main>
        </div>
    )
}

export default Routelayout