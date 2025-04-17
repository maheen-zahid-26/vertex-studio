import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Services from "@/components/services/page";
import Workflow from "@/components/workflow/page";
import Testimonials from "@/components/testimonals/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";
import WhyChooseUs from "@/components/chooseus/page";
import Statistics from "@/components/statistics/page";

import Script from "next/script";

<Script
  src="https://www.google.com/recaptcha/api.js"
  strategy="beforeInteractive" 
/>;

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="aboutus">
        <WhyChooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="stats">
        <Statistics />
      </section>

      <section id="contactus">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
