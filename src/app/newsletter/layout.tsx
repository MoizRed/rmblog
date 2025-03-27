import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex flex-row justify-between items-center p-4">
          <a  href="/"  ><Image className="align sm:mx-0 " src="/Moiz2.svg" alt="Next.js Logo" width={100} height={100} /></a>
          <nav>
            <ul className="flex flex-row space-x-4">
              <li>
                <a  className="sm:text-center style : capitalize hover:underline" href="/newsletter">Get the news letter</a>
              </li>
            </ul>
          </nav>


        </header>
      

        {children}

        <footer>
      <ul className="flex justify-between p-4">
        <li>
          <a href="
          https://www.linkedin.com/in
          /moiz-ali-9b2a3b1a2/">LinkedIn</a>
        </li>
        <li>
          <a href="
          https://github.com/moizared">GitHub</a>
        </li>
        <li>
          <a href="
          https://github.com/moizared">GitHub</a>
        </li>


      </ul>


      </footer>
      </body>
   
    </html>
  );
}
