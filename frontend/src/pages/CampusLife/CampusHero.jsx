import PageHero from "../../components/PageHero/PageHero";

export default function CampusHero() {
    const handleExploreCampus = () => {
        const campusContent = document.getElementById("campus-content");

        if (campusContent) {
            campusContent.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <PageHero
            variant="campus"
            image="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=85"
            alt="Guru Nanak Institutions Campus"
            badge="Admissions Open for 2026-2027"
            title="Campus Life at Guru Nanak Institutions"
            description="Experience a vibrant campus where academics, innovation, culture, sports, and student life come together to create an inspiring learning environment."
            features={[
                "Modern Campus",
                "Student Clubs",
                "Sports & Events",
            ]}
            buttonText="Explore Campus" onButtonClick={handleExploreCampus} />
    );
}