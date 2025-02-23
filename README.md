# Soba Ramen - Aplikacja Restauracyjna

## 📌 Opis projektu

Projekt powstał na zakończenie szkolenia **Front-end Developer, [WORK-ON 7](https://work-on.pl)**.

Autorzy:

- [Inga Pawelec](https://github.com/charldll)
- [Żaklina Jasińska](https://github.com/Vuxssia)
- [Agnieszka Wilczek](https://github.com/veelcheck)

Soba Ramen to aplikacja dla fikcyjnej restauracji, która umożliwia:

- Zalogowanie się do stolika za pomocą kodu (aktualnie dostępne kody stolika: cba321, abc123, qwe123, newCode) lub zeskanowania kodu QR.
- Wybranie składników ramenu i złożenie zamówienia.
- Wysyłanie wiadomości przez formularz kontaktowy:
  - Użytkownik otrzymuje potwierdzenie na skrzynkę mailową.
  - Restauracja otrzymuje informację o nowej wiadomości.
- Dostęp do **panelu administracyjnego** (chronionego hasłem), który umożliwia:
  - Przeglądanie zamówień (panel wyświetla zamówienia z danego dnia, pomija archiwalne).
  - Anulowanie zamówień (usunięcie z bazy danych).
  - Zaznaczanie zamówień jako „zaserwowane” (**isServed = true**), co powoduje, że są one widoczne, ale nie można ich anulować.

## 🛠️ Technologie

Projekt został stworzony przy użyciu:

- **React + Vite** - szybkie środowisko front-endowe.
- **Tailwind CSS** - do stylizacji aplikacji.
- **Supabase** - baza danych i backend w chmurze.
- **Nodemailer** - obsługa wysyłania wiadomości e-mail.
- **React Hook Form** - zarządzanie formularzami.
- **Netlify** - hosting oraz **serverless function** do obsługi wiadomości e-mail poprzez Nodemailer.
- **Google Maps API** - do integracji map.
- **React Spring** - do animacji.
- **Material UI & Headless UI** - komponenty interfejsu użytkownika.
- **Lucide-react & Heroicons** - ikony.
- **ESLint & Prettier** - do utrzymania jakości kodu.

## 🚀 Deployment

Demo aplikacji dostępne pod adresem: [soba-ramen.netlify.app](https://soba-ramen.netlify.app/)

Aplikacja jest hostowana na **Netlify**. W celu obsługi formularza kontaktowego została zaimplementowana funkcja serverless do wysyłania wiadomości e-mail.

## 📬 Kontakt

W razie pytań lub sugestii zapraszamy do kontaktu!

---

✨ Dziękujemy za odwiedzenie naszego projektu! Smacznego! 🍜
