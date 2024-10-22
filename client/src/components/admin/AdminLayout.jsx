import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    
    <div className="flex">
        <div>
            {/* side bar */}
        </div>
        <div>
            {/* header */}
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout