import Link from "next/link";

export default function Footer() {

    const footerLinks = {
        Menu:{
            "Home": "/",
            "Movies": "/movies",
            "Discover": "/discover"
        },
        UserAccess: {
            "Log In": "/login",
            "Sign Up": "/signup",
            "Profile": "/profile"
        }
    };

  return (
    <footer className=" py-6 px-6 bg-black text-SilverMist">
      <div className=" grid grid-cols-[1fr_2fr] lg:grid-cols-[3fr_1fr_1fr] gap-12 mb-4">
        <div className=" col-span-2 lg:col-span-1 ">
          <h2 className=" text-ForestGreen font-bold text-2xl ">FilmoraX</h2>
          <p className=" text-sm " >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            mollitia officiis ipsa neque esse maiores similique dolores
            voluptatibus rerum reiciendis!
          </p>
        </div>
        <div>
            <h2 className=" text-ForestGreen font-semibold text-lg sm:text-2xl ">Menu</h2>
            <ul>
                {Object.entries(footerLinks.Menu).map(([name, href]) => (
                    <li key={name}>
                        <Link href={href} className=" text-sm sm:text-base lg:hover:text-LimeGreen lg:transition-colors lg:duration-300">{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className=" text-ForestGreen font-semibold text-lg sm:text-2xl ">User Access</h2>
            <ul>
                {Object.entries(footerLinks.UserAccess).map(([name, href]) => (
                    <li key={name}>
                        <Link href={href} className=" text-sm sm:text-base hover:text-LimeGreen transition-colors duration-300">{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <p className=" text-center text-sm py-2 ">© {new Date().getFullYear()} FilmoraX. All rights reserved.</p>
    </footer>
  );
}
