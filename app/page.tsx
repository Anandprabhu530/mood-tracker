import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { UserId } = await auth();
  let href = UserId ? "/dashboard" : "/new-user";

  return (
    <div className="bg-[#e5e5e5]">
      <div className="flex h-screen p-6">
        <div className="flex-col p-20 basis-3/5 flex items-center justify-center text-7xl text-black font-semibold">
          <div>Don't just weather your emotions, chart them.</div>
          <div className="text-lg pr-10 pt-10">
            Navigating life's emotional currents can feel like riding a wave in
            the dark. Our moods ebb and flow, sometimes leaving us unsure of
            where we stand. Enter Mooder, the lighthouse in the storm of
            emotions. We offer a safe space to chart your internal weather,
            where every feeling, from sunshine to thunderclouds, finds its place
            on the map. Track your journey, understand your patterns, and
            discover the beauty in the ever-changing landscape of your own mind.
            Join us, and let's weather the storms and celebrate the sunbeams
            together.
          </div>
          <div className="flex pt-6 w-full">
            <button className=" bg-black border border-white rounded-full py-2 px-4 text-white text-lg">
              <Link href={href}>
                <div className="flex gap-4 items-center justify-center">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-col basis-3/5 pr-10 flex justify-center items-center">
          <Image
            src="/Background_cropped.png"
            alt="Cups"
            width={1080}
            height={1080}
            className="shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
