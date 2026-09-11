import PageHero from "../../components/PageHero/PageHero";

export default function ContactHero() {
    return (
        <PageHero
            variant="contact"
            image="/contact.png"
            alt="Jindal's Guru Nanak Institutions, Mullana"
            title="Contact"
            titleHighlight="Jindal's Guru Nanak"
            description="Jindal's Guru Nanak Institutions, Mullana is committed to providing quality education and creating an environment where students can learn, grow and achieve their professional goals."
            secondaryDescription="Connect with us to know more about our academic programmes, admissions, campus facilities and student opportunities."
            contactInfo={[
                "Mullana, Ambala, Haryana",
                "admissions@example.com",
            ]}
        />
    );
}