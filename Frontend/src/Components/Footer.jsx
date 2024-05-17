import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import "../styles/footer.css"
import NestCamWiredStandIcon from "@mui/icons-material/NestCamWiredStand";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebook />
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="" className="me-4 text-reset">
            <BsGithub />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <NestCamWiredStandIcon />
                Saga Stream
              </h6>
              <p>
                <strong>Welcome to Saga Streams</strong>
                <br /> Explore a world of captivating stories and insights at{" "}
                <strong>Saga Streams</strong>. From technology to culture, our
                diverse content and vibrant community celebrate the art of
                storytelling. Join us and let your journey begin.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="/readsaga" className="text-reset">
                  Blogs
                </a>
              </p>
              <p>
                <a href="/pensaga" className="text-reset">
                  Write
                </a>
              </p>
              <p>
                <a href="/feedback" className="text-reset">
                  FeedBack
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="p-link">
                <a href="https://silicon.ac.in/" target="_blank" className="text-reset">
                  <FaHome /> Silicon University, Bhubaneswar, Odisha
                </a>
              </p>
              <p>
                <IoMdMail /> sagastreams@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> 234 567 88
              </p>
              <p>
                <FaPrint /> 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="/">
          SagaStream.com
        </a>
      </div>
    </MDBFooter>
  );
}
