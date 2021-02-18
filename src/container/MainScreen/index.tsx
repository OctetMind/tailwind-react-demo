import React from 'react'
import { FriendSideBar } from '../../components/FriendSideBar';
import { MiddleContent } from '../../components/MiddleContent';
import { Sidebar } from '../../components/Sidebar'

const MainScreen = () => {
    return (
        <div className="flex w-screen" >
            <div className="flex-none w-60">
                <Sidebar />
            </div>
            <div className="flex-auto w-full">
                <MiddleContent />
            </div>
            <div className="md:w-60 w-0 hidden md:flex md:flex-none">
                <FriendSideBar />
            </div>
        </div>
    )
}
export default MainScreen;