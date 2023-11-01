import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";

function NotFoundPage() {
  return (
    <main>
      <SectionWrapper>
        <div className=" font-inter text-center h-[100vh] flex flex-col justify-center items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-title-color mb-10 md:mb-14">
            {" "}
            <span className="text-red-600"> 404 Error!</span> Page was not
            found.
          </h3>
          <Link
            className="bg-primary text-white text-base md:text-xl font-semibold rounded-md  px-5 md:px-4 py-2 md:py-3 hover:bg-white hover:text-primary border-none"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default NotFoundPage;
