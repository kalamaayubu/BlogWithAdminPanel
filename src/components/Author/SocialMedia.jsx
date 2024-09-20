import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {
  return (
    <div className="flex flex-col gap-4 fixed hover:bg-gray-300 bg-gray-100 px-3 py-2 top-[40%] left-0 dark:bg-gray-700 dark:hover:bg-gray-600">
      <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-400"/>
      <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-red-500"/>
      <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer hover:text-green-600"/>
      <FontAwesomeIcon icon={faMessage} className="cursor-pointer hover:text-blue-600"/>
    </div>
  )
}

export default SocialMedia