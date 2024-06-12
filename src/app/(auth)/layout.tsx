import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-between min-h-screen w-full font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="icons/auth-image.svg"
            width={500}
            height={500}
            alt="auth"
          />
        </div>
      </div>
    </main>
  );
}
