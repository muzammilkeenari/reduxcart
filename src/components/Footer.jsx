import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart,
  FaHeart,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-12 col-lg-5">

            <h3 className="fw-bold mb-3">
              REDUX<span className="text-danger">-KART</span>
            </h3>

            <p
              className="text-white"
              style={{ lineHeight: '1.8' }}
            >
              Redux Kart is a modern e-commerce platform designed to
              provide a simple, fast and convenient shopping experience.
              Discover products, add them to your cart and manage your
              wishlist with ease.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">

              <a href="#" className="text-white fs-5">
                <FaFacebook />
              </a>

              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>

              <a href="#" className="text-white fs-5">
                <FaGithub />
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="col-6 col-lg-3">

            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <div className="d-flex flex-column gap-3">

              <Link
                to="/"
                className="text-secondary text-decoration-none"
              >
                <FaHome className="me-2 text-primary" />
                Home
              </Link>

              <Link
                to="/cart"
                className="text-secondary text-decoration-none"
              >
                <FaShoppingCart className="me-2 text-success" />
                Cart
              </Link>

              <Link
                to="/wish"
                className="text-secondary text-decoration-none"
              >
                <FaHeart className="me-2 text-danger" />
                Wishlist
              </Link>

            </div>

          </div>


          {/* Contact */}
          <div className="col-6 col-lg-4">

            <h5 className="fw-bold mb-4">
              Contact Us
            </h5>

            <div className="d-flex flex-column gap-3 text-secondary">

              <div className="d-flex gap-3">
                <FaMapMarkerAlt className="text-danger mt-1" />
                <span>
                  Calicut, Kerala, India
                </span>
              </div>

              <div className="d-flex gap-3">
                <FaPhone className="text-danger mt-1" />
                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="d-flex gap-3">
                <FaEnvelope className="text-danger mt-1" />
                <span>
                  reduxkart@gmail.com
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* Divider */}
        <hr className="border-secondary my-4" />


        {/* Bottom */}
        <div className="row align-items-center">

          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-0">
              © {new Date().getFullYear()} REDUX-KART. All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

            <span className="text-secondary">
              Built with ❤️ using React & Redux
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;