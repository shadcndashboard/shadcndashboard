import { Link } from "react-router";
import Logo from "src/assets/images/logos/darklogo.svg";
import Logowhite from "src/assets/images/logos/whitelogo.svg";

const FullLogo = () => {
  return (
    <Link to={'/'} className="max-w-[40px] block lg:max-w-[120px] overflow-hidden">
      {/* Dark Logo   */}
      <img
        src={Logo}
        alt='logo'
        width={100}
        height={32}
        className='block dark:hidden max-w-[120px] rtl:scale-x-[-1]'
      />
      {/* Light Logo  */}
      <img
        src={Logowhite}
        alt='logo'
        width={100}
        height={32}
        className='hidden dark:block max-w-[120px] rtl:scale-x-[-1]'
      />
    </Link>

  );
};

export default FullLogo;
