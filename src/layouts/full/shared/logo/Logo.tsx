
import { Link } from 'react-router'
import LogoIcon from 'src/assets/images/logos/logoicon.svg'
import { SidebarMenuButton } from 'src/components/ui/sidebar'

const Logo = () => {
    return (
        <Link to={'/'}>


            <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
                <img src={LogoIcon} alt="logo" />
            </SidebarMenuButton>
        </Link>
    )
}

export default Logo
