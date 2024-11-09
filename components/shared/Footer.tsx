import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/evento-logo.png"
            alt="logo"
            width={156}
            height={56}
          />
        </Link>
        <p>2024 Evento. Todos los Derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
