import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-tight">Impressum</h1>
      
      <div className="prose max-w-none text-zinc-700 space-y-6">
        <p>
          <strong>Angaben gemäß § 5 TMG</strong><br />
          inSocial Media GmbH<br />
          Versmannstraße 2<br />
          20457 Hamburg
        </p>

        <p>
          <strong>Kontakt</strong><br />
          Telefon: +49 (0) 40 / 22 86 38 10<br />
          E-Mail: <a href="mailto:info@insocial-media.de" className="text-black hover:underline">info@insocial-media.de</a>
        </p>

        <p>
          <strong>Vertretung</strong><br />
          Geschäftsführer: William Riegger
        </p>

        <p>
          <strong>Registereintrag</strong><br />
          Eintragung im Handelsregister.<br />
          Registergericht: AG Hamburg<br />
          Registernummer: HRB 138969
        </p>

        <p>
          <strong>Umsatzsteuer-ID</strong><br />
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE303310023
        </p>
      </div>
    </div>
  );
};

export default Impressum;
