import {fetchAllTags} from "@/backend/actions/token";
import TabsPanel from "@/components/tabs-panel";

export default async function ArtworkContainer() {
    const tags = await fetchAllTags()

    return (
        <section className="bg-[#f8f9fc] p-[90px] relative flex flex-col items-center">
            <div className="container">
                <div className="p-0 relative shrink-0 w-full max-w-full	mt-auto flex flex-wrap box-border">
                    <TabsPanel tags={tags.length > 12 ? tags.slice(0, 12) : tags}/>
                </div>
            </div>
        </section>

    )
}