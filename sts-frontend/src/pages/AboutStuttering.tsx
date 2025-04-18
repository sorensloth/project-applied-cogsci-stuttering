import React from 'react';

const AboutStuttering: React.FC = () => {
  // Function to scroll to references section
  const scrollToReference = (refNumber: number) => {
    const element = document.getElementById(`reference-${refNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      }}>Information om stammen</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvad er at stamme?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          At stamme er en kommunikationsforstyrrelse, hvor tale afbrydes af gentagelser som (for ek-ek-eksempel), 
          forlængelser som (for eeeeksempel) eller unormale stop i udtalelsen af lyde og stavelser. 
          Der kan også være usædvanlige ansigts- og kropsbevægelser forbundet med talen.
          <sup onClick={() => scrollToReference(1)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[1]</sup>
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvor mange stammer?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          I Danmark vil ca. 8% af befolkningen begynde at stamme i deres liv; 20% af dem vil stamme resten af deres liv. 
          hvilket er omkring 40.000 danskere. Man mener at halvdelen af dem er voksne, mens den anden halvdel befinder 
          sig i alderen 0-18 år.
          <sup onClick={() => scrollToReference(2)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[2]</sup>
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Kan stammen påvirke en?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Afhængigt af graden folk stammer så vil det påvirke deres liv, Undersøgelser indikerer at børn der stammer 
          har en mere negativ attitude til det at tale, sammenlignet med børn der taler flydende. Desuden indikerer 
          undersøgelser, at den negative attitude forværres med alder og graden af stammen.
          <sup onClick={() => scrollToReference(3)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[3]</sup>
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvad er grundene til at vi stammer?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Omkring 5% af børn vil stamme i en periode på omkring 6 måneder eller mere, af dem vender ¾ sig af med det. 
          Af børn der udvikler stammen har ca. 60% et familie medlem som også stammer eller har stammet, hvilket indikerer 
          at det også er grundet genetik.
          <br/><br/>
          Mens barnet vokser, udvikles der flere neurologiske forbindelser i hjernen, som senere bliver finjusteret. Undersøgelser indikerer, 
          at dette kan have indflydelse på, om barnet udvikler stammen. Desuden foreslår undersøgelser, at forskellige dele 
          af tale mekanismerne i hjernen har forskellige grader af plasticitet. Hvilket betyder, at nogle af de neurologiske 
          områder af tale mekanismerne har nemmere ved at ændre sig sammenlignet med andre områder.
          <sup onClick={() => scrollToReference(4)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[4]</sup>
          <br/><br/>
          <strong>Vigtigt:</strong> Det vides ikke med sikkerhed, hvad der forårsager stammen.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1rem' }}>Hvordan kan vi behandle stammen?</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Alle børn der stammer i Danmark har gratis adgang til terapi.
          <br/><br/>
          Undersøgelser indikerer at rytmisk tale kan reducere stammen.
          <sup onClick={() => scrollToReference(5)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[5]</sup> 
          Dette har man implementeret i træningen af folk som stammer, undersøgelser foreslår at stavelses-tempereret 
          tale (på engelsk STS Syllable-Timed Speech) kan reducere stammen
          <sup onClick={() => scrollToReference(6)} style={{ cursor: 'pointer', color: '#1c3faa' }}>[6]</sup>
          <br/><br/>
          Denne øvelse har vi rekonstrueret til dansk tale og indarbejdet på hjemmesiden så børn kan øve sig hjemme 
          og sammen med deres talepædagog(Logopæd).
          <br/><br/>
          <strong>Vigtigt:</strong> Dette værktøj er ikke en erstatning for terapi, men er ment som et supplement til terapi.
        </p>
      </section>

      <section style={{ 
        marginTop: '4rem', 
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#1c3faa', marginBottom: '1.5rem' }}>Referencer</h2>
        <div style={{ fontSize: '0.9rem' }}>
          <p id="reference-1" style={{ marginBottom: '1rem' }}>
            [1] The Stuttering Foundation. (n.d.). FAQ. Retrieved April 3, 2025, from 
            <a href="https://www.stutteringhelp.org/faq#" target="_blank" rel="noopener noreferrer" 
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://www.stutteringhelp.org/faq#
            </a>
          </p>
          
          <p id="reference-2" style={{ marginBottom: '1rem' }}>
            [2] Nielsen H.W. Audiologopæd (2015) At stamme. Sygeforsikring Danmark.
            <a href="https://www.sygeforsikring.dk/nyt-sundt/stamme" target="_blank" rel="noopener noreferrer"
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://www.sygeforsikring.dk/nyt-sundt/stamme
            </a>
          </p>

          <p id="reference-3" style={{ marginBottom: '1rem' }}>
            [3] Beilby, J. (2014). Psychosocial Impact of Living with a Stuttering Disorder: Knowing Is Not Enough. 
            Seminars in Speech and Language, 35(2), 132–143.
            <a href="https://doi.org/10.1055/s-0034-1371756" target="_blank" rel="noopener noreferrer"
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://doi.org/10.1055/s-0034-1371756
            </a>
          </p>

          <p id="reference-4" style={{ marginBottom: '1rem' }}>
            [4] Nicole E. Neef, & Soo-Eun Chang. (2024). Knowns and unknowns about the neurobiology of stuttering. PLoS Biology, 22(2).
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10883586/?tool=EBI" target="_blank" rel="noopener noreferrer"
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://pmc.ncbi.nlm.nih.gov/articles/PMC10883586/?tool=EBI
            </a>
          </p>

          <p id="reference-5" style={{ marginBottom: '1rem' }}>
            [5] Thomas Law, Ann Packman, Mark Onslow, Carol K.-S. To, Michael C.-F. Tong & Kathy Y.-S. Lee (2018) 
            Rhythmic speech and stuttering reduction in a syllable-timed language, Clinical Linguistics & Phonetics, 32:10, 932-949.
            <a href="https://doi.org/10.1080/02699206.2018.1480655" target="_blank" rel="noopener noreferrer"
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://doi.org/10.1080/02699206.2018.1480655
            </a>
          </p>

          <p id="reference-6" style={{ marginBottom: '1rem' }}>
            [6] Andrews, C., O'Brian, S., Harrison, E., Onslow, M., Packman, A., & Menzies, R. (2012). 
            Syllable-Timed Speech Treatment for School-Age Children Who Stutter: A Phase I Trial. 
            Language, Speech & Hearing Services in Schools, 43(3), 359–369.
            <a href="https://doi.org/10.1044/0161-1461(2012/11-0038)" target="_blank" rel="noopener noreferrer"
               style={{ color: '#1c3faa', marginLeft: '0.5rem' }}>
              https://doi.org/10.1044/0161-1461(2012/11-0038)
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutStuttering;
// This component serves as an informational page about stuttering.
