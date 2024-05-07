import Image from "next/image";

/**
 * Component card to show an image represent a QR Code
 */
export default function Card() {
  return (
    <div className="card bg-white rounded-lg p-4 max-w-[320px]">
      <Image
        src="/images/image-qr-code.png"
        alt="QR Code"
        width={288}
        height={288}
        className="rounded-lg"
      />
      <p className="text-dark-blue font-bold text-center text-[22px] mt-6 mb-4 leading-tight">
        Improve your font-end <br />
        skills by building projects
      </p>
      <p className="text-grayish-blue text-center leading-tight">
        Scan the QR code to visit Frontend <br />
        Mentor and take your coding skills to <br />
        the next level
      </p>
    </div>
  );
}
