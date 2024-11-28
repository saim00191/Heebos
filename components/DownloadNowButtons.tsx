import React from "react";

const DownloadNowButtons = () => {
  return (
    <div className="flex xsm:flex-row flex-col items-center gap-8 mt-9">
      <span className="w-[144.17px] h-[43.7px]">
        <svg
          width="129"
          height="43"
          viewBox="0 0 129 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.27448 42.0457C7.9415 42.0457 7.61661 42.0414 7.28626 42.0339C6.60194 42.025 5.91923 41.9651 5.2437 41.8547C4.61381 41.7456 4.00362 41.5426 3.43326 41.2524C2.8681 40.9646 2.35264 40.5873 1.90661 40.1349C1.45409 39.6878 1.07734 39.1693 0.791298 38.5998C0.502132 38.0267 0.302011 37.4123 0.197907 36.7782C0.0855203 36.0968 0.0247315 35.4078 0.0160642 34.7171C0.00907025 34.4853 0 33.7135 0 33.7135V8.32052C0 8.32052 0.00961666 7.56051 0.0160642 7.33714C0.0243908 6.6476 0.0848515 5.9597 0.196923 5.27939C0.301232 4.6435 0.501523 4.02738 0.790861 3.45235C1.07581 2.88328 1.45042 2.36433 1.90016 1.91563C2.34944 1.46266 2.86657 1.0834 3.43271 0.791666C4.00178 0.502456 4.61082 0.300915 5.23944 0.193794C5.91719 0.0823547 6.60229 0.0221316 7.28899 0.0136304L8.27503 0H120.581L121.579 0.0139603C122.259 0.0220921 122.938 0.0818398 123.61 0.192695C124.245 0.30119 124.86 0.504171 125.436 0.794964C126.57 1.38287 127.493 2.313 128.075 3.45499C128.359 4.02608 128.557 4.6372 128.66 5.26762C128.773 5.9535 128.836 6.6468 128.849 7.34198C128.853 7.65328 128.853 7.98767 128.853 8.32052C128.862 8.73273 128.862 9.12504 128.862 9.52066V32.526C128.862 32.9254 128.862 33.315 128.853 33.7079C128.853 34.0654 128.853 34.3928 128.848 34.7299C128.836 35.4127 128.773 36.0936 128.662 36.7673C128.56 37.406 128.361 38.0252 128.071 38.603C127.783 39.1663 127.409 39.6803 126.962 40.1262C126.515 40.581 125.999 40.9606 125.432 41.2502C124.858 41.5426 124.244 41.7463 123.61 41.8545C122.934 41.9655 122.251 42.0254 121.567 42.0338C121.24 42.0415 120.913 42.0454 120.586 42.0456L119.402 42.0478L8.27448 42.0457Z"
            fill="black"
          />
          <path
            d="M26.1159 21.3534C26.1277 20.436 26.37 19.5364 26.8202 18.7384C27.2705 17.9404 27.9141 17.27 28.6911 16.7894C28.1975 16.0803 27.5462 15.4966 26.7891 15.0849C26.032 14.6732 25.1899 14.4447 24.3296 14.4176C22.4945 14.2238 20.7155 15.5221 19.7803 15.5221C18.8272 15.5221 17.3874 14.4369 15.837 14.469C14.8342 14.5015 13.8568 14.7948 13.0002 15.3203C12.1436 15.8458 11.4368 16.5855 10.9489 17.4674C8.83545 21.1482 10.4119 26.5575 12.4366 29.5327C13.4495 30.9896 14.6332 32.6169 16.1822 32.5592C17.698 32.496 18.264 31.587 20.0938 31.587C21.9066 31.587 22.4377 32.5592 24.0181 32.5225C25.6446 32.496 26.6693 31.0592 27.6467 29.5886C28.3745 28.5505 28.9345 27.4032 29.306 26.1892C28.3611 25.7872 27.5547 25.1142 26.9874 24.2543C26.4201 23.3944 26.117 22.3855 26.1159 21.3534ZM23.1308 12.4609C24.0177 11.39 24.4546 10.0136 24.3488 8.6239C22.9939 8.76704 21.7423 9.41839 20.8435 10.4482C20.404 10.9513 20.0674 11.5365 19.853 12.1705C19.6385 12.8046 19.5504 13.4749 19.5937 14.1431C20.2713 14.1502 20.9418 14.0024 21.5545 13.711C22.1672 13.4196 22.7062 12.9922 23.1308 12.4609ZM45.2765 28.8711H40.1038L38.8616 32.5606H36.6705L41.5701 18.9103H43.8464L48.7459 32.5606H46.5176L45.2765 28.8711ZM40.6395 27.1685H44.7397L42.7184 21.1808H42.6618L40.6395 27.1685ZM59.3271 27.5851C59.3271 30.6777 57.6814 32.6647 55.1981 32.6647C54.569 32.6978 53.9434 32.552 53.3928 32.2441C52.8423 31.9361 52.3891 31.4785 52.0851 30.9235H52.0381V35.8529H50.0072V22.6084H51.9731V24.2638H52.0104C52.3284 23.7114 52.7892 23.2562 53.344 22.9463C53.8987 22.6365 54.5266 22.4838 55.1608 22.5043C57.6718 22.5043 59.3271 24.5011 59.3271 27.5851ZM57.2396 27.5851C57.2396 25.5702 56.2045 24.2455 54.6251 24.2455C53.0733 24.2455 52.0297 25.598 52.0297 27.585C52.0297 29.5903 53.0733 30.9333 54.6251 30.9333C56.2045 30.9333 57.2396 29.6184 57.2396 27.5851ZM70.2166 27.5851C70.2166 30.6777 68.5711 32.6647 66.0877 32.6647C65.4586 32.6977 64.833 32.552 64.2825 32.244C63.7319 31.9361 63.2787 31.4785 62.9747 30.9235H62.9277V35.8529H60.8969V22.6084H62.8626V24.2638H62.9C63.2179 23.7114 63.6788 23.2562 64.2335 22.9463C64.7883 22.6365 65.4161 22.4838 66.0503 22.5043C68.5615 22.5043 70.2166 24.5011 70.2166 27.5851ZM68.1293 27.5851C68.1293 25.5702 67.0941 24.2455 65.5146 24.2455C63.9629 24.2455 62.9192 25.598 62.9192 27.585C62.9192 29.5903 63.9629 30.9333 65.5146 30.9333C67.0941 30.9333 68.1293 29.6184 68.1293 27.5851ZM77.4138 28.7573C77.5643 30.1109 78.8716 30.9998 80.658 30.9998C82.3698 30.9998 83.6014 30.1109 83.6014 28.8903C83.6014 27.8308 82.8586 27.1964 81.1 26.7617L79.3411 26.3355C76.8493 25.73 75.6924 24.5578 75.6924 22.6556C75.6924 20.3004 77.7329 18.6828 80.6303 18.6828C83.4978 18.6828 85.4636 20.3004 85.5297 22.6556H83.4796C83.3569 21.2934 82.2375 20.4711 80.6014 20.4711C78.9655 20.4711 77.846 21.3031 77.846 22.5139C77.846 23.479 78.5611 24.0469 80.3101 24.4815L81.8053 24.8509C84.5895 25.5132 85.7464 26.6382 85.7464 28.6348C85.7464 31.1886 83.7241 32.7881 80.5075 32.7881C77.498 32.7881 75.4661 31.2261 75.3349 28.7572L77.4138 28.7573ZM90.1293 20.2533V22.6084H92.0108V24.2262H90.1293V29.7127C90.1293 30.565 90.506 30.9622 91.3332 30.9622C91.5565 30.9582 91.7795 30.9425 92.0012 30.9149V32.5231C91.6294 32.5929 91.2514 32.6245 90.8732 32.6174C88.8701 32.6174 88.0889 31.8607 88.0889 29.9305V24.2262H86.6503V22.6084H88.0889V20.2533H90.1293ZM93.1005 27.5851C93.1005 24.4537 94.9339 22.4861 97.793 22.4861C100.662 22.4861 102.486 24.4537 102.486 27.5851C102.486 30.7249 100.671 32.684 97.7928 32.684C94.9157 32.684 93.1005 30.7249 93.1005 27.5851ZM100.417 27.5851C100.417 25.4371 99.4385 24.1692 97.7928 24.1692C96.1473 24.1692 95.1697 25.4467 95.1697 27.5851C95.1697 29.7417 96.1473 30.9998 97.7928 30.9998C99.4385 30.9998 100.417 29.7417 100.417 27.5851ZM104.161 22.6084H106.098V24.3024H106.145C106.276 23.7733 106.584 23.3058 107.017 22.9783C107.451 22.6509 107.983 22.4835 108.525 22.5043C108.759 22.5035 108.992 22.5291 109.22 22.5805V24.4913C108.925 24.4005 108.617 24.3588 108.308 24.3679C108.013 24.3558 107.719 24.4081 107.446 24.5212C107.173 24.6343 106.927 24.8055 106.726 25.0231C106.525 25.2406 106.373 25.4993 106.281 25.7814C106.189 26.0636 106.158 26.3625 106.192 26.6576V32.5606H104.161V22.6084ZM118.584 29.6375C118.311 31.4442 116.562 32.684 114.324 32.684C111.445 32.684 109.659 30.7443 109.659 27.6323C109.659 24.5107 111.455 22.4861 114.238 22.4861C116.976 22.4861 118.697 24.3775 118.697 27.395V28.0949H111.709V28.2184C111.677 28.5846 111.722 28.9536 111.843 29.3008C111.963 29.648 112.156 29.9654 112.407 30.232C112.659 30.4987 112.964 30.7084 113.303 30.8472C113.641 30.9861 114.005 31.0509 114.371 31.0373C114.85 31.0826 115.332 30.9708 115.744 30.7186C116.156 30.4664 116.475 30.0872 116.655 29.6375H118.584ZM111.719 26.6672H116.665C116.683 26.3379 116.634 26.0083 116.519 25.6992C116.405 25.3901 116.228 25.1081 116 24.8709C115.772 24.6337 115.498 24.4465 115.195 24.3209C114.892 24.1954 114.566 24.1342 114.238 24.1413C113.907 24.1393 113.58 24.2033 113.274 24.3294C112.968 24.4555 112.689 24.6414 112.455 24.8762C112.221 25.1111 112.035 25.3902 111.909 25.6976C111.782 26.005 111.718 26.3346 111.719 26.6672ZM40.385 8.63566C40.8108 8.60492 41.238 8.66962 41.6359 8.82509C42.0338 8.98056 42.3925 9.22293 42.686 9.5347C42.9795 9.84648 43.2006 10.2199 43.3332 10.628C43.4659 11.0361 43.5068 11.4688 43.4531 11.8948C43.4531 13.9901 42.3272 15.1947 40.385 15.1947H38.0297V8.63555L40.385 8.63566ZM39.0425 14.267H40.2719C40.5761 14.2853 40.8806 14.2351 41.1631 14.1201C41.4456 14.0051 41.6991 13.8282 41.9051 13.6022C42.111 13.3763 42.2643 13.107 42.3538 12.8139C42.4432 12.5208 42.4666 12.2114 42.4222 11.9081C42.4634 11.606 42.4377 11.2984 42.3468 11.0075C42.256 10.7166 42.1023 10.4495 41.8968 10.2253C41.6913 10.0012 41.4391 9.82549 41.1581 9.7109C40.8772 9.59631 40.5746 9.54565 40.2719 9.56253H39.0425V14.267ZM44.5972 12.7175C44.5662 12.3923 44.6032 12.0641 44.7058 11.754C44.8083 11.4439 44.9742 11.1589 45.1926 10.9171C45.4111 10.6752 45.6775 10.482 45.9745 10.3498C46.2716 10.2176 46.5929 10.1493 46.9178 10.1493C47.2426 10.1493 47.5639 10.2176 47.861 10.3498C48.158 10.482 48.4244 10.6752 48.6429 10.9171C48.8614 11.1589 49.0272 11.4439 49.1297 11.754C49.2323 12.0641 49.2693 12.3923 49.2383 12.7175C49.2699 13.0432 49.2335 13.3719 49.1312 13.6826C49.029 13.9932 48.8633 14.2789 48.6447 14.5212C48.4261 14.7636 48.1596 14.9573 47.8622 15.0898C47.5648 15.2223 47.2431 15.2908 46.9178 15.2908C46.5925 15.2908 46.2708 15.2223 45.9733 15.0898C45.6759 14.9573 45.4094 14.7636 45.1908 14.5212C44.9722 14.2789 44.8065 13.9932 44.7043 13.6826C44.6021 13.3719 44.5656 13.0432 44.5972 12.7175ZM48.2395 12.7175C48.2395 11.6446 47.7603 11.0171 46.9194 11.0171C46.0752 11.0171 45.6004 11.6446 45.6004 12.7175C45.6004 13.7991 46.0753 14.4217 46.9194 14.4217C47.7603 14.4217 48.2395 13.7948 48.2395 12.7175ZM55.4078 15.1946H54.4003L53.3833 11.5491H53.3065L52.2938 15.1946H51.296L49.9396 10.2447H50.9245L51.8061 14.0217H51.8786L52.8904 10.2447H53.822L54.8337 14.0217H54.9105L55.7877 10.2447H56.7589L55.4078 15.1946ZM57.8997 10.2448H58.8345V11.0311H58.9071C59.0302 10.7487 59.2379 10.5119 59.5011 10.3538C59.7643 10.1957 60.07 10.1242 60.3756 10.1492C60.615 10.1311 60.8555 10.1674 61.079 10.2555C61.3026 10.3435 61.5037 10.481 61.6672 10.6578C61.8308 10.8346 61.9527 11.0462 62.024 11.2768C62.0952 11.5075 62.114 11.7513 62.0789 11.9902V15.1944H61.1077V12.2355C61.1077 11.4401 60.764 11.0445 60.0458 11.0445C59.8833 11.0369 59.721 11.0648 59.5701 11.1261C59.4193 11.1875 59.2834 11.281 59.1718 11.4001C59.0602 11.5192 58.9755 11.6612 58.9236 11.8164C58.8716 11.9715 58.8536 12.1361 58.8708 12.2989V15.1946H57.8997V10.2448ZM63.6263 8.31249H64.5973V15.1946H63.6263V8.31249ZM65.9474 12.7175C65.9164 12.3922 65.9534 12.064 66.056 11.7539C66.1585 11.4438 66.3244 11.1587 66.5429 10.9168C66.7615 10.675 67.0278 10.4817 67.3249 10.3495C67.6221 10.2173 67.9434 10.149 68.2683 10.149C68.5932 10.149 68.9145 10.2173 69.2116 10.3495C69.5087 10.4817 69.7751 10.675 69.9936 10.9168C70.2121 11.1587 70.378 11.4438 70.4806 11.7539C70.5831 12.064 70.6201 12.3922 70.5892 12.7175C70.6206 13.0432 70.584 13.3718 70.4817 13.6823C70.3793 13.9929 70.2136 14.2784 69.995 14.5207C69.7764 14.7629 69.5099 14.9565 69.2125 15.089C68.9151 15.2215 68.5935 15.2899 68.2683 15.2899C67.943 15.2899 67.6214 15.2215 67.324 15.089C67.0267 14.9565 66.7601 14.7629 66.5415 14.5207C66.323 14.2784 66.1572 13.9929 66.0549 13.6823C65.9525 13.3718 65.9159 13.0432 65.9474 12.7175ZM69.5897 12.7175C69.5897 11.6446 69.1105 11.0171 68.2696 11.0171C67.4254 11.0171 66.9506 11.6446 66.9506 12.7175C66.9506 13.7991 67.4255 14.4217 68.2696 14.4217C69.1105 14.4217 69.5897 13.7948 69.5897 12.7175ZM71.6115 13.7948C71.6115 12.9038 72.271 12.3901 73.4417 12.3171L74.7746 12.2398V11.8126C74.7746 11.2898 74.431 10.9946 73.7673 10.9946C73.2251 10.9946 72.8494 11.1948 72.7417 11.5448H71.8014C71.9006 10.6945 72.6958 10.1493 73.8121 10.1493C75.0457 10.1493 75.7415 10.7671 75.7415 11.8126V15.1946H74.8066V14.499H74.7298C74.5738 14.7485 74.3548 14.9519 74.0952 15.0884C73.8355 15.225 73.5445 15.2897 73.2518 15.2761C73.0452 15.2977 72.8364 15.2756 72.6389 15.211C72.4414 15.1465 72.2595 15.0411 72.1049 14.9015C71.9504 14.7619 71.8266 14.5914 71.7416 14.4007C71.6566 14.2101 71.6123 14.0037 71.6115 13.7948ZM74.7746 13.3718V12.958L73.573 13.0352C72.8953 13.0808 72.5879 13.3128 72.5879 13.7491C72.5879 14.1946 72.9721 14.4539 73.5004 14.4539C73.6552 14.4697 73.8116 14.4539 73.9602 14.4077C74.1088 14.3614 74.2467 14.2855 74.3656 14.1846C74.4844 14.0836 74.5819 13.9596 74.6522 13.82C74.7225 13.6804 74.7641 13.528 74.7746 13.3718ZM77.0179 12.7175C77.0179 11.1535 77.8172 10.1627 79.0605 10.1627C79.368 10.1485 79.6732 10.2225 79.9405 10.3763C80.2077 10.5301 80.4259 10.7572 80.5695 11.0311H80.6421V8.31238H81.6131V15.1944H80.6826V14.4123H80.6058C80.4511 14.6844 80.2253 14.9087 79.9529 15.0609C79.6805 15.2132 79.372 15.2875 79.0606 15.276C77.8087 15.276 77.0179 14.2853 77.0179 12.7175ZM78.0211 12.7175C78.0211 13.7673 78.5131 14.3992 79.3357 14.3992C80.1542 14.3992 80.6602 13.7583 80.6602 12.7217C80.6602 11.6902 80.149 11.0402 79.3357 11.0402C78.5183 11.0402 78.0211 11.6762 78.0211 12.7175ZM85.6312 12.7175C85.6002 12.3923 85.6372 12.0641 85.7397 11.754C85.8423 11.4439 86.0081 11.1589 86.2266 10.9171C86.4451 10.6752 86.7114 10.482 87.0085 10.3498C87.3056 10.2176 87.6269 10.1493 87.9517 10.1493C88.2766 10.1493 88.5978 10.2176 88.8949 10.3498C89.192 10.482 89.4583 10.6752 89.6768 10.9171C89.8953 11.1589 90.0612 11.4439 90.1637 11.754C90.2663 12.0641 90.3032 12.3923 90.2723 12.7175C90.3039 13.0432 90.2674 13.3719 90.1652 13.6826C90.0629 13.9932 89.8972 14.2789 89.6787 14.5212C89.4601 14.7636 89.1936 14.9573 88.8961 15.0898C88.5987 15.2223 88.277 15.2908 87.9517 15.2908C87.6264 15.2908 87.3047 15.2223 87.0073 15.0898C86.7099 14.9573 86.4433 14.7636 86.2248 14.5212C86.0062 14.2789 85.8405 13.9932 85.7383 13.6826C85.636 13.3719 85.5995 13.0432 85.6312 12.7175ZM89.2735 12.7175C89.2735 11.6446 88.7943 11.0171 87.9534 11.0171C87.1092 11.0171 86.6343 11.6446 86.6343 12.7175C86.6343 13.7991 87.1093 14.4217 87.9534 14.4217C88.7943 14.4217 89.2735 13.7948 89.2735 12.7175ZM91.5753 10.2448H92.5102V11.0311H92.5828C92.7059 10.7487 92.9135 10.5119 93.1768 10.3538C93.44 10.1957 93.7457 10.1242 94.0513 10.1492C94.2907 10.1311 94.5312 10.1674 94.7547 10.2555C94.9783 10.3435 95.1793 10.481 95.3429 10.6578C95.5065 10.8346 95.6284 11.0462 95.6997 11.2768C95.7709 11.5075 95.7897 11.7513 95.7545 11.9902V15.1944H94.7834V12.2355C94.7834 11.4401 94.4397 11.0445 93.7215 11.0445C93.5589 11.0369 93.3967 11.0648 93.2458 11.1261C93.0949 11.1875 92.9591 11.281 92.8475 11.4001C92.7359 11.5192 92.6512 11.6612 92.5992 11.8164C92.5473 11.9715 92.5293 12.1361 92.5465 12.2989V15.1946H91.5755L91.5753 10.2448ZM101.242 9.01248V10.2674H102.308V11.0901H101.242V13.6353C101.242 14.1538 101.454 14.3809 101.938 14.3809C102.062 14.3805 102.185 14.3729 102.308 14.3583V15.172C102.134 15.2034 101.957 15.2201 101.78 15.2219C100.7 15.2219 100.27 14.8397 100.27 13.8855V11.0901H99.4886V10.2673H100.27V9.01259L101.242 9.01248ZM103.635 8.31249H104.597V11.0402H104.674C104.803 10.7552 105.017 10.5171 105.285 10.3584C105.554 10.1997 105.864 10.1282 106.175 10.1535C106.413 10.1404 106.651 10.1804 106.872 10.2706C107.093 10.3608 107.292 10.499 107.453 10.6752C107.615 10.8515 107.736 11.0615 107.808 11.2903C107.88 11.5191 107.901 11.7611 107.869 11.9989V15.1946H106.897V12.2398C106.897 11.4491 106.531 11.0488 105.845 11.0488C105.678 11.035 105.51 11.0581 105.353 11.1165C105.196 11.1748 105.053 11.2669 104.935 11.3864C104.817 11.506 104.727 11.65 104.67 11.8084C104.613 11.9669 104.591 12.1359 104.606 12.3037V15.1946H103.635V8.31249ZM113.532 13.858C113.4 14.3104 113.114 14.7017 112.724 14.9635C112.334 15.2253 111.866 15.3409 111.4 15.2901C111.075 15.2987 110.753 15.2362 110.455 15.1071C110.158 14.9779 109.891 14.785 109.675 14.542C109.459 14.2989 109.298 14.0114 109.203 13.6994C109.108 13.3874 109.082 13.0584 109.126 12.7352C109.083 12.4111 109.11 12.0814 109.204 11.7684C109.299 11.4555 109.459 11.1667 109.674 10.9214C109.889 10.6762 110.154 10.4804 110.451 10.3471C110.748 10.2139 111.07 10.1464 111.395 10.1492C112.764 10.1492 113.591 11.0901 113.591 12.6445V12.9853H110.116V13.0401C110.101 13.2217 110.123 13.4045 110.182 13.5768C110.242 13.7491 110.336 13.9071 110.459 14.0406C110.583 14.1741 110.732 14.2802 110.899 14.3521C111.065 14.424 111.245 14.4601 111.426 14.4581C111.659 14.4861 111.894 14.4441 112.102 14.3372C112.311 14.2304 112.483 14.0635 112.597 13.858H113.532ZM110.116 12.2629H112.601C112.613 12.0968 112.591 11.9299 112.535 11.773C112.48 11.6162 112.392 11.4727 112.278 11.352C112.164 11.2312 112.026 11.1358 111.873 11.0719C111.72 11.0079 111.555 10.9768 111.39 10.9807C111.222 10.9785 111.055 11.0102 110.9 11.0739C110.744 11.1376 110.603 11.232 110.484 11.3515C110.365 11.471 110.272 11.6132 110.208 11.7697C110.145 11.9263 110.114 12.094 110.116 12.2629Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="w-[144.17px] h-[43.7px]">
        <svg
          width="145"
          height="44"
          viewBox="0 0 145 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138.829 43.0374H5.33958C2.40285 43.0374 0 40.6165 0 37.6577V5.3797C0 2.42085 2.4028 0 5.33958 0H138.829C141.766 0 144.169 2.42085 144.169 5.3797V37.6577C144.169 40.6165 141.766 43.0374 138.829 43.0374"
            fill="black"
          />
          <path
            d="M50.6369 11.0213C50.6369 11.9227 50.3719 12.6406 49.8413 13.176C49.2385 13.8128 48.453 14.1314 47.4873 14.1314C46.5624 14.1314 45.7761 13.8086 45.1295 13.1622C44.4817 12.5162 44.1584 11.7151 44.1584 10.7594C44.1584 9.80322 44.4817 9.00265 45.1295 8.35614C45.7761 7.71022 46.5624 7.38696 47.4873 7.38696C47.9462 7.38696 48.3855 7.47739 48.8026 7.6577C49.2197 7.83845 49.5543 8.07839 49.8046 8.37887L49.2414 8.94666C48.8172 8.43603 48.2332 8.1809 47.4873 8.1809C46.8128 8.1809 46.2296 8.41968 45.7374 8.89753C45.2451 9.37586 44.999 9.99616 44.999 10.7594C44.999 11.5227 45.2451 12.1429 45.7374 12.6213C46.2296 13.0992 46.8128 13.3379 47.4873 13.3379C48.2028 13.3379 48.7993 13.0978 49.2769 12.6171C49.5869 12.3039 49.7662 11.8686 49.8141 11.3095H47.4872V10.5341H50.5922C50.6222 10.7027 50.6368 10.8645 50.6368 11.0213"
            fill="white"
          />
          <path
            d="M50.636 11.0212H50.5292C50.5283 11.9021 50.2729 12.5863 49.7648 13.0999L49.7637 13.1008L49.7632 13.1016C49.1796 13.7164 48.4295 14.0224 47.4863 14.0237C46.5862 14.0224 45.8327 13.7131 45.2036 13.086C44.5759 12.4577 44.2655 11.6906 44.2643 10.7593C44.2655 9.82756 44.5759 9.06094 45.2036 8.43305C45.8327 7.80555 46.5862 7.49578 47.4863 7.49448C47.9314 7.49448 48.3553 7.582 48.7595 7.75637C49.1641 7.93209 49.4837 8.16236 49.7219 8.44823L49.8036 8.3788L49.7282 8.30273L49.165 8.8709L49.2404 8.94658L49.3227 8.87772C48.8787 8.3418 48.2556 8.07164 47.4863 8.07324C46.7868 8.07237 46.1715 8.3242 45.6625 8.82018C45.1486 9.31775 44.8904 9.97297 44.8913 10.7593C44.8904 11.5457 45.1486 12.2009 45.6625 12.6985C46.1715 13.1945 46.7868 13.4463 47.4863 13.4454C48.2255 13.4467 48.8555 13.194 49.3514 12.6931C49.6826 12.3585 49.8704 11.895 49.9196 11.3187L49.9296 11.2019H47.5931V10.6416H50.5913V10.534L50.4861 10.5529C50.5153 10.7161 50.5291 10.8711 50.5291 11.0212H50.7427C50.7427 10.8577 50.7276 10.6896 50.6964 10.5148L50.6805 10.4264H47.3796V11.417H49.8132V11.3095L49.7069 11.3002C49.6598 11.8416 49.4887 12.2493 49.2004 12.541C48.7416 13.0016 48.1784 13.2289 47.4863 13.2302C46.8369 13.2293 46.2858 13.0041 45.8107 12.5439C45.3401 12.0853 45.1061 11.4999 45.1049 10.7593C45.1061 10.0188 45.3401 9.43332 45.8107 8.97477C46.2858 8.51458 46.8368 8.28929 47.4863 8.28842C48.2085 8.29016 48.7537 8.53053 49.1588 9.01597L49.2339 9.10591L49.8792 8.45491L49.9484 8.38518L49.8854 8.30984C49.623 7.99471 49.2735 7.74457 48.8438 7.55889C48.4133 7.37262 47.959 7.2793 47.4863 7.2793C46.5369 7.27848 45.7176 7.61469 45.0531 8.28005C44.3861 8.94411 44.0499 9.77882 44.0508 10.7593C44.0499 11.7394 44.3861 12.5746 45.0535 13.239C45.7176 13.9039 46.5369 14.2398 47.4863 14.2389C48.475 14.2398 49.2952 13.9089 49.9176 13.2503L49.8403 13.176L49.9158 13.2521C50.469 12.6952 50.7435 11.9429 50.7427 11.0212H50.6359H50.636ZM55.5583 8.32459H52.6403V10.3715H55.2718V11.1472H52.6403V13.194H55.5583V13.9871H51.8177V7.53152H55.5583V8.32459Z"
            fill="white"
          />
          <path
            d="M55.5595 8.32449V8.2169H52.5348V10.479H55.1662V11.0392L52.5347 11.0395V13.3015H55.4527V13.8794H51.9257V7.63901H55.4527V8.32449H55.5595V8.2169V8.32449H55.6663V7.42383H51.7122V14.0946H55.6663V13.0864H52.7483V11.2547H55.3798V10.2638H52.7483V8.43208H55.6663V8.32449H55.5595ZM59.0315 13.9871H58.2076V8.32444H56.418V7.53137H60.8211V8.32444H59.0315V13.987"
            fill="white"
          />
          <path
            d="M59.0317 13.9871V13.8794H58.3146V8.2169H56.525V7.63906H60.7145V8.2169H58.9249V13.987H59.0317V13.8794V13.987H59.1385V8.43208H60.9281V7.42383H56.3114V8.43203H58.101V14.0946H59.1385V13.987H59.0317V13.9871ZM64.0071 13.9871V7.53137H64.8301V13.987H64.0071"
            fill="white"
          />
          <path
            d="M64.0106 13.9871H64.1174V7.63901H64.7268V13.8794H64.0106V13.987H64.1174H64.0106V14.0946H64.9404V7.42383H63.9038V14.0946H64.0106V13.987V13.9871ZM68.4858 13.9871H67.6619V8.32444H65.8724V7.53137H70.2754V8.32444H68.4858V13.987"
            fill="white"
          />
          <path
            d="M68.4843 13.9872V13.8796H67.7672V8.21707H65.9777V7.63923H70.1672V8.21707H68.3776V13.9872H68.4843V13.8796V13.9872H68.5912V8.43225H70.3807V7.424H65.7642V8.43221H67.5537V14.0947H68.5912V13.9871H68.4843V13.9872ZM74.5189 12.6125C74.9932 13.0962 75.5735 13.3378 76.2597 13.3378C76.946 13.3378 77.5266 13.0962 78.0001 12.6125C78.4748 12.1288 78.7126 11.5104 78.7126 10.7594C78.7126 10.0084 78.4748 9.39007 78.0001 8.90633C77.5266 8.42258 76.946 8.1809 76.2597 8.1809C75.5735 8.1809 74.9932 8.42258 74.5189 8.90633C74.0454 9.39007 73.8077 10.0084 73.8077 10.7594C73.8077 11.5104 74.0454 12.1288 74.5189 12.6125ZM78.6091 13.1529C77.9792 13.8056 77.1958 14.1314 76.2597 14.1314C75.3228 14.1314 74.5397 13.8056 73.9112 13.1529C73.2808 12.501 72.9671 11.703 72.9671 10.7594C72.9671 9.81579 73.2808 9.01764 73.9112 8.36586C74.5398 7.71307 75.3228 7.38696 76.2597 7.38696C77.1909 7.38696 77.9721 7.71481 78.605 8.37007C79.237 9.02528 79.5532 9.82169 79.5532 10.7594C79.5532 11.703 79.2377 12.501 78.6091 13.1529Z"
            fill="white"
          />
          <path
            d="M74.5155 12.6124L74.4396 12.6881C74.9315 13.1911 75.5451 13.4467 76.2563 13.4454C76.9671 13.4467 77.5816 13.1911 78.0726 12.6881C78.5677 12.1845 78.8168 11.533 78.816 10.7593C78.8167 9.98564 78.5677 9.33415 78.0726 8.83058C77.5816 8.32749 76.9671 8.07198 76.2563 8.07324C75.5451 8.07198 74.9315 8.32749 74.4396 8.83058C73.9457 9.33415 73.6962 9.98564 73.6975 10.7593C73.6962 11.533 73.9457 12.1845 74.4396 12.6881L74.5155 12.6124L74.5915 12.5368C74.1385 12.0723 73.9119 11.4881 73.9111 10.7593C73.9119 10.0306 74.1385 9.44638 74.5914 8.98188C75.0486 8.51753 75.5947 8.28973 76.2563 8.28847C76.9175 8.28973 77.4648 8.51753 77.9208 8.98188C78.3746 9.44638 78.6012 10.0306 78.602 10.7593C78.6012 11.488 78.3746 12.0723 77.9208 12.5368C77.4648 13.0012 76.9175 13.2289 76.2563 13.2302C75.5947 13.2289 75.0486 13.0012 74.5914 12.5368L74.5155 12.6124ZM78.6057 13.1528L78.5294 13.0781C77.917 13.7102 77.1682 14.0225 76.2563 14.0237C75.344 14.0224 74.5952 13.7102 73.984 13.0781L73.9811 13.0747L73.984 13.0781C73.3729 12.4438 73.0714 11.6789 73.0705 10.7593C73.0714 9.8397 73.3729 9.07482 73.984 8.4406C74.5952 7.80845 75.344 7.49579 76.2563 7.49453C77.1623 7.49579 77.9094 7.80975 78.5252 8.44519C79.1384 9.08236 79.4417 9.84604 79.443 10.7593C79.4417 11.6789 79.1393 12.4438 78.5294 13.0781L78.6057 13.1528L78.6825 13.2276C79.3299 12.5577 79.6573 11.7268 79.6566 10.7593C79.6574 9.79734 79.3286 8.9681 78.6783 8.29524C78.0276 7.61972 77.2124 7.27814 76.2563 7.2793C75.2952 7.27814 74.4776 7.61812 73.831 8.29103V8.29055C73.1823 8.9609 72.8561 9.79183 72.8569 10.7593C72.8561 11.7268 73.1823 12.5577 73.831 13.228L73.8339 13.2311L73.831 13.2276C74.4776 13.9005 75.2952 14.2398 76.2563 14.2389C77.217 14.2398 78.0346 13.9005 78.6825 13.2276L78.6057 13.1528ZM80.7052 13.9872V7.53147H81.7073L84.8213 12.5535H84.8568L84.8213 11.3094V7.53147H85.6453V13.9871H84.7859L81.5279 8.72168H81.4924L81.5279 9.9662V13.9871H80.7053"
            fill="white"
          />
          <path
            d="M80.7101 13.9871H80.817V7.63901H81.6529L84.767 12.661H84.9714L84.933 11.3078V7.63906H85.5433V13.8794H84.85L81.5921 8.61404H81.3877L81.426 9.96789V13.8794H80.7102V13.987H80.817H80.7102V14.0946H81.6396V9.96445L81.6041 8.71873L81.4973 8.72163V8.82922H81.5328V8.72163L81.4422 8.77883L84.7315 14.0946H85.7569V7.42383H84.7195V11.3106L84.7549 12.5563L84.8617 12.5534V12.4458H84.8262V12.5534L84.9168 12.4963L81.7713 7.42383H80.6034V14.0946H80.7102V13.987L80.7101 13.9871ZM114.201 32.2779H116.193V18.8275H114.201L114.201 32.2779ZM132.149 23.6726L129.865 29.5041H129.796L127.426 23.6726H125.279L128.834 31.8231L126.807 36.3568H128.887L134.365 23.6726L132.149 23.6726ZM120.848 30.7502C120.195 30.7502 119.285 30.4215 119.285 29.6079C119.285 28.5697 120.419 28.1717 121.397 28.1717C122.274 28.1717 122.685 28.3621 123.218 28.6219C123.063 29.8676 121.999 30.7502 120.848 30.7502ZM121.089 23.3784C119.646 23.3784 118.152 24.0188 117.534 25.4378L119.302 26.1817C119.68 25.4378 120.384 25.1952 121.123 25.1952C122.153 25.1952 123.201 25.8185 123.218 26.926V27.0643C122.857 26.8566 122.085 26.5452 121.14 26.5452C119.234 26.5452 117.292 27.6005 117.292 29.5734C117.292 31.3731 118.856 32.5326 120.607 32.5326C121.947 32.5326 122.685 31.927 123.15 31.2176H123.218V32.2557H125.141V27.0987C125.141 24.7111 123.373 23.3784 121.089 23.3784ZM108.773 25.3099H105.939V20.6995H108.773C110.263 20.6995 111.109 21.9422 111.109 23.0047C111.109 24.047 110.263 25.3099 108.773 25.3099ZM108.722 18.8275H103.948V32.2779H105.939V27.182H108.722C110.931 27.182 113.102 25.571 113.102 23.0047C113.102 20.4385 110.931 18.8275 108.722 18.8275ZM82.6854 30.7527C81.3087 30.7527 80.1561 29.5915 80.1561 27.9965C80.1561 26.3847 81.3087 25.2058 82.6854 25.2058C84.0445 25.2058 85.1111 26.3847 85.1111 27.9965C85.1111 29.5915 84.0445 30.7527 82.6854 30.7527H82.6854ZM84.9735 24.4258H84.9046C84.4575 23.8885 83.5968 23.4032 82.5131 23.4032C80.2421 23.4032 78.1605 25.4138 78.1605 27.9965C78.1605 30.5619 80.2421 32.5553 82.5131 32.5553C83.5968 32.5553 84.4575 32.0698 84.9046 31.5155H84.9735V32.1741C84.9735 33.9251 84.0445 34.861 82.5477 34.861C81.3262 34.861 80.5692 33.9767 80.2592 33.2315L78.5218 33.9595C79.0207 35.1728 80.3456 36.6637 82.5477 36.6637C84.8875 36.6637 86.8661 35.2767 86.8661 31.8967V23.6806H84.9735V24.4258ZM88.2423 32.2779H90.238V18.827H88.2423V32.2779ZM93.1801 27.8406C93.1284 26.0724 94.5392 25.1713 95.5542 25.1713C96.3461 25.1713 97.0168 25.5697 97.24 26.1422L93.1801 27.8406ZM99.3737 26.3153C98.9956 25.2923 97.8423 23.4032 95.4853 23.4032C93.1455 23.4032 91.2016 25.2579 91.2016 27.9792C91.2016 30.5447 93.1284 32.5553 95.7089 32.5553C97.791 32.5553 98.9956 31.2726 99.4944 30.5274L97.9459 29.4872C97.4301 30.25 96.7242 30.7527 95.7089 30.7527C94.694 30.7527 93.9715 30.2845 93.5067 29.3661L99.5798 26.8352L99.3737 26.3153ZM50.9884 24.8073V26.7486H55.5991C55.4615 27.8406 55.1001 28.6378 54.5495 29.1926C53.8788 29.8688 52.8293 30.614 50.9883 30.614C48.1495 30.614 45.9303 28.3087 45.9303 25.4486C45.9303 22.5886 48.1495 20.283 50.9884 20.283C52.5197 20.283 53.6376 20.8898 54.4636 21.6698L55.8227 20.3006C54.6701 19.191 53.1387 18.3417 50.9884 18.3417C47.1 18.3417 43.8312 21.5312 43.8312 25.4486C43.8312 29.3661 47.1 32.5553 50.9884 32.5553C53.0875 32.5553 54.6701 31.8623 55.9087 30.5619C57.1819 29.2792 57.5777 27.4766 57.5777 26.0207C57.5777 25.5697 57.5435 25.154 57.4742 24.8073H50.9884ZM62.8197 30.7527C61.443 30.7527 60.2558 29.6086 60.2558 27.9792C60.2558 26.3325 61.443 25.2058 62.8197 25.2058C64.1958 25.2058 65.383 26.3325 65.383 27.9792C65.383 29.6087 64.1958 30.7527 62.8197 30.7527ZM62.8197 23.4032C60.3075 23.4032 58.2601 25.3272 58.2601 27.9792C58.2601 30.614 60.3075 32.5553 62.8197 32.5553C65.3313 32.5553 67.3787 30.614 67.3787 27.9792C67.3787 25.3272 65.3313 23.4032 62.8197 23.4032ZM72.7654 30.7527C71.3893 30.7527 70.202 29.6086 70.202 27.9792C70.202 26.3325 71.3893 25.2058 72.7654 25.2058C74.1416 25.2058 75.3288 26.3325 75.3288 27.9792C75.3288 29.6087 74.1416 30.7527 72.7654 30.7527H72.7654ZM72.7654 23.4032C70.2534 23.4032 68.2064 25.3272 68.2064 27.9792C68.2064 30.614 70.2534 32.5553 72.7654 32.5553C75.2771 32.5553 77.3246 30.614 77.3246 27.9792C77.3246 25.3272 75.2771 23.4032 72.7654 23.4032H72.7654Z"
            fill="white"
          />
          <path
            d="M13.441 11.2681C13.1648 11.5181 13 11.9352 13 12.4888V12.3637V30.6325V30.5122C13 31.0235 13.1414 31.4183 13.3808 31.6726L13.4419 31.7313V31.7316C13.6357 31.9071 13.8842 32.0003 14.1691 32C14.4473 32 14.7605 31.911 15.0909 31.7229L27.0349 24.9118L31.1375 22.572C31.6586 22.2749 31.9511 21.8917 32 21.5013V21.4997C31.9511 21.1084 31.6586 20.7255 31.1376 20.4283L27.0345 18.0888L15.0909 11.2777C14.7598 11.0894 14.4465 11 14.1674 11C13.8829 11 13.6348 11.0929 13.441 11.2681H13.441Z"
            fill="#00C1FF"
          />
          <path
            d="M13.4155 32L13.358 31.9397C13.1329 31.6788 13 31.2736 13 30.7489V30.8724V12.129V12.2528C13 11.6846 13.155 11.2566 13.4146 11L23 21.5003L13.4155 32Z"
            fill="url(#paint0_linear_310_548)"
          />
          <path
            d="M26.6573 25L23 21.4997L26.657 18L31.072 20.4002C31.6326 20.705 31.9474 21.0979 32 21.4994V21.501C31.9474 21.9015 31.6326 22.2947 31.072 22.5995L26.6573 25"
            fill="url(#paint1_linear_310_548)"
          />
          <path
            d="M13.7488 32C13.4555 32.0002 13.1996 31.9115 13 31.7443V31.7441L23.4994 22L27 25.2493L14.6983 31.7361C14.3579 31.9152 14.0354 32 13.7488 32Z"
            fill="url(#paint2_linear_310_548)"
          />
          <path
            d="M23.4999 22L13 11.2809C13.1996 11.0973 13.4552 11 13.7481 11C14.0355 11 14.3582 11.0936 14.6992 11.291L27 18.4264L23.4999 22"
            fill="url(#paint3_linear_310_548)"
          />
          <path
            d="M13.804 32C13.5136 32 13.2599 31.9095 13.0623 31.7391L13.0619 31.7394C13.0611 31.7386 13.0603 31.7379 13.0593 31.7372L13.0053 31.6867C13.0036 31.6852 13.002 31.6833 13 31.6815L13.0623 31.6219C13.2599 31.7923 13.5133 31.8828 13.8037 31.8825C14.0874 31.8825 14.4067 31.7961 14.7436 31.6135L26.922 25L27 25.0746L26.921 25.1175L14.7436 31.7306C14.4365 31.897 14.1444 31.9837 13.8806 31.9982C13.8551 31.9994 13.8295 32 13.804 32"
            fill="url(#paint4_linear_310_548)"
          />
          <path
            d="M27.0771 25L27 24.9339L31.1315 22.9211C31.6562 22.6656 31.9508 22.3358 32 22C32 22.1232 31.9679 22.2465 31.9042 22.3664C31.7757 22.6081 31.5181 22.8365 31.1315 23.0249L27.0771 25"
            fill="url(#paint5_linear_310_548)"
          />
          <path
            d="M32 22C31.9508 21.5512 31.6562 21.112 31.1316 20.7712L27 18.0881L27.0771 18H27.0774L31.1316 20.6332C31.71 21.0092 31.9997 21.5045 32 22Z"
            fill="url(#paint6_linear_310_548)"
          />
          <path
            d="M26.9216 18L14.7436 11.3868C14.406 11.2039 14.0865 11.1172 13.802 11.1172C13.5119 11.1172 13.2589 11.2074 13.0613 11.3775L13 11.3186C13.0192 11.2992 13.0391 11.2805 13.0597 11.2625C13.0603 11.2619 13.0613 11.2612 13.062 11.2606C13.258 11.0918 13.5084 11.0016 13.7958 11H13.802C14.0865 11 14.406 11.0868 14.7436 11.2697L27 17.9252L26.9997 17.9254L26.9216 18Z"
            fill="url(#paint7_linear_310_548)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_310_548"
              x1="19.1256"
              y1="11.9309"
              x2="10.1259"
              y2="20.1727"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00A0FF" />
              <stop offset="0.00657" stop-color="#00A1FF" />
              <stop offset="0.2601" stop-color="#00BEFF" />
              <stop offset="0.5122" stop-color="#00D2FF" />
              <stop offset="0.7604" stop-color="#00DFFF" />
              <stop offset="1" stop-color="#00E3FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_310_548"
              x1="32.6831"
              y1="21.4392"
              x2="11.2582"
              y2="21.4392"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE000" />
              <stop offset="0.4087" stop-color="#FFBD00" />
              <stop offset="0.7754" stop-color="#FFA500" />
              <stop offset="1" stop-color="#FF9C00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_310_548"
              x1="25.1415"
              y1="25.0893"
              x2="10.9685"
              y2="40.2984"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF3A44" />
              <stop offset="1" stop-color="#C31162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_310_548"
              x1="10.2939"
              y1="9.69169"
              x2="17.2574"
              y2="16.4951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32A071" />
              <stop offset="0.0685" stop-color="#2DA771" />
              <stop offset="0.4762" stop-color="#15CF74" />
              <stop offset="0.8009" stop-color="#06E775" />
              <stop offset="1" stop-color="#00F076" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_310_548"
              x1="25.0745"
              y1="27.1348"
              x2="13.4873"
              y2="39.2975"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC2E36" />
              <stop offset="1" stop-color="#9C0E4E" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_310_548"
              x1="32.6393"
              y1="21.9994"
              x2="12.5887"
              y2="21.9994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E0C500" />
              <stop offset="0.4087" stop-color="#E0A600" />
              <stop offset="0.7754" stop-color="#E09100" />
              <stop offset="1" stop-color="#E08900" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_310_548"
              x1="32.6393"
              y1="22.0009"
              x2="12.5901"
              y2="22.0009"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFE840" />
              <stop offset="0.4087" stop-color="#FFCE40" />
              <stop offset="0.7754" stop-color="#FFBC40" />
              <stop offset="1" stop-color="#FFB540" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_310_548"
              x1="10.367"
              y1="12.0056"
              x2="15.5409"
              y2="17.4368"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#65B895" />
              <stop offset="0.0685" stop-color="#62BD95" />
              <stop offset="0.4762" stop-color="#50DB97" />
              <stop offset="0.8009" stop-color="#44ED98" />
              <stop offset="1" stop-color="#40F498" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default DownloadNowButtons;
