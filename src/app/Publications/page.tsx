// page.tsx (SSR)

import { GetServerSideProps } from 'next';
import Styles from './pub.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Publication = {
  title: string;
  image: string;
  pdf: string;
};

interface PublicationsProps {
  publications: Publication[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('http://94.136.185.170:8700/api/publication/journal/');
    const data = await response.json();
    return { props: { publications: data || [] } };
  } catch (error) {
    console.error('Error fetching publications:', error);
    return { props: { publications: [] } };
  }
};

export default function Publications({ publications }: PublicationsProps) {
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
