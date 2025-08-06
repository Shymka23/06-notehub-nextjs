import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

// Робимо сторінку динамічною для уникнення проблем з пререндерингом
export const dynamic = "force-dynamic";

interface SearchParams {
  search?: string;
  page?: string;
}

export default async function Notes({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const initialQuery = params.search || "";
  const initialPage = parseInt(params.page || "1", 10);

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

    // При помилці не передаємо initialData, щоб уникнути проблем з гідратацією
    return (
      <NotesClient initialQuery={initialQuery} initialPage={initialPage} />
    );
  }
}
