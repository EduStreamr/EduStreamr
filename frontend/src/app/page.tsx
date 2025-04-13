import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight, BadgePercent, Video, Zap } from "lucide-react";
import GitHubIcon from "@/components/icon/GithubIcon";
import XIcon from "@/components/icon/XIcon";
import TelegramIcon from "@/components/icon/TelegramIcon";
import DiscordIcon from "@/components/icon/DiscordIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const opportunities = [
  {
    title: "Seamless Integration for Streamers",
    description:
      "Streamers can easily integrate EduStreamr into their existing setup. The platform is designed to be simple for streamers.",
    icon: <Video className="text-main size-6" />,
  },
  {
    title: "Low Platform Fees",
    description:
      "Streamers retain 95-99% of their earnings. EduStreamr is designed to be a low-fee tipping platform for streamers.",
    icon: <BadgePercent className="text-main size-6" />,
  },
  {
    title: "Instant Payouts",
    description:
      "No delayed payouts. Streamers can withdraw their earnings instantly, no more delays of days or even weeks.",
    icon: <Zap className="text-main size-6" />,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="bg-sky-500 text-white text-center py-1 flex items-center justify-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span>Live on EDU Chain Testnet</span>
      </div>

      <main className="flex flex-col items-center">
        <div className="w-full sticky top-0 bg-white/70 backdrop-blur-md border-b border-gray-200/30 z-10 shadow-sm">
          <header className="flex justify-between items-center py-4 px-12">
            <img src="/logo.png" alt="EduStreamr" className="w-24" />
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button className="flex gap-2 text-base">
                  <span>Launch App</span>
                  <ArrowRight />
                </Button>
              </Link>
            </div>
          </header>
        </div>

        <div className="flex flex-col gap-6 items-center pb-36 px-6 text-center w-full">
          <h1 className="text-5xl sm:text-7xl font-bold lg:line-clamp-2 leading-tight my-24 w-full sm:max-w-5xl">
            Unlock Web3 Monetization with{" "}
            <span className="text-main">EduStreamr</span>
          </h1>
          <p className="max-w-xl leading-loose">
          A decentralized tipping platform for streamers that offers instant payouts and super low fees, all powered by blockchain.
          </p>
          <Link href="/dashboard">
            <Button className="flex gap-2 text-base">
              <span>Launch App</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-6 items-center justify-center py-24 px-6 bg-gray-50">
          <div className="w-full max-w-7xl mb-8">
            <Card className="w-full bg-white flex gap-4 flex-col sm:flex-row items-center justify-around p-8 text-main [&_p]:text-black text-center">
              <div>
                <h2 className="text-3xl font-bold">X</h2>
                <p>Streamers Onboarded</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">X</h2>
                <p>Tip Count</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">X</h2>
                <p>Total Streamers' Earnings</p>
              </div>
            </Card>
          </div>

          <div className="w-full max-w-7xl flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Choose <span className="text-main">EduStreamr?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              {opportunities.map((opportunity, index) => {
                return (
                  <Card key={index} className="flex gap-4 bg-white">
                    <CardContent className="pt-6 flex flex-col gap-2">
                      <div className="mx-auto">{opportunity.icon}</div>
                      <h3 className="text-xl font-bold text-main text-center">
                        {opportunity.title}
                      </h3>
                      <p className="text-justify">{opportunity.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 items-center justify-center px-6">
          <div className="w-full max-w-7xl py-12 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-center">
              How <span className="text-main">EduStreamr</span> Works?
            </h2>
            <h3 className="text-xl font-bold text-center mb-4">
              It's super easy to get started. No complex setup or config, no
              Web3 knowledge needed.
            </h3>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <Card className="bg-white w-full">
                <CardHeader>
                  <Image
                    src="/login.png"
                    width="400"
                    height="150"
                    alt="Log in with Google / Email"
                    className="h-44 w-full object-cover rounded-xl shadow-md"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col gap-2 items-start">
                  <div className="font-bold text-lg">
                    1. Log in with Google / Email
                  </div>
                  <div className="text-justify">
                    Streamers can log in with their Google account or email.
                    External wallets (e.g., MetaMask) are also supported.
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white w-full">
                <CardHeader>
                  <Image
                    src="/integrate.png"
                    width="400"
                    height="150"
                    alt="Integrate into streaming software"
                    className="h-44 w-full object-cover rounded-xl shadow-md"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col gap-2 items-start">
                  <div className="font-bold text-lg">
                    2. Integrate into streaming software
                  </div>
                  <div className="text-justify">
                    Integrate EduStreamr with your preferred streaming software
                    such as OBS Studio, Streamlabs Desktop, and more.
                  </div>
                </CardFooter>
              </Card>
              <Card className="bg-white w-full">
                <CardHeader>
                  <Image
                    src="/share.png"
                    width="400"
                    height="150"
                    alt="Share the tip link to viewers"
                    className="h-44 w-full object-cover rounded-xl shadow-md"
                  />
                </CardHeader>
                <CardFooter className="flex flex-col gap-2 items-start">
                  <div className="font-bold text-lg">
                    3. Share the tip link to viewers
                  </div>
                  <div className="text-justify">
                    Share your tip link with viewers to start receiving tips.
                    You can add it to your stream description or pin it in the
                    live chat.
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 items-center justify-center py-24 px-6 bg-gray-50">
          <div className="w-full max-w-7xl flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="bg-white">
                  What is EduStreamr?
                </AccordionTrigger>
                <AccordionContent>
                  EduStreamr is a decentralized platform that enables educators
                  and content creators to monetize their educational content
                  directly from their live streams. It offers a web3-first
                  approach, low platform fees, instant withdrawals, and a simple
                  integration process. EduStreamr ensures that your support goes
                  directly to content creators with minimal platform fees.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="bg-white">
                  Can I stream in EduStreamr?
                </AccordionTrigger>
                <AccordionContent>
                  No, EduStreamr is a decentralized tipping platform for
                  streamers. It enhances streams with an easy-to-use tip alert
                  that appears on screen whenever a tip is received.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="bg-white">
                  Is EduStreamr available to all types of streamers?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, due to the permissionless nature of blockchain,
                  EduStreamr is accessible to all types of streamers, including
                  educators, artists, gamers, and more. It provides a fair and
                  transparent platform for creators to monetize their content
                  and engage with their audience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="bg-white">
                  Which streaming software is supported by EduStreamr?
                </AccordionTrigger>
                <AccordionContent>
                  EduStreamr supports popular streaming software such as OBS
                  Studio, Streamlabs Desktop, and others. You can easily
                  integrate EduStreamr into your existing streaming setup to
                  start earning from your live streams.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 items-center justify-center py-24 px-6 bg-sky-500">
          <div className="w-full max-w-7xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-white ">
              Ready to Monetize Your Stream?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join EduStreamr today and start receiving tips directly from your
              viewers. No complicated setup, just seamless integration with your
              existing streaming setup.
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="neutral">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="pt-12 pb-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 justify-between">
            <img src="/logo-white.png" alt="EduStreamr" className="w-32" />
            <div className="flex gap-4">
              <Link
                href="https://github.com/EduStreamr/EduStreamr"
                className="text-gray-300 hover:text-main"
                target="_blank"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://x.com/EduStreamr"
                className="text-gray-300 hover:text-main"
                target="_blank"
              >
                <XIcon />
              </Link>
              <Link
                href="https://t.me/EduStreamr"
                className="text-gray-300 hover:text-main"
                target="_blank"
              >
                <TelegramIcon />
              </Link>
              <Link
                href="https://discord.com/invite/BBteJEg3T8"
                className="text-gray-300 hover:text-main"
                target="_blank"
              >
                <DiscordIcon />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2 text-white">Platform</h3>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Dashboard
            </Link>
            <Link
              href="https://feedback.edustreamr.xyz"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Feedback
            </Link>
            <Link
              href="https://docs.edustreamr.xyz"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Documentation
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2 text-white">Legal</h3>
            <Link
              href="https://docs.edustreamr.xyz/terms-of-service"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Terms of Service
            </Link>
            <Link
              href="https://docs.edustreamr.xyz/privacy-policy"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2 text-white">Community</h3>
            <Link
              href="https://x.com/EduStreamr"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              X
            </Link>
            <Link
              href="https://t.me/EduStreamr"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Telegram
            </Link>
            <Link
              href="https://discord.com/invite/BBteJEg3T8"
              className="text-gray-300 hover:text-main"
              target="_blank"
            >
              Discord
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EduStreamr. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
