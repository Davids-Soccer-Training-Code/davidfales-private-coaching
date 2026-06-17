import StoryForm from "@/app/components/admin/StoryForm";
import AuthWrapper from "../AuthWrapper";

export default function NewStory() {
  return (
    <AuthWrapper>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Create New Story
        </h1>
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-8">
          <StoryForm />
        </div>
      </div>
    </AuthWrapper>
  );
}
