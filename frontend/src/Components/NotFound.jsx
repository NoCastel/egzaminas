import { Link } from 'react-router-dom';
import error_image from '../Images/error_image.png';

function NotFound() {
    return (
        <div className="h-screen bg-gray-400 flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="w-fit">
                <img className="" src={error_image} alt="error 404" />
            </div>
            <div className="w-fit flex flex-col gap-2 ">
                <h1 className="font-semibold text-3xl">404</h1>
                <p className="">The page you are looking for is no longer here</p>
                <p className="">We sincerely apologize</p>
                <Link className="cursor-pointer font-semibold uppercase" to="/">Go home</Link>
            </div>
        </div>
    )
}

export default NotFound;