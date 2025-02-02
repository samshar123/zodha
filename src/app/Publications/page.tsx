'use client';  // Add this at the top of the file

import { useEffect, useState } from "react";
import Styles from "./pub.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Publications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch("http://94.136.185.170:8700/api/publication/journal/");
        if (!response.ok) {
          throw new Error("Failed to fetch publications");
        }
        const data = await response.json();
        setPublications(data || []); // Ensure data is an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching publicationsss:", error);
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  if (loading) {
    return <p>Loading publications...</p>;
  }

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
              .filter((publication: any) => publication.pdf)
              .map((publication: any, index) => {
                const imageUrl = publication.image
                  ? publication.image.startsWith("http")
                    ? publication.image
                    : `http://94.136.185.170:8700${publication.image}`
                  : "";
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