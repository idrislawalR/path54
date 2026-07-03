import { CollectiveGallery } from "@/components/ui/collective-gallery";

export function TheCollectiveSection() {
  return (
    <section id="collective" className="bg-background py-[clamp(80px,9vw,132px)]">
      <CollectiveGallery
        subheading="The collective"
        heading="The people are the proof."
      />
    </section>
  );
}
