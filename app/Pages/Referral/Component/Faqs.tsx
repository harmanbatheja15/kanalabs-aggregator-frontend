import { useState, useEffect, useRef, useCallback } from 'react';

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState<number>(0);
	const contentRefs = useRef<Array<HTMLDivElement | null>>([
		null,
		null,
		null,
	]);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	const setContentRef = useCallback(
		(index: number) => (el: HTMLDivElement | null) => {
			contentRefs.current[index] = el;
		},
		[]
	);

	useEffect(() => {
		contentRefs.current.forEach((ref, index) => {
			if (ref) {
				if (index === openIndex) {
					ref.style.maxHeight = `${ref.scrollHeight}px`;
					ref.style.opacity = '1';
				} else {
					ref.style.maxHeight = '0px';
					ref.style.opacity = '0';
				}
			}
		});
	}, [openIndex]);

	return (
		<div className='lg:flex-[0.3] flex-1 rounded-2xl p-2'>
			<h2 className='text-sm font-bold py-[18px] pl-2 text-white dark:text-[#4A4B4D]'>FAQ</h2>
			{/* FAQ 1 */}
			<div className='mb-4 text-xs bg-[#111213] dark:bg-[#FCFDFE] rounded-lg overflow-hidden'>
				<button
					className='w-full p-4 text-left flex justify-between items-center text-[#FFFFFFCC] dark:text-[#4A4B4D] font-extrabold'
					onClick={() => toggleItem(0)}
				>
					<span>How do I Earn a point?</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 0 ? 'hidden' : 'block'
						}`}
					>
						+
					</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 0 ? 'block' : 'hidden'
						}`}
					>
						-
					</span>
				</button>
				<div
					ref={setContentRef(0)}
					className='overflow-hidden transition-all duration-300'
					style={{ maxHeight: '0px', opacity: '0' }}
				>
					<div className='p-4 pt-0 text-[#FFFFFFCC] dark:text-[#4A4B4D]'>
						Lorem ipsum dolor sit amet consectetur. Eu tincidunt
						amet pulvinar id facilisi orci. Nec nullam mattis
						aliquam proin nec etiam. Tellus arcu tortor pretium
						rhoncus orci nisi pulvinar accumsan. Eleifend turpis
						lorem eu lacus id.
					</div>
				</div>
			</div>
			{/* FAQ 2 */}
			<div className='mb-4 text-xs bg-[#111213] dark:bg-[#FCFDFE] rounded-lg overflow-hidden'>
				<button
					className='w-full p-4 text-left flex justify-between items-center text-[#FFFFFFCC] dark:text-[#4A4B4D] font-extrabold'
					onClick={() => toggleItem(1)}
				>
					<span>How do I Earn a point?</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 1 ? 'hidden' : 'block'
						}`}
					>
						+
					</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 1 ? 'block' : 'hidden'
						}`}
					>
						-
					</span>
				</button>
				<div
					ref={setContentRef(1)}
					className='overflow-hidden transition-all duration-300'
					style={{ maxHeight: '0px', opacity: '0' }}
				>
					<div className='p-4 pt-0 text-[#FFFFFFCC] dark:text-[#4A4B4D]'>
						Lorem ipsum dolor sit amet consectetur. Eu tincidunt
						amet pulvinar id facilisi orci. Nec nullam mattis
						aliquam proin nec etiam. Tellus arcu tortor pretium
						rhoncus orci nisi pulvinar accumsan. Eleifend turpis
						lorem eu lacus id.
					</div>
				</div>
			</div>
			{/* FAQ 3 */}
			<div className='mb-4 text-xs bg-[#111213] dark:bg-[#FCFDFE] rounded-lg overflow-hidden'>
				<button
					className='w-full p-4 text-left flex justify-between items-center text-[#FFFFFFCC] dark:text-[#4A4B4D] font-extrabold'
					onClick={() => toggleItem(2)}
				>
					<span>How do I Earn a point?</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 2 ? 'hidden' : 'block'
						}`}
					>
						+
					</span>
					<span
						className={`text-2xl transition-transform duration-300 ${
							openIndex === 2 ? 'block' : 'hidden'
						}`}
					>
						-
					</span>
				</button>
				<div
					ref={setContentRef(2)}
					className='overflow-hidden transition-all duration-300'
					style={{ maxHeight: '0px', opacity: '0' }}
				>
					<div className='p-4 pt-0 text-[#FFFFFFCC] dark:text-[#4A4B4D]'>
						Lorem ipsum dolor sit amet consectetur. Eu tincidunt
						amet pulvinar id facilisi orci. Nec nullam mattis
						aliquam proin nec etiam. Tellus arcu tortor pretium
						rhoncus orci nisi pulvinar accumsan. Eleifend turpis
						lorem eu lacus id.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
