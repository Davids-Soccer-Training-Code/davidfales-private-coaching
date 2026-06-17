import { notFound } from "next/navigation";
import StoryForm from "@/app/components/admin/StoryForm";
import { getStoryById } from "@/app/lib/db/queries";
import AuthWrapper from "../../AuthWrapper";

export default async function EditStory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const story = await getStoryById(id);

  if (!story) {
    notFound();
  }

  return (
    <AuthWrapper>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Story</h1>
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-8">
          <StoryForm initialData={story} isEdit={true} />
        </div>
      </div>
    </AuthWrapper>
  );
}
