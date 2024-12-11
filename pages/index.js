import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor Bootstrap CSS

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Game Leaderboard</title>
        <meta name="description" content="Game Leaderboard App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <main className="container mt-5">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-3">Welcome to the Game Leaderboard</h1>
            <p className="lead">Check out the best players and their scores!</p>
          </div>

          {/* Card Section */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Get Started</h5>
              <p className="card-text">
                You can see the leaderboard by clicking the button below. 
              </p>
              {/* Menggunakan Link tanpa <a> */}
              <Link href="/leaderboard">
                <button className="btn btn-primary">Go to Leaderboard</button>
              </Link>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="footer text-center mt-5">
            <p>Created with 💻 using Next.js & Bootstrap</p>
          </footer>
        </main>
      </div>
    </>
  );
}