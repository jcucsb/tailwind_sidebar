import { BsFillSuitDiamondFill, BsFillSuitSpadeFill, BsFillSuitHeartFill, BsFillSuitClubFill} from 'react-icons/bs';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
                        bg-black text-white shadow-lg">
            <SideBarIcon icon={<BsFillSuitDiamondFill size="34"/>}/>
            <SideBarIcon icon={<BsFillSuitSpadeFill size="30"/>}/>
            <SideBarIcon icon={<BsFillSuitHeartFill size="29"/>}/>
            <SideBarIcon icon={<BsFillSuitClubFill size="30"/>}/>
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'Diamond' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;
