import imgTiktok from "figma:asset/a346e8da726c76af254ece8cd6ae1a593fe0355c.png";
import imgKwai from "figma:asset/8eaf8d562d05c9f3c6b9e7afc9203f3b8d9aadab.png";
import imgTelegram from "figma:asset/2528561a9ab23c760dfb8a242ed294e538a4f72d.png";
import imgInstagram from "figma:asset/ed4a86c629414c4dc35520c31d200aa39df8ebc9.png";
import imgFacebook from "figma:asset/954cf153a08be1e8b3de54015ff93542c165459e.png";
import imgTwitter from "figma:asset/8989ae8f9ff54ffdfb004d3002ee21b258b3e966.png";
import imgYoutube from "figma:asset/25f5f0d926f83468dddb500c3db66855f63b3d8d.png";

export default function SocialMedia() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="social media">
      <div className="relative shrink-0 size-[36px]" data-name="tiktok">
        <img alt="TikTok" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTiktok} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="kwai">
        <img alt="Kwai" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgKwai} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="telegram">
        <img alt="Telegram" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTelegram} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="instagram">
        <img alt="Instagram" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInstagram} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="facebook">
        <img alt="Facebook" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFacebook} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="twitter">
        <img alt="X/Twitter" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTwitter} />
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="youtube">
        <img alt="YouTube" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYoutube} />
      </div>
    </div>
  );
}
