import Image from "next/image";

export default function Home() {
  return (
    <div className="">
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







		<div className="w-full max-w-[1110px] h-[152px] bg-white p-[26px]">
jijiji
		</div>









	</div>
  );
}
