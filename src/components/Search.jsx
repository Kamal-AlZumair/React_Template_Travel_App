import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";

const Search = () => {
	return (
		<div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-4">
			<div className=" lg:col-span-2 flex flex-col justify-evenly">
				<div>
					<h2 className=" text-3xl font-bold">
						LUXURY INCLUDED VACATIONS FOR TWO PEOPLE
					</h2>
					<p className=" py-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						sagittis lectus facilisis arcu vehicula fermentum. Aliquam mi quam,
						fringilla eu nunc sit amet, scelerisque tempus augue. Aliquam
						ultrices ex nisl, vel pharetra sem varius vitae. Proin hendrerit
						elit sollicitudin, tempus lorem vel, mattis eros. Nulla auctor est
						id ligula finibus, at pharetra felis suscipit. Vivamus vel justo nec
						ex condimentum blandit et non tellus. Sed mattis justo ante, non
						pulvinar lorem fermentum ac. Maecenas porta metus id odio vehicula,
						a sollicitudin ipsum blandit. Orci varius natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
					</p>
				</div>
				<div className=" grid sm:grid-cols-2 gap-8 py-4">
					<div className="flex flex-col lg:flex-row items-center text-center">
						<button>
							<RiCustomerService2Fill size={50} />
						</button>
						<div>
							<h3 className=" py-2 text-2xl font-bold">LEADING SERVICES</h3>
							<p className=" py-1">
								ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
							</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row items-center text-center">
						<button>
							<MdTravelExplore size={50} />
						</button>
						<div>
							<h3 className=" py-2 text-2xl font-bold">LEADING SERVICES</h3>
							<p className=" py-1">
								ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className=" pt-2 border text-center">
					<p className=" uppercase">get an additional 10% off</p>
					<p className=" uppercase py-4">12 Hours left</p>
					<p className=" bg-gray-800 text-gray-200 uppercase">
						Book now and save
					</p>
				</div>
				<form className=" w-full">
					<div className=" flex flex-col my-2">
						<label>Destination</label>
						<select className=" border rounded-md p-2">
							<option value=" ">Grande Antigua</option>
							<option value=" ">Key West</option>
							<option value=" ">Maldives</option>
							<option value=" ">Cozumel</option>
						</select>
					</div>
					<div className=" flex flex-col my-4">
						<label>Check-In</label>
						<input className=" border rounded-md p-2" type="date"/>
					</div>
					<div className=" flex flex-col my-2">
						<label>Check-Out</label>
						<input className=" border rounded-md p-2" type="date"/>
					</div>
					<button className=" w-full my-4">Rates & Availabilities</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
