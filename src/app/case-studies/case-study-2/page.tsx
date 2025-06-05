"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CaseStudyTwo() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0F2E24] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Close button */}
        <button 
          onClick={() => router.push('/')}
          className="text-[#FFE31A] text-4xl mb-8 hover:opacity-80 transition-opacity"
        >
          ×
        </button>

        {/* Title and subtitle */}
        <h1 className="font-ubuntu font-bold text-[#FFE31A] text-4xl mb-4">
          Marketypes Website Redesign
        </h1>
        <p className="text-xl mb-12">
          Redesigned a playful, strategy-driven site to bring personality to business marketing.
        </p>

        {/* Project details */}
        <div className="pl-8">
          <p><span className="text-white">•</span> <span className="text-[#FFE31A] opacity-80">Duration:</span> 2 weeks (with feedback)</p>
          <p><span className="text-white">•</span> <span className="text-[#FFE31A] opacity-80">Platform:</span> Desktop (only)</p>
          <p><span className="text-white">•</span> <span className="text-[#FFE31A] opacity-80">Tools:</span> Figma</p>
        </div>

        {/* Intro Image */}
        <div className="w-full h-[500px] relative mb-16 rounded-lg overflow-hidden">
          <Image
            src="/case-studies/case-study-2/cs2-intro-picture.png"
            alt="Marketypes Intro"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">✨ The Big Idea</h2>
            <p className="text-lg leading-relaxed">
              Marketypes is a marketing startup with a twist: it helps businesses discover their unique &quot;marketing personality&quot; — called a Marketype — through a custom quiz. Think MBTI, but for your brand voice and strategy.
              <br /><br />
              They had an outdated site and needed something bold, fun, and strategy-smart. The goal? Create an engaging experience that nudges users to take the quiz and reach out — without being pushy. Oh, and the site had to reflect their own Marketype identity: fun, colorful, and a little bit unexpected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">🔧 My Role & Approach</h2>
            <p className="text-lg leading-relaxed">
              I led the full redesign — from structure and interaction design to playful visuals.
              <br /><br />
              I worked closely with the CEO and the rest of the team (who had a vision but were unsure how to implement it) to define how the site should feel to a first-time visitor: &quot;bubbly, colorful, a little chaotic… but still smart.&quot;
              <br /><br />
              Using one of their character illustrations as inspiration, I built a UI language from the ground up — with custom shapes, floating elements, and bright colors that echoed the visual voice of the quiz.
            </p>
            <div className="flex flex-col items-start">
              <p className="text-sm text-gray-300 italic mb-4 mt-8">Early sketch with notes and initial ideas:</p>
              <div className="w-full h-[600px] relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/case-studies/case-study-2/cs2-sketch.png"
                  alt="Early sketch with notes"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">🧠 Design Strategy Highlights</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Home Page: Designed to Spark Curiosity</h3>
                <p className="text-lg leading-relaxed pl-4">
                  • Split into 4 fun, scannable sections: hero, intro, quiz, contact.
                  <br />
                  • The quiz appears right in the flow, with results visible on the same card — to keep momentum high.
                  <br />
                  • The contact form sits right after the quiz — catching users while they&apos;re still curious.
                </p>
                <p className="text-sm text-gray-300 italic mb-4 mt-4">Scroll through this mockup to get a feel for the Home page.</p>
                <div className="w-full h-[490px] relative mb-4 border-2 border-gray-600 rounded-lg overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    <Image
                      src="/case-studies/case-study-2/cs2-homepage.png"
                      alt="Marketypes Homepage"
                      width={1200}
                      height={2000}
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic mb-4 mt-8">The transition of the quiz card from questions to results:</p>
                <div className="w-full max-w-[600px] relative mb-4 mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/case-studies/case-study-2/cs2-quiz-transition.png"
                    alt="Quiz Transition"
                    width={1200}
                    height={2000}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Marketypes Page: Education Meets Entertainment</h3>
                <p className="text-lg leading-relaxed pl-4">
                  • A nudging intro question invites users in.
                  <br />
                  • Card-style layout for each Marketype:
                  <br />
                  <span className="pl-8">• Top level = illustration, motto, 3 key traits, and logos of matching real-life brands</span>
                  <br />
                  <span className="pl-8">• Expanded = deep dive into marketing strategy, with scrollable real-world examples (images + videos)</span>
                </p>
                <p className="text-sm text-gray-300 italic mb-4 mt-8">Try this Marketypes page mockup:</p>
                <div className="w-full h-[490px] relative mb-4 border-2 border-gray-600 rounded-lg overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    <Image
                      src="/case-studies/case-study-2/cs2-marketypes-page.png"
                      alt="Marketypes Page"
                      width={1200}
                      height={2000}
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">About Page: The Team, But Make It Fun</h3>
                <p className="text-lg leading-relaxed pl-4">
                  • Irregular shapes for each team member&apos;s photo and info.
                  <br />
                  • Fun facts, quirky titles, and bios build connection.
                  <br />
                  • Bonus: a cheeky teaser — &quot;Psst, ever wondered what our Marketype is? It&apos;s Abcdefghijkl 🤫&quot; — scribbled out to spark curiosity and memorability.
                </p>
                <p className="text-sm text-gray-300 italic mb-4 mt-8">Isn&apos;t this kind of cute?</p>
                <div className="w-full h-[490px] relative mb-4 border-2 border-gray-600 rounded-lg overflow-hidden">
                  <div className="w-full h-full overflow-y-auto">
                    <Image
                      src="/case-studies/case-study-2/cs2-about-page.png"
                      alt="About Page"
                      width={1200}
                      height={2000}
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Contact Page: Short, Sweet, and Sunny</h3>
                <p className="text-lg leading-relaxed pl-4">
                  • Designed to be approachable and friction-free.
                  <br />
                  • A bold yellow bubble displays the in-person address.
                  <br />
                  • A minimal contact form encourages quick outreach without overwhelming the user.
                </p>
                <p className="text-sm text-gray-300 italic mb-4 mt-8">The Contact Us page:</p>
                <div className="w-full max-w-[600px] relative mb-4 mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/case-studies/case-study-2/cs2-contact-page.png"
                    alt="Contact Page"
                    width={1200}
                    height={2000}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Micro-Interactions with Purpose</h3>
                <p className="text-lg leading-relaxed pl-4">
                  • A floating, bubbly menu bar shifts into a minimal, sticky header on scroll:
                </p>
                <div className="w-full relative mb-4 mt-2 rounded-lg overflow-hidden">
                  <Image
                    src="/case-studies/case-study-2/cs2-menu-bar.png"
                    alt="Menu Bar Transition"
                    width={1200}
                    height={2000}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
                <p className="text-lg leading-relaxed pl-4">
                  • Strategic nudges to take the quiz or contact the team, placed throughout — always helpful, never loud:
                </p>
                <div className="w-full max-w-[500px] relative mb-4 mx-auto mt-2">
                  <Image
                    src="/case-studies/case-study-2/cs2-nudges.png"
                    alt="Strategic Nudges"
                    width={1200}
                    height={2000}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">🎉 Results & Outcomes</h2>
            <p className="text-lg leading-relaxed pl-4">
              • A website that feels like the product: colorful, smart, curious.
              <br />
              • The design became part for the brand identity.
              <br />
              • Widely recocognisd internally for capturing the personality of the product — and making strategy feel fun!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-[#FFE31A] pt-8 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start">
              <p className="text-[#FFE31A] mb-4">
                <span className="font-bold">Dana Gutu |</span> Product Designer
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/dana-gutu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFE31A] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/danagutu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FFE31A] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:danagutu2002@gmail.com"
                  className="text-[#FFE31A] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 