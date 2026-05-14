import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import file from "/9791-7969-dca6-cdc5-94a6-0517-5663.pdf"

const CAPTCHA_IMAGES = [
  'cezums', 'jrmdb', 'juhev', 'namon', 'naugh', 'poeajv', 'qanak', 'rarwsu', 'zepaka', 'zofubu'
];

const Repo = () => {


  const [pinCode, setPinCode] = useState("");
  const [hasError, setHasError] = useState("");
  const [captchaKey, setCaptchaKey] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const { t } = useTranslation();

  const code = "3802"

  useEffect(() => {
    refreshCaptcha();
  }, []);
  const refreshCaptcha = (keepError = false) => {
    const randomKey = CAPTCHA_IMAGES[Math.floor(Math.random() * CAPTCHA_IMAGES.length)];
    setCaptchaKey(randomKey);
    setCaptchaInput("");
    if (!keepError) {
      setCaptchaError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;

    // Валидация ПИН-кода
    if (!pinCode) {
      setHasError(t('errorRequired'));
      isValid = false;
    } else if (pinCode !== code) {
      setHasError(t('errorInvalid'));
      isValid = false;
    } else {
      setHasError("");
    }

    // Валидация капчи
    if (!captchaInput) {
      setCaptchaError(t('captchaRequired'));
      isValid = false;
    } else if (captchaInput.toLowerCase() !== captchaKey) {
      setCaptchaError(t('captchaInvalid'));
      refreshCaptcha(true); // Обновляем картинку, но сохраняем сообщение об ошибке
      isValid = false;
    } else {
      setCaptchaError("");
    }

    if (!isValid) return;

    // Создаем временную ссылку для программного скачивания
    const link = document.createElement("a");
    link.href = file;
    link.download = `file.pdf`; // Вы можете указать имя файла
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPinCode(value);
  };
	


  return (
    <div className="w-full max-w-[1170px] mx-auto mt-5 px-[15px]">
      <div className="flex flex-col lg:flex-row bg-white rounded flex-wrap mx-[-15px]">
        {/* Левая колонка */}
        <div className="w-full lg:w-1/2 px-[15px] flex flex-col justify-center min-h-[300px] lg:min-h-[400px]">
          
          
          {/* Alert */}
          <div className="mb-5 p-3.75 bg-[#fcf8e3] border border-[#faebcc] text-[#8a6d3b] rounded">   
            <button className="float-right text-[21px] font-bold leading-none text-black opacity-20 hover:opacity-50">
              ×
            </button>
            <p className="text-[14px]">
              {t('alertText')}{" "}
              <a href="https://repository.gov.uz/ru/auth/login" className="text-[#008ddb] hover:text-[#005580] underline">
                {t('alertLink')}
              </a>
            </p>
          </div>

          {/* Заголовки */}
          <h3 className="text-[14px] font-medium text-black mt-5 mb-[25px] text-center">
            {t('title')}
          </h3>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="w-full max-w-[447px] mx-auto mb-[25px] p-[15px] border border-[#bdbdbd] rounded-[5px]">
            <div className="mb-[15px]">
              <label className="block text-[14px] font-bold text-[#333] mb-[5px]">
                {t('pinCode')}
              </label>
              <input
                type="text"
                value={pinCode}
                max={4}
                onChange={handlePinChange}
                autoComplete="off"
                className={`block w-full h-[34px] px-3 py-1.5 text-[14px] leading-[1.42857143] text-[#555] bg-white border border-[#ccc] rounded-[4px] shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)]  ${hasError ? 'border-[#a94442]' : 'focus:border-[#66afe9]'} focus:outline-none focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(102,175,233,0.6)] transition-all`}
              />
              {
                hasError && <p className="text-[12px] text-[#a94442] mt-1.25 mb-[10px] text-[14px]">{hasError}</p>
              }
            </div>

            {/* Капча */}
            <div className="mb-[15px]">
              <label className="block text-[14px] font-bold text-[#333] mb-[5px]">
                {t('captchaLabel')}
              </label>
              <div className="flex items-center w-full">
                <div 
                  className="w-[120px] h-[34px] shrink-0 border border-[#ccc] border-r-0 rounded-l-[4px] bg-white cursor-pointer hover:bg-gray-50 flex items-center justify-center px-1 overflow-hidden transition-all"
                  onClick={() => refreshCaptcha(false)}
                  title="Нажмите, чтобы обновить код"
                >
                  <img 
                    src={`/captcha/${captchaKey}.png`} 
                    alt="captcha" 
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    autoComplete="off"
                    className={`block w-full h-[34px] px-3 py-1.5 text-[14px] leading-[1.42857143] text-[#555] bg-white border border-[#ccc] rounded-r-[4px] rounded-l-none shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] ${captchaError ? 'border-[#a94442] z-10 relative' : 'focus:border-[#66afe9] z-10 relative'} focus:outline-none focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(102,175,233,0.6)] transition-all`}
                  />
                </div>
              </div>
              {
                captchaError && <p className="text-[12px] text-[#a94442] mt-1.25 mb-[10px] text-[14px]">{captchaError}</p>
              }
            </div>

            <button
              type="submit"



              className="block w-full px-3 py-1.5 text-[14px] font-normal leading-[1.42857143] text-center text-white bg-[#41A84B] border border-transparent rounded-[4px] hover:bg-[#337ab7] h-[44px] border-[#41A84B] hover:border-[#285e8e] focus:outline-none focus:bg-[#337ab7]"
            >
              {t('openBtn')}
            </button>
          </form>

          <h3 className="text-[14px] font-medium text-[#3877b0] mt-0 text-center">
            {t('pinHint')}
          </h3>
        </div>


        {/* Правая колонка */}
        <div className="w-full lg:w-1/2 px-[15px] flex items-center justify-center min-h-[300px] lg:min-h-[400px] pb-5 lg:pb-0">
          <img
            src="https://repository.gov.uz/img/pin_code_document.jpg"
            alt=""
            className="block w-[180px] lg:w-auto max-w-full h-auto mx-auto shadow-[0_1px_3px_rgba(0,0,0,0.2)] rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Repo;
