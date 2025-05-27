import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <HeroSection />
    </div>
  );
};

export default page;

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
    <div className="text-xl flex-1 font-bold flex items-center gap-2">
      <div className="grid grid-cols-2 gap-1">
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        <div className="w-3 h-3 bg-black rounded-full" />
        <div className="w-3 h-3 bg-black rounded-full" />
        <div className="w-3 h-3 bg-black rounded-full" />
      </div>
      Gülzemin<span className="text-green-500">Administraýa</span>
    </div>
    <nav className="flex flex-1 gap-6  justify-center text-gray-700">
      <Link href="/workers">Işgärler</Link>
      <Link href="/product/meat">Harytlar</Link>
      <Link href="/attendance">Hasabat</Link>
      <Link href="/departments">Bölümler</Link>
      <Link href="/users">Managment</Link>
    </nav>
    <div className="flex flex-1 gap-4"></div>
  </header>
);

const HeroSection = () => (
  <section className="text-center px-4  flex items-center justify-center flex-col h-[90dvh] py-16 relative">
    <div className="grid grid-cols-2 gap-1 bg-white p-2.5 shadow-md rounded-xl">
      <div className="w-4 h-4 bg-green-500 rounded-full" />
      <div className="w-4 h-4 bg-black rounded-full" />
      <div className="w-4 h-4 bg-black rounded-full" />
      <div className="w-4 h-4 bg-black rounded-full" />
    </div>
    <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
      Pikirlen, planlaşdyr we dolandyr
      <br />
      <span className="text-gray-500">ählisi bir ýerde</span>
    </h1>
    <p className="text-gray-600 mt-4 text-lg">
      Işgärleri dolandyrmagyň iň gowy usuly.
    </p>
    <Link
      href="/dashboard"
      className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
    >
      Dowam etmek
    </Link>

    <div className="absolute top-12 left-4 w-56 bg-green-100 text-sm rounded shadow p-2 rotate-[-6deg]">
      <p>
        <strong>Işgärler bölümi</strong> gözegçiligi bilen her bir iş prosesi
        yzygiderli we netijeli dowam edýär. Wagt we resurs tygşytlylygy üpjün
        edilýär.
      </p>
    </div>
    <div className="absolute top-12 right-4 w-56 bg-green-100 text-sm rounded shadow p-2 rotate-[6deg]">
      <p>
        <strong>Hasabat bölümi</strong> arkaly işgärleriň ýerine ýetirýän
        işleri, netijeliligi we ösüşi dogry seljerilýär. Ähli maglumatlar wagtly
        we anyk görnüşde elýeterlidir.
      </p>
    </div>
    {/* <div className="absolute bottom-10 left-6 w-56 bg-green-100 text-sm rounded shadow p-2 rotate-[6deg]">
      <p>
        <strong>Bölüm dolandyryşy</strong> her bir bölüm aýratynlykda tertipli
        we utgaşykly işleýär. Işgärler arasyndaky hyzmatdaşlyk güýçlenýär we
        umumy maksatlara ýetmek ýeňilleşdirilýär.
      </p>
    </div> */}
    {/* <div className="absolute bottom-10 right-6 w-56 bg-green-100 text-sm rounded shadow p-2 rotate-[-6deg]">
      <p>
        <strong>Dolandyryş bölümi </strong> bilen ýolbaşçylar ähli işgärleriň iş
        ýagdaýyny görüp, netijeli karar kabul edip bilýärler. Strategiki
        maksatlara laýyk ugurlar kesgitlenýär.
      </p>
    </div> */}

    {/* Add more floating feature previews similarly */}
  </section>
);
