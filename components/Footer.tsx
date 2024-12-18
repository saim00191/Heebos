import Container from "@/shared/Container";

const Footer = () => {
  const useFullLinks = [
    "Content",
    "How it Works",
    "Create",
    "Explore",
    "Terms & Services",
  ];
  const CommunityLinks = [
    "Help Center",
    "Partners",
    "Suggestions",
    "Blog",
    "Newsletters",
  ];
  const OurPartnersLinks = ["Our Partner", "Become a Partner"];

  return (
    <Container className="py-8 bg-[#0B0A0c]/60 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="space-y-4 lg:col-span-2 col-span-1">
          <div className="flex items-center space-x-2">
            <span className="w-[72.14px] h-[72.14px]">
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.0678 0C28.9343 -8.50666e-08 21.9609 2.11534 16.0296 6.07852C10.0983 10.0417 5.47539 15.6747 2.7455 22.2652C0.0156126 28.8558 -0.698651 36.1078 0.693031 43.1043C2.08471 50.1007 5.51984 56.5274 10.564 61.5716C15.6082 66.6157 22.0348 70.0509 29.0313 71.4426C36.0278 72.8342 43.2798 72.12 49.8703 69.3901C56.4609 66.6602 62.0939 62.0373 66.0571 56.106C70.0202 50.1747 72.1356 43.2013 72.1356 36.0678L54.1017 36.0678C54.1017 39.6346 53.044 43.1212 51.0624 46.0869C49.0808 49.0526 46.2643 51.364 42.9691 52.7289C39.6738 54.0939 36.0478 54.451 32.5495 53.7552C29.0513 53.0593 25.838 51.3418 23.3159 48.8197C20.7938 46.2976 19.0763 43.0843 18.3804 39.586C17.6846 36.0878 18.0417 32.4618 19.4066 29.1665C20.7716 25.8713 23.083 23.0547 26.0487 21.0732C29.0144 19.0916 32.501 18.0339 36.0678 18.0339V0Z"
                  fill="white"
                />
                <path
                  d="M36.0678 0C31.3313 -5.64821e-08 26.6412 0.932921 22.2652 2.7455C17.8893 4.55807 13.9132 7.21481 10.564 10.564C7.21481 13.9132 4.55807 17.8893 2.7455 22.2653C0.93292 26.6412 -7.1519e-07 31.3313 0 36.0678H18.0339C18.0339 33.6996 18.5004 31.3545 19.4066 29.1665C20.3129 26.9785 21.6413 24.9905 23.3159 23.3159C24.9905 21.6413 26.9785 20.3129 29.1665 19.4066C31.3545 18.5004 33.6996 18.0339 36.0678 18.0339V0Z"
                  fill="#5CE1E6"
                />
                <circle cx="36.0678" cy="36.0678" r="11.2712" fill="#5CE1E6" />
                <path
                  d="M47.339 36.0678C47.339 34.5877 47.0475 33.122 46.481 31.7545C45.9146 30.387 45.0844 29.1445 44.0377 28.0979C42.9911 27.0513 41.7486 26.221 40.3811 25.6546C39.0136 25.0882 37.548 24.7966 36.0678 24.7966C34.5876 24.7966 33.122 25.0882 31.7545 25.6546C30.387 26.221 29.1445 27.0513 28.0979 28.0979C27.0512 29.1445 26.221 30.387 25.6546 31.7545C25.0882 33.122 24.7966 34.5877 24.7966 36.0678L36.0678 36.0678H47.339Z"
                  fill="white"
                />
              </svg>
            </span>
            <h2 className="text-[40.58px] leading-[52.57px] font-semibold text-white">
              Hoo <span className="text-[#5CE1E6]">Bank</span>
            </h2>
          </div>
          <p className="text-white/70 text-[18px] font-normal leading-[32px] max-w-xs">
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>

        <div className="space-y-4 lg:-ml-14">
          <h2 className="font-medium text-[18px] text-white ">Useful Links</h2>
          <ul className="space-y-2">
            {useFullLinks.map((item, index) => (
              <li
                key={index}
                className="text-white/70 text-[16px] font-normal hover:text-[#5CE1E6] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium text-[18px] text-white">Community</h2>
          <ul className="space-y-2">
            {CommunityLinks.map((item, index) => (
              <li
                key={index}
                className="text-white/70 text-[16px] font-normal hover:text-[#5CE1E6] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="font-medium text-[18px] text-white">Our Partners</h2>
          <ul className="space-y-2">
            {OurPartnersLinks.map((item, index) => (
              <li
                key={index}
                className="text-white/70 text-[16px] font-normal hover:text-[#5CE1E6] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
