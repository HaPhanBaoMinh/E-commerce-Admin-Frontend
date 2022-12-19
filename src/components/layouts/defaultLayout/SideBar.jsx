import React, { useState } from 'react'
import styled from 'styled-components'
import SideBarItem from '../../sidebarItem/SideBarItem'
import { MdDashboard, MdAssignment } from 'react-icons/md'
import { HiArchiveBox } from 'react-icons/hi2'
import { IoStorefrontSharp } from 'react-icons/io5'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdCategory } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


const SideBar = () => {
    const [selected, setSelected] = useState(0)

    const SelectedList = [
        { link: "/", name: "Dashboash", logo: <MdDashboard /> },
        { link: "/orders", name: "Orders", logo: <MdAssignment /> },
        { link: "/products", name: "Products", logo: <HiArchiveBox /> },
        { link: "/category", name: "Category", logo: <MdCategory /> },
        { link: "/banner", name: "Banner", logo: <IoStorefrontSharp /> },
        { link: "/", name: "Employee", logo: <BsFillPeopleFill /> },
    ]

    return (
        <Container>
            {SelectedList.map((item, index) =>
                <SideBarItem
                    key={uuidv4()}
                    link={item.link}
                    name={item.name}
                    logo={item.logo}
                    onClick={() => setSelected(index)}
                    isSelected={selected === index ? true : false}
                />
            )}
        </Container>
    )
}

export default SideBar

const Container = styled.div`
    width: 100%;
    height: 100%; 
    background-color: #ffffff;
`