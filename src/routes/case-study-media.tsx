import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyDetail } from "@/components/site/CaseStudyDetail";
import caseMedia from "@/assets/case-media.jpg";

export const Route = createFileRoute("/case-study-media")({ component: Page });

function Page() {
  return (
    <CaseStudyDetail
      tag="Media & Entertainment"
      title="Delivering Immersive Digital Experiences"
      client="CineVerse Studios — a leading film production and digital content house"
      img={caseMedia}
      challenge="CineVerse wanted a groundbreaking interactive experience for their upcoming blockbuster, extending the narrative beyond the screen — needing a partner who could handle massive traffic and rich multimedia, including early Metaverse elements."
      solution="Nextgen Entrade built an interactive fan engagement platform on a MERN Stack for scalability and real-time interaction, with AR features integrated into a Flutter mobile app letting fans interact with virtual characters in the real world. A Blockchain-based digital collectibles marketplace let fans own unique in-universe assets."
      impact="5M+ unique users engaged in the first month, 70% AR adoption among mobile users, and $2M in digital-collectible revenue within the first week."
      quote="Nextgen Entrade brought our vision for immersive storytelling to life. Their expertise in MERN, Flutter, Metaverse, and Blockchain allowed us to create an experience that truly captivated our audience."
      author="Mr. Alex Thorne, Head of Digital Innovation, CineVerse Studios"
    />
  );
}
