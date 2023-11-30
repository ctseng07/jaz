import { navLeft, navRight } from "../constants";
import { logo } from '../assets/images';
import { hamburger, arrowDown, user, cart } from '../assets/icons';

const Navbar = () => {
    return (
        <header className="flex px-5 py-3 bg-light-gray border-b-4 border-gray">
            <nav className="flex justify-between items-center w-full max-container">
                <ul className="flex justify-center items-center max-lg:hidden">
                    {navLeft.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-merriweather leading-normal text-base text-black p-8 hover:text-gray text-transform: uppercase flex"
                            >
                                {item.label}

                                <img src={arrowDown}
                                    alt="arrow down"
                                    className="ml-2 rounded-full w-5 h-5"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#">
                    <img src={logo} className="rounded-full" alt='Logo' width={130} height={29} />
                </a>
                <ul className="flex justify-center items-center max-lg:hidden">
                    {navRight.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-merriweather leading-normal text-base text-black p-8 hover:text-gray text-transform: uppercase flex"
                            >
                                {item.label}

                                <img src={arrowDown}
                                    alt="arrow down"
                                    className="ml-2 rounded-full w-5 h-5"
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>

            <div className="flex flex-col justify-around cursor-pointer max-lg:hidden">
                    <img src={user} alt="user"
                    width={30}
                    height={30} />
                    <img src={cart} alt="cart"
                    width={30}
                    height={30} />
                </div>
        </header>
    )
}

export default Navbar