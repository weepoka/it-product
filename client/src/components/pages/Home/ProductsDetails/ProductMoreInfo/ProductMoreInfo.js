import React from "react";
import SingleProductDetials from "../SingleProductDetials";
import "./ProductMoreInfo.css";

const ProductMoreInfo = () => {
  return (
    <div className="">
      <SingleProductDetials></SingleProductDetials>
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5  ">
          <div className="col-span-2">
            <div className="overflow-x-auto mt-5 specifications p-1">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th className="bg-blue-300 rounded-none text-white tracking-widest">
                      Specification
                    </th>

                    <th className="bg-blue-300 rounded-none"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                  </tr>
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                  </tr>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                  </tr>
                  <tr>
                    <td>Marjy Ferencz</td>
                    <td>Office Assistant I</td>
                  </tr>
                  <tr>
                    <td>Yancy Tear</td>
                    <td>Community Outreach Specialist</td>
                  </tr>
                  <tr>
                    <td>Irma Vasilik</td>
                    <td>Editor</td>
                  </tr>
                  <tr>
                    <td>Meghann Durtnal</td>
                    <td>Staff Accountant IV</td>
                  </tr>
                  <tr>
                    <td>Sammy Seston</td>
                    <td>Accountant I</td>
                  </tr>
                  <tr>
                    <td>Lesya Tinham</td>
                    <td>Safety Technician IV</td>
                  </tr>
                  <tr>
                    <td>Zaneta Tewkesbury</td>
                    <td>VP Marketing</td>
                  </tr>
                  <tr>
                    <td>Andy Tipple</td>
                    <td>Librarian</td>
                  </tr>
                  <tr>
                    <td>Sophi Biles</td>
                    <td>Recruiting Manager</td>
                  </tr>
                  <tr>
                    <td>Florida Garces</td>
                    <td>Web Developer IV</td>
                  </tr>
                  <tr>
                    <td>Maribeth Popping</td>
                    <td>Analyst Programmer</td>
                  </tr>
                </tbody>
                {/* <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>company</th>
                                        <th>location</th>
                                        <th>Last Login</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </tfoot> */}
              </table>
            </div>

            <div className="overflow-x-auto mt-5 specifications p-1">
              <div>
                <h1 className="bg-blue-300 rounded-none text-white tracking-widest">
                  {" "}
                  <span className="mx-2 font-bold">InFocus IN1004 </span>
                </h1>
                <div>
                  <p className="pt-2 pb-5 mx-2">
                    InFocus IN1004 3100 Lumens 3LCD XGA Projector The InFocus
                    IN1004 Projector features cutting-edge display technology!
                    Display information from your Windows laptop or PC to the
                    projector through the USB-C or USB-A connection using a USB
                    cable. Advanced. LCD. Projection. InFocus introduces its
                    newest LCD projector in over a decade. Of course, much has
                    changed since InFocus introduced the first LCD over 25 years
                    ago, but the company's commitment to producing high-quality
                    goods and supplying cutting-edge technology has not. This
                    new affordable and bright LCD series, which is placed
                    alongside our other Lamp, LED, and Laser models, comes
                    packed with: up to 5000 lumens, a 50000:1 contrast ratio,
                    signal inputs up to 3840 x 2160 (4K) @ 30Hz, and weighs only
                    3.3kg, making it incredibly easy to move around your home,
                    office, or anywhere!
                  </p>
                </div>

                <h1 className="bg-blue-300 rounded-none text-white tracking-widest">
                  {" "}
                  <span className="mx-2 font-bold">Six-point pincushion</span>
                </h1>
                <div>
                  <p className="pt-2 pb-5 mx-2">
                    The InFocus IN1004 Projector optical distortion algorithms
                    and built-in image correcting software. Connect your
                    projector and Windows device to the same local area network
                    and use the network to send source content to the projector
                    and onto the large screen. When no network is available, we
                    also provide the option of displaying through USB to the
                    projector's RJ45 connector via cable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div ClassName="...">{/* Adsence */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductMoreInfo;
