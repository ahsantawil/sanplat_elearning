import React from 'react'

function Dashboard() {
    return (
        <div>
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card">
                                    <h2>Profiles User</h2>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card">
                                    <h2>Ubah password</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
