import PageHero from "../../components/PageHero/PageHero";

export default function ContactHero() {
    return (
        <PageHero
            variant="contact"
            image="/contact.png"
            alt="Jindal's Guru Nanak Institutions, Mullana"
            title="Contact"
            titleHighlight="Jindal's Guru Nanak"
            description="Dronacharya PG College of Education, Rait, established in 2006, 
            is a NAAC-accredited institution affiliated with Himachal Pradesh University. 
            We provide quality education, experienced faculty, and career-focused programs 
            to help students achieve academic and professional excellence."
            secondaryDescription="Connect with us to know more about our academic programmes, admissions, campus facilities and student opportunities."
            contactInfo={[
                "Mullana, Ambala, Haryana",
                "admissions@example.com",
            ]}
        />
    );
}