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
			style={{ width: '100%', height: 'auto' }}         
		/>
		<h1 className="bg-test">is the background green? Then OK!</h1>
	</div>
  );
}
