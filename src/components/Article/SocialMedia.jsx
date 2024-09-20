import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {
  return (
    <div className="flex flex-col gap-4 fixed bg-gray-200 px-3 py-2 top-[60%] left-0 dark:bg-black">
      <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-900"/>
      <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-red-500"/>
      <FontAwesomeIcon icon={faWhatsapp} className="cursor-pointer hover:text-green-600"/>
      <FontAwesomeIcon icon={faMessage} className="cursor-pointer hover:text-blue-600"/>
    </div>
  )
}

export default SocialMedia
