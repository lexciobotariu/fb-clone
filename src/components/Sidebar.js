import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src='https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/81558848_10214297674470148_4484602763681988608_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=zOXeXdLv1FMAX_1_RC4&_nc_oc=AQnV-72whxv3KTzo1d3gNuR2JpZy-wJaYISGKJGmYidwwklLXMtApGsKuMX9v7WTHPo&_nc_ht=scontent.flhr3-1.fna&oh=417e06eab9915b79207c6ce39feb1eee&oe=5FA0A3FD' title="Lex Ciobotariu"/>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

    </div>
  )
}

export default Sidebar
