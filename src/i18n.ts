import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  RU: {
    translation: {
      home: "Главная",
      login: "Войти",
      alertText: "Пожалуйста пройдите авторизацию чтобы система определила вас. Если документ принадлежит вам, введения ПИН кода не требуется.",
      alertLink: "Нажмите здесь для авторизации",
      title: "Введите PIN-код для просмотра документа",
      pinCode: "ПИН код",
      openBtn: "Открыть",
      pinHint: "PIN-код размещается рядом с QR-кодом документа",
      errorRequired: "Необходимо заполнить «ПИН код».",
      errorInvalid: "Неправильный ПИН код",
      captchaLabel: "Код проверки",
      captchaRequired: "Необходимо заполнить «Код проверки».",
      captchaInvalid: "Неправильный код проверки"
    }
  },
  EN: {
    translation: {
      home: "Home",
      login: "Login",
      alertText: "Please log in so the system can identify you. If the document belongs to you, entering the PIN code is not required.",
      alertLink: "Click here to login",
      title: "Enter PIN code to view the document",
      pinCode: "PIN code",
      openBtn: "Open",
      pinHint: "The PIN code is located next to the QR code of the document",
      errorRequired: "«PIN code» field is required.",
      errorInvalid: "Invalid PIN code",
      captchaLabel: "Verification code",
      captchaRequired: "«Verification code» field is required.",
      captchaInvalid: "Invalid verification code"
    }
  },
  UZ: {
    translation: {
      home: "Бош саҳифа",
      login: "Кириш",
      alertText: "Ушбу ҳужжатдан фойдаланиш учун сиз авторизатсиядан ўтишингиз ёки, ПИН кодини киритишингиз лозим.",
      alertLink: "Авторизатсиядан ўтиш учун бу ерга босинг",
      title: "Ҳужжатни кўриш учун ПИН кодни киритинг",
      pinCode: "ПИН код",
      openBtn: "Очиш",
      pinHint: "ПИН код хужжатнинг QR коди ёнига жойлаштирилган",
      errorRequired: "«ПИН код»ни тўлдириш мажбурий.",
      errorInvalid: "Нотўғри ПИН код",
      captchaLabel: "Текширув коди",
      captchaRequired: "«Текширув коди»ни тўлдириш мажбурий.",
      captchaInvalid: "Нотўғри текширув коди"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "RU", // Язык по умолчанию
    fallbackLng: "RU",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
