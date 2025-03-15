import Image from "next/image";
import fs from "fs";
import path from "path";

interface IJob {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

const filePath = path.join(process.cwd(), "public/data", "data.json");
const jsonData = fs.readFileSync(filePath, "utf8");
const items: IJob[] = JSON.parse(jsonData);


export default function Home() {
	return (
		<>
			<div className="bg-primary">
				<Image
					src="/images/bg-header-desktop.svg"
					alt="Header background"
					width={0}
					height={0}
					sizes="100vw"
					className="hidden md:block"
					style={{ width: '100%', height: 'auto' }}         
				/>
				<Image
					src="/images/bg-header-mobile.svg"
					alt="Header background"
					width={0}
					height={0}
					sizes="100vw"
					className="md:hidden"
					style={{ width: '100%', height: 'auto' }}         
				/>
			</div>


			{/* search bar: */}
			<section className="relative mx-5">
				<div className="min-h-[72px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] w-full mx-auto max-w-[1110px] h-auto bg-white px-[26px] py-5 rounded-sm flex flex-row gap-5">
					
					<div className="flex rounded-sm h-[32px] overflow-hidden">
						<div className="bg-light-bg h-full px-2 text-[#5CA5A5] text-[16px] font-bold flex items-center ">
							Frontend							
						</div>
						<div className="h-full w-[32px] flex justify-center items-center bg-[#5CA5A5]  hover:bg-[#2B3939] cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
						</div>

					</div>

				</div>
			</section>


			<div className="mt-20 mx-5">
				{items.map((item:IJob, index:number) => (
					<div key={index} className="mb-9 lg:mb-5 w-full mx-auto max-w-[1110px] h-auto lg:h-[152px] bg-white 
						p-5 lg:p-[26px] rounded-sm flex flex-col lg:flex-row lg:items-center gap-5">

						<div className="bg_company_img -mt-[42px] lg:mt-0" style={{ backgroundImage: `url(${item.logo})` }}></div>

						<div>
							<div className="flex">
								<span className="text-primary mr-6 lg:mr-4 text-[13px] md:text-lg font-bold">{item.company}</span>
								<div className="flex gap-2">
								{ item.new && 
									<div className="h-[24px] bg-[#5CA5A5] px-2 rounded-[12px] text-white font-bold text-sm flex items-center">NEW!</div>
								}
								{ item.featured && 
									<div className="h-[24px] bg-[#2B3939] px-2 rounded-[12px] text-white font-bold text-sm flex items-center">FEATURED</div>
								}
								</div>
							</div>
							<p className="text-[15px] md:text-[22px] font-bold text-[#2B3939] my-2 lg:my-auto">{item.position}</p>
							<div className="lg:text-[18px] font-medium text-[#7C8F8F] flex items-center gap-5">
								<span>{item.postedAt}</span>
								<div className="w-[4px] h-[4px] rounded-full bg-[#7C8F8F]"></div>
								<span>{item.contract}</span>
								<div className="w-[4px] h-[4px] rounded-full bg-[#7C8F8F]"></div>
								<span>{item.location}</span>
							</div>
						</div>
						{/* line on mobile view: */}
						<div className="lg:hidden w-full h-[1px] bg-[#B7C4C4]">
							
						</div>
						<div className="lg:ml-auto flex flex-wrap gap-4">
							<div className="bg-light-bg h-[32px] px-2 text-[#5CA5A5] text-[16px] font-bold flex items-center rounded-sm">
								{item.role}
							</div>
							<div className="bg-light-bg h-[32px] px-2 text-[#5CA5A5] text-[16px] font-bold flex items-center rounded-sm">
								{item.level}
							</div>
							{item.languages.map((item:string, index:number) => (
								<div key={index} className="bg-light-bg h-[32px] px-2 text-[#5CA5A5] text-[16px] font-bold flex items-center rounded-sm">
									{item}
								</div>
							))}
						</div>

					</div>
				))}
			</div>
		</>
	);
}
