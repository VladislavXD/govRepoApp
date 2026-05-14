import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '/logo-gov.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <nav className="w-full bg-white border-b border-gray-200 relative">
            <div className="flex items-center justify-between px-3 md:h-[64px] h-[50px]">
                <a href="/" className='py-1 flex items-center px-3'>
                    <img src={logo} alt="Logo" className='hidden md:block w-[170px] h-[55px] object-contain' />
                    <img src="https://repository.gov.uz/img/logo_mobile.png" alt="Logo Mobile" className='block md:hidden h-[45px] object-contain' />
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-2 h-full text-[#008ddb] font-medium -mr-3">
                    <a href="https://repository.gov.uz/ru" className='hover:text-white hover:bg-[#337ab7] px-4 h-full flex items-center transition-colors'>{t('home')}</a>
                    <select 
                        className="bg-[#EDF5FF] h-full px-4 focus:outline-none cursor-pointer" 
                        value={i18n.language} 
                        onChange={changeLanguage}
                    >
                        <option value="RU">RU</option>
                        <option value="EN">EN</option>
                        <option value="UZ">UZ</option>
                    </select>
                    <a href='https://repository.gov.uz/ru/site/login' className='hover:text-white px-4 h-full flex items-center hover:bg-[#337ab7] transition-colors'>
                        {t('login')}
                    </a>
                </div>

                {/* Mobile Burger Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`md:hidden border rounded px-[10px] py-[9px] mr-1 focus:outline-none flex flex-col justify-between items-center h-[34px] w-[44px] transition-colors ${isOpen ? 'bg-[#008ddb] border-[#008ddb] hover:bg-[#0074b3]' : 'bg-[#008ddb] border-[#008ddb] hover:bg-[#0074b3]'}`}
                >
                    <span className="block w-[22px] h-[2px] bg-white rounded-sm"></span>
                    <span className="block w-[22px] h-[2px] bg-white rounded-sm"></span>
                    <span className="block w-[22px] h-[2px] bg-white rounded-sm"></span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden flex flex-col bg-white w-full overflow-hidden transition-all duration-300 ease-in-out absolute top-[50px] left-0 z-50 shadow-md ${isOpen ? 'max-h-64 border-t border-[#333333] opacity-100 py-[10px]' : 'max-h-0 opacity-0 py-0'}`}>
                <div className="flex flex-row justify-center gap-4 w-full">
                    <a href="https://repository.gov.uz/ru" className='px-4 text-[#008ddb] font-medium hover:text-[#005580] transition-colors'>{t('home')}</a>
                    <span className="text-[#ccc]">|</span>
                    <a href='https://repository.gov.uz/ru/site/login' className='px-4 text-[#008ddb] font-medium hover:text-[#005580] transition-colors'>
                        {t('login')}
                    </a>
                </div>
            
            </div>
        </nav>
    );
}

export default Header;