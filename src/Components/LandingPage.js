import React from "react";
import "./LandingPage.css";

function HeroMessage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover Delicious Recipes and Connect with Food Lovers at RecipeBook
        </h1>
        <p>
          Join our vibrant community of food enthusiasts and explore a world of
          culinary delights.
        </p>
        <button className="cta-button">Join Now</button>
      </div>
    </section>
  );
}



function FeatureSection() {
  return (
    <section className="feature-section">
      <h2 style={{textAlign:"center",margin:"1rem"}}>Popular features</h2>
      <div className="feature-container">
        <div className="feature">
        <i class="fa-solid fa-book-open fa-xl"></i>
          <h3>Explore a Wide Range of Recipes</h3>
          <p>
            Discover a diverse collection of mouthwatering recipes for every
            taste and occasion.
          </p>
        </div>
        <div className="feature">
        <i class="fa-solid fa-plus  fa-xl"></i>
          <h3>Add new recipe</h3>
          <p>
          Share your favorite recipes with the RecipeBook community and inspire others with your culinary creations
          </p>
        </div>
        <div className="feature">
        <i class="fa-regular fa-comment  fa-xl"></i>
          <h3>Share Feedbacks</h3>
          <p>
          Connect with fellow food lovers, leave comments, and provide valuable feedback to help others improve their recipes.
          </p>
        </div>
      </div>
    </section>
  );
}


function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2 >What Our Users Say</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p className="testimonial-text">
            RecipeBook has revolutionized the way I cook! The recipes shared by the community are outstanding and have become a staple in my kitchen.
          </p>
          <p className="testimonial-user">- John Doe</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            I've found amazing recipes on RecipeBook that I would have never discovered elsewhere. The community is friendly and always willing to help.
          </p>
          <p className="testimonial-user">- Jane Smith</p>
        </div>
      </div>
    </section>
  );
}




function LandingPage() {
  return (
    <div>
      <HeroMessage />
      <FeatureSection />
      <TestimonialSection/>
    </div>
  );
}

export default LandingPage;
