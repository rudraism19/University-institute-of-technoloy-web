import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What courses does UIT RGPV Shivpuri offer?",
        answer: "We offer B.Tech programs in Computer Science & Engineering (CSE), Civil Engineering (CE), Mechanical Engineering (ME), and Electrical & Electronics Engineering (EEE)."
    },
    {
        question: "How can I apply for admission?",
        answer: "Admissions are conducted through MP DTE counselling based on JEE Mains scores. Please visit the official MP DTE website for counselling schedules."
    },
    {
        question: "Is there a hostel facility available?",
        answer: "Currently, we have limited hostel facilities. However, there are many private hostels and PGs available nearby the campus."
    },
    {
        question: "What are the scholarship opportunities?",
        answer: "Students can avail Post Metric Scholarship (OBC/SC/ST) and other state/central government scholarships like MMVY as per eligibility."
    }
];

export const FAQ = () => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
