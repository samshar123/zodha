// Server Component (Automatically SSR)
import Styles from './pub.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Publication = {
  title: string;
  image: string;
  pdf: string;
};

// Fetch data in a Server Component (No getServerSideProps needed)
async function getPublications(): Promise<Publication[]> {
  try {
    const response = await fetch('http://94.136.185.170:8700/api/publication/journal/', {
      cache: 'no-store', // Ensures fresh data on every request
    });
    if (!response.ok) throw new Error('Failed to fetch publications');
    return await response.json();
  } catch (error) {
    console.error('Error fetching publications:', error);
    return [];
  }
}

export default async function Publications() {
  const publications = await getPublications();

  return (
    <div className="container">
      <div className={Styles.pubmain}>
        <div className={Styles.pubhead}>
          <h2>Publications</h2>
          <h5>Our Featured Publications</h5>
        </div>
        <div className={Styles.pubsub}>
          <div className="row">
            {publications
              .filter((publication) => publication.pdf)
              .map((publication, index) => {
                const imageUrl = publication.image.startsWith("http")
                  ? publication.image
                  : `http://94.136.185.170:8700${publication.image}`;
                const pdfUrl = publication.pdf.startsWith("http")
                  ? publication.pdf
                  : `http://94.136.185.170:8700${publication.pdf}`;
                return (
                  <div key={index} className={`col-lg-3 col-12 ${Styles.pubm}`}>
                    <Link href={pdfUrl || "#"} target="_blank">
                      <div className={Styles.pubcardmain}>
                        <Image
                          className="pubimg"
                          height={250}
                          width={200}
                          src={imageUrl}
                          alt={publication.title || "Publication"}
                        />
                        <h4>{publication.title || `Publication ${index + 1}`}</h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
