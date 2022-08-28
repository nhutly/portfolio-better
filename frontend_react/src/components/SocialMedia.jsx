import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoMdDocument} from 'react-icons/io';



const SocialMedia = () => (
  <div className="app__social">
    <div>
      <IoMdDocument />
    </div>
    <div>
      <a href="https://github.com/nhutly" target="_blank">
        <FaGithub />      
      </a>   
    </div>
    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;