import { NavLink } from "react-router-dom";

const NotFound = () => {
    // const Wrapper = styled.section`
    //     .container {
    //         padding: 9rem 0;
    //         text-align: center;

    //         h2{
    //             font-size: 10rem;
    //         }

    //         h3{
    //             font-size: 5rem;
    //         }

    //         p{
    //             margin: 2rem 0;
    //         }
    //     }
    
    // `
    return (
      <>
        <div className="mt-5 py-15 px-0 text-center ">
          <div >
            <h2 className="text-[10rem]">404!</h2>
            <h2 className="text-[5rem]">You're lost.</h2>
            <p className="my-10 text-base ">
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button bellow to go back to the
              homepage.
            </p>
            <NavLink to="/">
              <button className="py-2 px-4 rounded bg-black text-white font-semibold ">Go to Home</button>
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default NotFound;