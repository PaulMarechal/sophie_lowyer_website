import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mjkryzyw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMessageSent(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }}>
        <section
          className="first_section"
          id="a_propos_section"
          style={{ background: '#007BEE' }}
        >
          <h1 className="first_section_h1">
            <span>
              À chaque question, <br />
              une réponse adaptée.
            </span>
          </h1>
        </section>

        <section>
          <div className="display_text_elem_others_pages_div">
            <div className="text_part_others_pages">
              <div className="main_div_fourth_section">
                <p>Sophie Maréchal vous reçoit sur rendez-vous au :</p>
                <p>
                  11, Boulevard de Sébastopol
                  <br />
                  75 001 PARIS
                </p>
                <p>
                  Par téléphone :{' '}
                  <a href="tel:+0625550882">+06 25 55 08 82</a>
                </p>
                <p>
                  Par mail :{' '}
                  <a href="mailto:sophie.marechal@avocat.fr">
                    sophie.marechal@avocat.fr
                  </a>
                </p>
              </div>
            </div>

            <div className="contact_part_others_pages">
             


                    <div style={{ marginTop: '2rem', maxWidth: '500px' }}>
                    {messageSent ? (
                        <p style={{ color: 'green' }}>
                        Merci, je vous recontacte très vite !
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                        <label>
                            Nom :
                            <input
                            type="text"
                            name="nom"
                            style={{ width: '100%', marginBottom: '1rem' }}
                            />
                        </label>
                        <label>
                            Téléphone :
                            <input
                            type="tel"
                            name="telephone"
                            style={{ width: '100%', marginBottom: '1rem' }}
                            />
                        </label>
                        <label>
                            Email :
                            <input
                            type="email"
                            name="email"
                            style={{ width: '100%', marginBottom: '1rem' }}
                            />
                        </label>
                        <label>
                            Objet de la demande :
                            <input
                            type="text"
                            name="objet"
                            style={{ width: '100%', marginBottom: '1rem' }}
                            />
                        </label>
                        <label>
                            Message (facultatif) :
                            <textarea
                            name="message"
                            rows="4"
                            style={{ width: '100%', marginBottom: '1rem' }}
                            />
                        </label>
                        <label style={{ display: 'block', marginBottom: '1rem' }}>
                            <input
                            type="checkbox"
                            name="souhaite_etre_rappele"
                            value="Oui"
                            style={{ marginRight: '0.5rem' }}
                            />
                            Je souhaite être rappelé(e)
                        </label>
                        <button type="submit">Envoyer</button>
                        </form>
                    )}
                    {error && (
                        <p style={{ color: 'red' }}>
                        Une erreur est survenue. Veuillez réessayer plus tard.
                        </p>
                    )}
                    </div>
                </div>
            </div>

        </section>
      </div>
    </>
  );
};

export default Contact;
