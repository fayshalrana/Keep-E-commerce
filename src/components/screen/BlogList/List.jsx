import React from 'react'
import Pagination from '../../shared/Pagination/Pagination'
import SideBar from '../BlogGrid/SideBar/SideBar'
import ListItem from './ListItem'

const List = () => {
    return (
        <section className='py-6 lg:py-12'>
            <div className="container_fluid">
                <div className="lg:px-10 flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 xl:gap-16">
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 gap-4 xl:gap-8">
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                        </div>
                        <div className="flex justify-center lg:justify-start mt-12">
                            <Pagination />
                        </div>
                    </div>

                    <div className="">
                        <SideBar />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default List
