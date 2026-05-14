	
	const Footer = () => {
		return (
			<div >
				<footer className={`w-full h-15 pt-3.75 pl-5 pr-3.75 bg-white border-t border-gray-200 flex items-center justify-center text-sm gap-1 overflow-hidden relative  before:content-[''] before:hidden md:before:block before:w-135 before:h-43.75 before:bg-[url('https://repository.gov.uz/img/bgimg.png')]  before:right-0 before:bottom-0 before:rotate-180 before:absolute`}>
					©
					<a href="https://www.uzinfocom.uz/" target="_blank" rel="noopener noreferrer" className='text-[#008ddb]  font-normal'>
						 UZINFOCOM
					</a>
					2026
				</footer>
			</div>
		)
	}
	
	export default Footer