import React from 'react'
import { Footers, Headers, Sidebar } from '../../components'
import Dashboard from '../dashboard'
import { About, BasicLAN, HowtoUsing, KonfigurasiLAN, Offline, Online } from '../intoduction'

function Home() {
    return (
            <div>
                <Headers />
                <div id="layoutSidenav">
                    <Sidebar />
                <div id="layoutSidenav_content">
                    <HowtoUsing />
                    <Footers />
                </div>
            </div>
        </div>
    )
}

export default Home
