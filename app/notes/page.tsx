import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

// Робимо сторінку динамічною для уникнення проблем з пререндерингом
export const dynamic = "force-dynamic";

export default async function Notes() {
  const initialQuery = "";
  const initialPage = 1;

  try {
    const initialData = await fetchNotes(initialQuery, initialPage);

    return (
      <NotesClient
        initialData={initialData}
        initialQuery={initialQuery}
        initialPage={initialPage}
      />
    );
  } catch (error) {
    console.error("Error fetching initial data:", error);

    // Повертаємо компонент з порожніми даними, який завантажить дані на клієнті
    return (
      <NotesClient
        initialData={{ notes: [], totalPages: 0 }}
        initialQuery={initialQuery}
        initialPage={initialPage}
      />
    );
  }
}
