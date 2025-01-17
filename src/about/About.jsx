import React from "react";

function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        autoPlay
        loop
        muted
        src="/letstravel/about-us.mp4" // Update the path as needed
      />
      {/* Overlay for background video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 hero-content text-neutral-content text-center">
        <div className="max-w-4xl mx-2 p-6 text-white">
          <h1 className="text-3xl font-bold mt-16 mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to <strong>Lets Travel!</strong>
          </p>
          <p className="mb-4">
            At Lets Travel!, we are passionate about exploring the vibrant
            tapestry of travel experiences and helping fellow wanderers uncover
            the hidden gems of our incredible world. Born from a love for
            adventure and a desire to connect travelers with authentic local
            experiences, our platform is designed to inspire, inform, and
            engage.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            Our mission is simple: to empower travelers to embark on memorable
            journeys by providing a user-friendly platform that showcases unique
            travel experiences. Whether you're a seasoned globetrotter or a
            first-time traveler, Lets Travel! aims to be your go-to resource for
            discovering off-the-beaten-path destinations, local attractions, and
            cultural insights.
          </p>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Curated Travel Guides: Discover comprehensive guides that
              highlight must-see places, local cuisine, and hidden treasures in
              every destination.
            </li>
            <li>
              User-generated Content: Share your travel experiences and insights
              with our community, helping others plan their perfect trips.
            </li>
            <li>
              Interactive Community: Connect with fellow travelers, exchange
              tips, and create unforgettable memories together.
            </li>
          </ul>
          <p>
            Join us on this exciting journey as we explore the world one
            destination at a time. At Lets Travel!, every trip is an opportunity
            to create stories that last a lifetime!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
