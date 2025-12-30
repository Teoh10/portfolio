"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, ExternalLink, Code, Lock, X, Maximize2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-accent selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-6 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50"></div>
            <Image
              src="/profile.jpg"
              alt="Teoh Yi Teng"
              width={150}
              height={150}
              className="relative rounded-full border-2 border-white/10 w-32 h-32 md:w-40 md:h-40 object-cover mx-auto"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Teoh Yi Teng</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate passionate about <span className="text-foreground font-semibold">Software Engineering and Machine Learning</span>. I specialize in building and deploying scalable applications using modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
            <a
              href="/resume.pdf"
              className="px-8 py-3 bg-accent hover:bg-indigo-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
            >
              <FileText size={20} />
              Download Resume
            </a>
            <div className="flex gap-4 px-4">
              {[
                { Icon: Github, href: "https://github.com/Teoh10" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/teoh-yi-teng-049286227/" },
                { Icon: Mail, href: "mailto:yitengteoh123@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-muted hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 bg-accent/10 blur-[60px] rounded-full w-64 h-64 pointer-events-none"></div>

            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I’m a Computer Science graduate with a strong interest in <span className="text-foreground font-medium">software engineering, backend development, and cloud computing</span>.
              During my studies at QUT and APU, I worked on projects involving AWS microservices, machine learning, and Unity-based mixed reality applications.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              I combine technical expertise with a problem-solving mindset to build efficient, scalable systems.
              I’m currently seeking an entry-level software engineering role where I can contribute and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted max-w-2xl mx-auto">
              A comprehensive toolset developed through academic projects and personal exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Languages",
                skills: ["JavaScript", "Python", "C#", "Java", "C", "C++"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Frameworks & Tools",
                skills: ["HTML", "CSS", "Node.js", "Express", "AWS", "Docker", "Git", "PostgreSQL", "Unity"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Machine Learning",
                skills: ["TensorFlow (basic)", "Keras"],
                color: "from-orange-500 to-red-500"
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted">Selected works demonstrating full-stack capabilities.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-accent/50 transition-colors"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-900/50 to-slate-900 border-b border-white/5 p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
                <Code size={48} className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">Cloud Video Transcoder (University Project)</h3>
                </div>
                <p className="text-muted mb-6">
                  Develop a scalable cloud-native application using event-driven <strong>AWS Microservices</strong>.
                  <br /><br />
                  Leveraged <strong>Amazon S3</strong> for durable storage of raw and processed video assets, and <strong>DynamoDB</strong> for single-digit millisecond latency metadata access.
                  Implemented <strong>Auto Scaling Groups</strong> to dynamically provision compute resources for CPU-intensive transcoding jobs, ensuring high availability and cost optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Node.js", "AWS", "Docker", "Microservices"].map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-accent/50 transition-colors"
            >
              {/* Video Section - Replace '/mr-demo.mp4' with your actual video file */}
              <div
                className="h-48 bg-black relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedVideo("/mr-demo.mp4")}
              >
                <video
                  src="/mr-demo.mp4"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster="/placeholder-mr.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                {/* Fallback Overlay / Expand Hint */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white/80 flex items-center gap-2 group-hover:bg-accent/80 transition-colors">
                    <Maximize2 size={12} />
                    Watch Demo
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">MR Learning Tool</h3>
                </div>
                <p className="text-muted mb-6">
                  Industry-sponsored capstone project at Queensland University of Technology (QUT), conducted in collaboration with CAE Australia.
                  Developed a Mixed Reality quiz application for Meta Quest 3, responsible for Unity development including hand tracking, aircraft component identification, and xAPI integration with Moodle.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Unity", "C#", "Meta Quest", "Moodle"].map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-muted text-sm border-t border-white/5 bg-black/20">
        <p>© {new Date().getFullYear()} Teoh Yi Teng. All rights reserved.</p>
      </footer>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video container
            >
              <video
                src={selectedVideo}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>

  );
}
