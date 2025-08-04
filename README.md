# NoteHub - Personal Note Management App

Сучасний та ефективний додаток для управління особистими нотатками з функцією пошуку та організованою структурою.

## 🚀 Особливості

- **📝 Створення та редагування нотаток** з багатим контентом
- **🔍 Розширена функція пошуку** за ключовими словами
- **🏷️ Організація нотаток** з тегами
- **📱 Адаптивний дизайн** для всіх пристроїв
- **⚡ Швидка та ефективна продуктивність**
- **🔄 SSR та CSR підтримка**

## 🛠️ Технології

- **Next.js 15.4.4** - React фреймворк з App Router
- **TypeScript** - типізація коду
- **TanStack Query** - управління станом запитів
- **Axios** - HTTP клієнт
- **CSS Modules** - стилізація
- **React Hot Toast** - сповіщення
- **Formik + Yup** - форми та валідація

## 📁 Структура проєкту

```
06-notehub-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── notes/
│       ├── page.tsx
│       ├── Notes.client.tsx
│       ├── loading.tsx
│       ├── error.tsx
│       └── [id]/
│           ├── page.tsx
│           ├── NoteDetails.client.tsx
│           ├── loading.tsx
│           └── error.tsx
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── NoteList/
│   ├── NoteForm/
│   ├── SearchBox/
│   ├── Pagination/
│   ├── Modal/
│   ├── Loader/
│   ├── ErrorMessage/
│   ├── ErrorMessageEmpty/
│   └── TanStackProvider/
├── lib/
│   └── api.ts
├── types/
│   └── note.ts
└── public/
```

## 🚀 Запуск проєкту

1. **Клонування репозиторію:**

   ```bash
   git clone <repository-url>
   cd 06-notehub-nextjs
   ```

2. **Встановлення залежностей:**

   ```bash
   npm install
   ```

3. **Налаштування змінних середовища:**
   Створіть файл `.env.local` в корені проєкту:

   ```
   NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token_here
   ```

4. **Запуск в режимі розробки:**

   ```bash
   npm run dev
   ```

5. **Збірка для продакшену:**

   ```bash
   npm run build
   npm start
   ```

## 📄 Маршрути

- **/** - Головна сторінка з інформацією про додаток
- **/notes** - Список всіх нотаток з пошуком та створенням
- **/notes/[id]** - Детальна сторінка конкретної нотатки

## 🔧 API Функції

- `fetchNotes(search, page)` - отримання списку нотаток
- `createNote(note)` - створення нової нотатки
- `deleteNote(id)` - видалення нотатки
- `fetchNoteById(id)` - отримання деталей нотатки

## 🎨 Компоненти

### Серверні компоненти (SSR)

- `app/page.tsx` - головна сторінка
- `app/notes/page.tsx` - сторінка списку нотаток
- `app/notes/[id]/page.tsx` - сторінка деталей нотатки

### Клієнтські компоненти (CSR)

- `app/notes/Notes.client.tsx` - логіка списку нотаток
- `app/notes/[id]/NoteDetails.client.tsx` - логіка деталей нотатки

### Спільні компоненти

- `Header` - навігація
- `Footer` - футер з контактною інформацією
- `NoteList` - список нотаток
- `NoteForm` - форма створення/редагування
- `SearchBox` - пошук
- `Pagination` - пагінація
- `Modal` - модальні вікна
- `Loader` - індикатор завантаження
- `ErrorMessage` - обробка помилок

## 🔄 Стан запитів

Використовується TanStack Query для:

- Кешування даних
- Автоматичного оновлення
- Обробки помилок
- Оптимістичних оновлень

## 🎯 Оптимізації

- **SSR/CSR гібрид** - серверний рендеринг з клієнтською гідратацією
- **Prefetch** - попереднє завантаження даних
- **Debounced search** - пошук з затримкою
- **Error boundaries** - обробка помилок
- **Loading states** - стани завантаження
- **Responsive design** - адаптивний дизайн

## 👨‍💻 Розробник

**Yevhen Shymka**

- Email: student@notehub.app
- Проєкт: NoteHub

## 📄 Ліцензія

© 2024 NoteHub. All rights reserved.
