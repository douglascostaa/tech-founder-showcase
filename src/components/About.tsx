import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "2", label: "Empresas" },
    { value: "6", label: "Anos de experiência" },
  ];

  return (
    <section id="about" className="section-padding bg-muted-dark">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-label mb-12"
        >
          Sobre
        </motion.p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section text-foreground">
              Engenheiro,
              <br />
              <span className="text-electric-blue">empresário</span>
              <br />
              & investidor
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              Com formação em engenharia de computação, construí minha carreira
              atuando no mercado internacional de desenvolvimento de software e
              e-commerce em países como Argentina, Chile, México, Peru e Brasil.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Essa experiência global me deu a visão para fundar minha própria
              empresa de tecnologia e investir em startups que estão transformando
              seus mercados.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
