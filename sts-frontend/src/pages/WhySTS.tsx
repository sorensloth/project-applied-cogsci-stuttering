import React from 'react';
import { Link } from 'react-router-dom';

const WhySTS: React.FC = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      lineHeight: '1.6',
      fontSize: '1.1rem'
    }}>
      <h1 style={{ 
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#1c3faa',
        fontSize: '2.5rem'
      }}>Hvorfor stavelses-tempereret tale hjælper</h1>

      <div style={{ 
        padding: '1rem',
        backgroundColor: '#fff3cd',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <strong>Vigtigt:</strong> Dette værktøj er ikke en erstatning for terapi.
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvad er Syllable timed speech (STS)?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          STS eller stavelses-tempereret tale (på dansk) er en øvelse som får børn der stammer til at fokusere på 
          stavelserne i ordene. Den udnytter det rytmiske i stavelser til at få børns udtalen til at blive mere flydende. 
          Se <Link to="/about-stuttering" style={{ color: '#1c3faa', textDecoration: 'underline' }}>"Hvordan kan vi behandle stammen"</Link> for 
          dokumentation af øvelsens indflydelse på tale.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          STS foregår normalt ved at personen i terapi kigger på billeder sammen med logopæden, hvor de beskriver 
          hvad der foregår på billedet.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvordan udtaler man med STS?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Der er én grundlæggende regel: "Hold en pause efter hver stavelse."
        </p>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Uden STS:</strong></p>
          <p>Ibilensidderderenmand</p>
        </div>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Med STS:</strong></p>
          <p>I. Bi. len. sid. der. der. en. mand.</p>
        </div>
        <p style={{ marginBottom: '1.5rem' }}>
          Hvis dette er for svært for barnet i terapi, kan man bruge rytmiske bevægelser som at klappe for hver stavelse. 
          Som barnet bliver bedre til øvelsen bliver beskrivelserne sværere. I starten er det enkelte sætninger med få 
          stavelser, og som barnet bliver bedre til at bruge STS, vil de have 3-5 minutters samtaler omkring valgfrie 
          emner og evt. bruge det i lege.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvordan vores træning kopierer mekanismerne af STS</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Vores værktøj kopierer træningsmekanismerne fra STS, så barnet kan øve sig i at tale i stavelser. Dette gøres 
          ved at barnet kan vælge 4 forskellige kategorier, hvor hver af kategorierne har 3 niveauer. Barnet starter på 
          det første niveau i hver kategori, og som de øver sig, bliver sætningerne gradvist sværere.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Hver sætning går gennem stavelserne enkeltvist, så barnet kan fokusere på udtalelsen af disse stavelser. Mens 
          barnet ser de enkelte stavelser af ordene, kan de også se sætningen ovenfor og hvor i sætningen de befinder sig. 
          Barnets opgave er at læse stavelserne højt mens de trykker sig videre gennem sætningen.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvordan værktøjet skal bruges</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Vores STS værktøj er lavet i en digital version, så barnet altid kan gå ind på hjemmesiden og øve sig. Det er 
          vigtigt at nævne at STS er ment som et værktøj, der skal bruges sammen med en terapist (logopæd). Dette digitale 
          værktøj er ment som et supplement til børn der går til tale-terapi.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Terapisten vil kunne henvise børnene og forældrene i at bruge værktøjet derhjemme, så børnene sammen med 
          terapisten kan fokusere på de svære opgaver, som at beskrive billeder, videoer og lave lege med terapisten, 
          mens de taler i stavelser.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Ud over dette så vil terapisten også kunne bruge værktøjet i terapien, alt efter hvor barnet og terapisten 
          mener de befinder sig, i forhold til niveauerne af STS.
        </p>
      </section>
    </div>
  );
};

export default WhySTS;


