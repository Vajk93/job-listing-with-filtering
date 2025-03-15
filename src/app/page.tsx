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
			<div className="bg-primary mb-20">
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


			{items.map((item:IJob, index:number) => (
				<div key={index} className="mb-5 w-full mx-auto max-w-[1110px] h-[152px] bg-white p-[26px] rounded-sm flex flex-col md:flex-row items-center gap-5">

					<div className="bg_company_img" style={{ backgroundImage: `url(${item.logo})` }}></div>

					<div>
						<div className="flex">
							<span className="text-primary mr-4 text-lg font-bold">{item.company}</span>
							<div className="flex gap-2">
							{ item.new && 
								<div className="h-[24px] bg-[#5CA5A5] px-2 rounded-[12px] text-white font-bold text-sm flex items-center">NEW!</div>
							}
							{ item.featured && 
								<div className="h-[24px] bg-[#2B3939] px-2 rounded-[12px] text-white font-bold text-sm flex items-center">FEATURED</div>
							}
							</div>
						</div>
						<p className="text-[22px] font-bold text-[#2B3939]">{item.position}</p>
						<div className="text-17px font-medium text-[#7C8F8F] flex items-center gap-5">
							<span>{item.postedAt}</span>
							<div className="w-[4px] h-[4px] rounded-full bg-[#7C8F8F]"></div>
							<span>{item.contract}</span>
							<div className="w-[4px] h-[4px] rounded-full bg-[#7C8F8F]"></div>
							<span>{item.location}</span>
						</div>
					</div>

					<div className="ml-auto flex gap-4">
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
		</>
	);
}
