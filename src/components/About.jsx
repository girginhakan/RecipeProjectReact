import React from "react";
import "../assets/style/about.scss";
const About = () => {
  return (
    <div className="about-page">
      <main>
        <section className="about">
          <div className="company-info">
            <h1>About</h1>
            <p>
            <strong>Our Cooking Recipes Website</strong>, was established to share delicious recipes and inspire people in the kitchen.

            </p>
            <p>
            You can find the most special recipes selected from world cuisines on our website. Our goal is to make the cooking experience enjoyable by providing step-by-step recipes that everyone can easily access.

            </p>
          </div>
          <div className="team-members">
        <h2>Team Members</h2>
        <div className="members-container">
          <div className="member">
            <img
              src="https://avatars.githubusercontent.com/u/77413520?v=4"
              alt="Founder 1"
            />
            <div className="member-info">
              <h3>Hakan Girgin</h3>
              <p>Founder &amp; Chief Editor
                  </p>
            </div>
          </div>

          <div className="member">
            <img
              src="https://avatars.githubusercontent.com/u/154968593?v=4"
              alt="Founder 2"
            />
            <div className="member-info">
              <h3>Burak Gonca</h3>
              <p>Founder &amp; Kitchen Editor
              </p>
            </div>
          </div>
        </div>
      </div>
          <div className="mission">
            <h2>Our Mission and Vision</h2>
            <p>
              <strong>Our Mission:</strong> To help everyone discover their creativity in the kitchen.
            </p>
            <p>
              <strong>Our Vision:</strong> To become the most loved platform for recipes and reach millions of people.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
