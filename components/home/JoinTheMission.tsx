'use client'

import { useVolunteerCarousel } from './useVolunteerCarousel'
import Link from 'next/link'

export default function JoinTheMission() {
  const { index, go, transform } = useVolunteerCarousel(5)

  return (
    <section
      className="w-full bg-[#fcfbfa] py-8 sm:py-12 border-y border-saffron-100 overflow-hidden sd-gap"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-4">
        <div className="text-center mb-8 sm:mb-10 px-4 sm:px-0">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Join the{' '}
            <span className="block sm:inline text-[#e35300]">Mission</span>
          </h2>
          <p className="text-slate-700 font-bold text-[15px] sm:text-lg tracking-wide mb-1">Volunteer Ecosystem</p>
          <p className="deva text-slate-600 font-semibold text-[15px] sm:text-lg tracking-wide mb-4">साथ आइए • सेवा से जुड़िए • परिवर्तन का हिस्सा बनिए</p>
        </div>
        <div className="relative flex flex-col items-center px-0 sm:px-8">
          <button
            className="hidden sm:flex absolute -left-1 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 shadow-xl hover:bg-orange-600 hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => go(index - 1)}
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left w-6 h-6"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <button
            className="hidden sm:flex absolute -right-1 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 shadow-xl hover:bg-orange-600 hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={() => go(index + 1)}
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right w-6 h-6"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
          <div className="overflow-hidden w-full py-2 sm:py-4 rounded-none sm:rounded-2xl">
            <div
              className="flex gap-6 transition-transform duration-400 ease-out"
              style={{ transform }}
            >
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/sanatani_sena.jpeg"
                    alt="Sanatani Sena"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Sanatani Sena</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/vigilance_department.jpeg"
                    alt="Vigilance Department"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Vigilance Department</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/seva_network.jpeg"
                    alt="Sanatan Seva Network"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Seva Network</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/active_member.jpeg"
                    alt="Active Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Member</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/supporting_member.jpeg"
                    alt="Supporting Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Patron Member</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/sanatani_sena.jpeg"
                    alt="Sanatani Sena"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Sanatani Sena</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/vigilance_department.jpeg"
                    alt="Vigilance Department"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Vigilance Department</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/seva_network.jpeg"
                    alt="Sanatan Seva Network"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Seva Network</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/active_member.jpeg"
                    alt="Active Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Member</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/supporting_member.jpeg"
                    alt="Supporting Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Patron Member</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/sanatani_sena.jpeg"
                    alt="Sanatani Sena"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Sanatani Sena</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/vigilance_department.jpeg"
                    alt="Vigilance Department"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Vigilance Department</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/seva_network.jpeg"
                    alt="Sanatan Seva Network"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Join Seva Network</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/active_member.jpeg"
                    alt="Active Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Member</span>
                  </Link>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col group cursor-pointer"
              >
                <Link
                  className="block w-full h-[460px] sm:h-[480px] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#180c06] relative hover:shadow-xl transition-all duration-300"
                  href="/membership"
                >
                  <img
                    src="/img/supporting_member.jpeg"
                    alt="Supporting Member"
                    className="w-full h-full object-contain bg-[#180c06] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </Link>
                <div className="mt-3.5 w-full flex justify-center">
                  <Link
                    className="w-56 sm:w-60 h-10 px-3 bg-[#1E3A8A] hover:bg-[#1B347B] text-white rounded-full font-bold text-xs sm:text-[13px] shadow-md shadow-blue-900/25 transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center whitespace-nowrap group-hover:scale-[1.01] sd-btn sd-btn--join-mission"
                    href="/membership"
                  >
                    <span>Become a Patron Member</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden items-center justify-center gap-4 mt-4 py-2">
            <button
              className="w-9 h-9 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 active:bg-orange-600 active:text-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left w-4 h-4"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <div className="flex items-center gap-1.5">
              <button
                aria-label="Go to slide 1"
                aria-current={index === 0}
                onClick={() => go(0)}
                className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + (index === 0 ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}
              ></button>
              <button
                aria-label="Go to slide 2"
                aria-current={index === 1}
                onClick={() => go(1)}
                className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + (index === 1 ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}
              ></button>
              <button
                aria-label="Go to slide 3"
                aria-current={index === 2}
                onClick={() => go(2)}
                className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + (index === 2 ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}
              ></button>
              <button
                aria-label="Go to slide 4"
                aria-current={index === 3}
                onClick={() => go(3)}
                className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + (index === 3 ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}
              ></button>
              <button
                aria-label="Go to slide 5"
                aria-current={index === 4}
                onClick={() => go(4)}
                className={'h-2 rounded-full transition-all duration-300 cursor-pointer ' + (index === 4 ? 'w-6 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400')}
              ></button>
            </div>
            <button
              className="w-9 h-9 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center text-gray-700 active:bg-orange-600 active:text-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-4 h-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
