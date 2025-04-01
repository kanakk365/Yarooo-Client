import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#f5f5f5] dark:bg-[#1f2937] pb-10 pt-20 lg:pb-0 ">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between">
          {/* First main div - Logo and contact info */}
          <div className="w-full lg:w-5/12 px-4">
            <div className="mb-10 w-full">
              <Link href="#" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/new-logo.png"
                  alt="logo"
                  width={160}
                  height={40}
                  className="max-w-full w-24"
                />
              </Link>
              <div className="flex flex-col space-y-2">
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:yaroooofficial@gmail.com"
                      className="hover:text-[#4fb472]"
                    >
                      yaroooofficial@gmail.com
                    </a>{" "}
                    /{" "}
                    <a
                      href="mailto:support@yarooo.com"
                      className="hover:text-[#4fb472]"
                    >
                      support@yarooo.com
                    </a>
                  </span>
                </p>
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+917569236628"
                      className="hover:text-[#4fb472]"
                    >
                      +91 9642876876
                    </a>
                  </span>
                </p>
                <p className="flex items-center text-sm text-gray-800 dark:text-white">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>
                  Designed and Developed by{" "}
                    <a
                      className="hover:text-[#4fb472]"
                      href="https://www.coffeecodes.in/"
                    >
                      coffeecodes
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Second main div - Quick Links and Follow Us */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap justify-between">
              {/* Quick Links section */}
              <div className="w-full sm:w-1/2">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">
                    Quick Links
                  </h4>
                  <ul>
                    <li>
                      <Link
                        href="/contact"
                        className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coming-soon"
                        className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]"
                      >
                        Play Store
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coming-soon"
                        className="mb-3 inline-block text-base text-gray-600 hover:text-[#4fb472] dark:text-white/70 dark:hover:text-[#4fb472]"
                      >
                        App Store
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Follow Us section */}
              <div className="w-full sm:w-1/2">
                <div className="mb-10 w-full">
                  <h4 className="mb-9 text-lg font-semibold text-gray-900 dark:text-white">
                    Follow Us On
                  </h4>
                  <div className="mb-6 flex items-center">
                    <Link
                      href="https://www.instagram.com/yarooo.com_?igsh=anlrN3p6MDUxbHMy&utm_source=qr"
                      className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#4fb472] hover:bg-[#4fb472] hover:text-white dark:border-white/70 dark:text-white/70 dark:hover:border-[#4fb472]"
                    >
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-base text-gray-600 dark:text-white/70">
                    &copy; {new Date().getFullYear()} Yarooo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
