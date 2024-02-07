import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  let videoRef = useRef();
  useEffect(() => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    }
  });
  return (
    <footer className="footer">
      <video autoplay muted loop ref={videoRef}>
        <source src="./videos/motivation.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <FooterContactInfo />
        <FooterSiteNav />
      </div>
      <BlackBar />
    </footer>
  );
}

function FooterContactInfo() {
  return (
    <div className="footer_contact_box">
      <div className="footer_image">
        <img src="./images/logo.png" />
      </div>
      <ul>
        <li>
          <address>
            <FontAwesomeIcon icon={faLocationDot} />
            REDACTED ADDRESS
          </address>
        </li>
        <li>
          <p> (RER) EDAC - TED? </p>
        </li>
      </ul>
    </div>
  );
}

function FooterSiteNav() {
  return (
    <div className="FooterSiteNav">
      <Navigate />
      <Categories />
      <Popular_Brands />
    </div>
  );
}

function Navigate() {
  return (
    <>
      <ul>
        <li>
          <p className="FooterHeader">Navigate</p>
        </li>
        {navigationLinks.map((link, index) => (
          <li key={index} className="FooterGuts">
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

function Categories() {
  return (
    <ul>
      <li>
        <p className="FooterHeader">Categories</p>
      </li>
      <div className="FooterGuts">
        {categoryLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </div>
    </ul>
  );
}

function Popular_Brands() {
  return (
    <ul>
      <li className="FooterHeader">Popular Brands</li>
      <div className="FootGuts">
        {brandLinks.map((link, index) => (
          <li key={index} className="FooterGuts">
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </div>
    </ul>
  );
}

function BlackBar() {
  return <div className="black-bar">"REDACTED"</div>;
}

const navigationLinks = [
  { label: "Contact Us", url: "/contact" },
  { label: "Locations", url: "/locations" },
  { label: "Shipping, Returns & REDACTED", url: "/shipping" },
  { label: "About Us", url: "/about" },
  { label: "Size Charts", url: "/size-charts" },
  { label: "Accessibility", url: "/accessibility" },
  { label: "Sitemap", url: "/sitemap" },
];

const categoryLinks = [
  { label: "OCS & Ranger School", url: "/ocs-ranger-school" },
  { label: "ROTC/JROTC Items", url: "/rotc-jrotc-items" },
  { label: "Clothing", url: "/clothing" },
  { label: "Uniform Accessories", url: "/uniform-accessories" },
  { label: "Crests", url: "/crests" },
];

const brandLinks = [
  { label: "CamelBak", url: "/camelbak" },
  { label: "Tru Spec", url: "/tru-spec" },
  { label: "Gerber", url: "/gerber" },
  { label: "Oakley", url: "/oakley" },
  { label: "Benchmade", url: "/benchmade" },
  { label: "View All", url: "/view-all-brands" },
];
