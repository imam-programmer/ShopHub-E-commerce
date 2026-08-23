import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Featured from '../components/Featured'
import Deal from '../components/Deal'


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Featured />
            <Deal />
        </div>
    )
}

export default HomePage